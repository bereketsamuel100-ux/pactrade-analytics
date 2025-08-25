import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { stripe } from "@/lib/stripe";
import { db } from "@/lib/db";
import { subscriptionPlans } from "@/config/subscriptions";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { plan, workspaceId } = body;

    if (!plan || !workspaceId) {
      return new NextResponse("Plan and workspace ID are required", {
        status: 400,
      });
    }

    const planDetails = subscriptionPlans[plan as keyof typeof subscriptionPlans];
    if (!planDetails || !planDetails.stripePriceId) {
      return new NextResponse("Invalid plan", { status: 400 });
    }

    const stripeSession = await stripe.checkout.sessions.create({
      success_url: `${process.env.NEXTAUTH_URL}/dashboard/${workspaceId}?success=true`,
      cancel_url: `${process.env.NEXTAUTH_URL}/dashboard/${workspaceId}?canceled=true`,
      payment_method_types: ["card"],
      mode: "subscription",
      billing_address_collection: "auto",
      line_items: [{ price: planDetails.stripePriceId, quantity: 1 }],
      metadata: {
        userId: session.user.id,
        workspaceId: workspaceId,
      },
    });

    return NextResponse.json({ sessionId: stripeSession.id });
  } catch (error) {
    console.error("Stripe Checkout Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
