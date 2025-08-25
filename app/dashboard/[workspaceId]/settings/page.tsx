"use client";

import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";

async function getBillingPortalUrl(workspaceId: string) {
  const res = await fetch(`/api/billing/portal?workspaceId=${workspaceId}`);
  if (!res.ok) {
    throw new Error("Failed to get billing portal URL");
  }
  const { url } = await res.json();
  return url;
}

export default function SettingsPage({
  params,
}: {
  params: { workspaceId: string };
}) {

  const { data: portalUrl, refetch } = useQuery({
    queryKey: ['billingPortal', params.workspaceId],
    queryFn: () => getBillingPortalUrl(params.workspaceId),
    enabled: false, // Don't fetch on load
  });

  const handleManageSubscription = async () => {
    const url = await refetch();
    if (url.data) {
      window.location.href = url.data;
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Settings</h1>
      <p className="text-muted-foreground">
        Manage your workspace settings.
      </p>
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Billing</h2>
        <p className="text-muted-foreground mt-2">
          Manage your subscription and billing details.
        </p>
        <Button className="mt-4" onClick={handleManageSubscription}>
          Manage Subscription
        </Button>
      </div>
    </div>
  );
}
