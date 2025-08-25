export const subscriptionPlans = {
  free: {
    name: "Free",
    description: "100 trades/mo, 1 account, basic charts.",
    stripePriceId: "", // This plan does not have a Stripe Price ID
  },
  pro: {
    name: "Pro",
    description: "Unlimited trades, multi-account, CSV import, exports, tag heatmap, journal prompts.",
    stripePriceId: "price_placeholder_pro_monthly", // REPLACE with your Stripe Price ID
  },
  premium: {
    name: "Premium",
    description: "Team workspaces (up to 5 users), API access, advanced analytics, priority support.",
    stripePriceId: "price_placeholder_premium_monthly", // REPLACE with your Stripe Price ID
  },
};

export type SubscriptionPlan = keyof typeof subscriptionPlans;
