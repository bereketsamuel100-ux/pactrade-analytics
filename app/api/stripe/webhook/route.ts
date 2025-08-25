import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = headers().get("stripe-signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  if (event.type === "checkout.session.completed") {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    );

    const workspaceId = session.metadata?.workspaceId;
    if (!workspaceId) {
      return new NextResponse("Workspace ID not found in session metadata", {
        status: 400,
      });
    }

    await db.subscription.create({
      data: {
        workspaceId: workspaceId,
        stripeCustomerId: subscription.customer as string,
        plan: subscription.items.data[0].price.id,
        status: subscription.status,
        currentPeriodEnd: new Date(subscription.current_period_end * 1000),
      },
    });
  }

  if (event.type === "customer.subscription.updated") {
    const subscription = event.data.object as Stripe.Subscription;
    await db.subscription.update({
      where: { stripeCustomerId: subscription.customer as string },
      data: {
        plan: subscription.items.data[0].price.id,
        status: subscription.status,
        currentPeriodEnd: new Date(subscription.current_period_end * 1000),
      },
    });
  }

  if (event.type === "customer.subscription.deleted") {
    const subscription = event.data.object as Stripe.Subscription;
    await db.subscription.update({
      where: { stripeCustomerId: subscription.customer as string },
      data: {
        status: subscription.status,
      },
    });
  }

  return NextResponse.json({ received: true });
}
