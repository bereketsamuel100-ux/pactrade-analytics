export default function WorkspaceDashboardPage({
  params,
}: {
  params: { workspaceId: string };
}) {
  return (
    <div>
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      <p className="text-muted-foreground">
        Analytics for workspace: {params.workspaceId}
      </p>
      {/* Analytics components will go here */}
    </div>
  );
}
