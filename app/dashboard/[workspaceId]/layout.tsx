import { Sidebar } from "@/components/Sidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export default async function WorkspaceLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { workspaceId: string };
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/auth/signin");
  }

  const membership = await db.membership.findFirst({
    where: {
      userId: session.user.id,
      workspaceId: params.workspaceId,
    },
  });

  if (!membership) {
    // Or redirect to a "not found" or "unauthorized" page
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar workspaceId={params.workspaceId} />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
