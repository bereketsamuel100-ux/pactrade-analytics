import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { stripe } from "@/lib/stripe";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const workspaceId = searchParams.get("workspaceId");

    if (!workspaceId) {
      return new NextResponse("Workspace ID is required", { status: 400 });
    }

    const subscription = await db.subscription.findFirst({
      where: { workspaceId: workspaceId },
    });

    if (!subscription) {
      return new NextResponse("No subscription found for this workspace", {
        status: 404,
      });
    }

    const stripeSession = await stripe.billingPortal.sessions.create({
      customer: subscription.stripeCustomerId,
      return_url: `${process.env.NEXTAUTH_URL}/dashboard/${workspaceId}/billing`,
    });

    return NextResponse.json({ url: stripeSession.url });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
