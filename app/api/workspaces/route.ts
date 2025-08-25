import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { createWorkspaceSchema } from "@/lib/validators/workspace";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { db } from "@/lib/db";
import { z } from "zod";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { name } = createWorkspaceSchema.parse(body);

    const workspace = await db.workspace.create({
      data: {
        name,
        ownerId: session.user.id!,
        memberships: {
          create: {
            userId: session.user.id!,
            role: "OWNER",
          },
        },
      },
    });

    return NextResponse.json(workspace, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(error.message, { status: 422 });
    }
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const workspaces = await db.workspace.findMany({
      where: {
        memberships: {
          some: {
            userId: session.user.id,
          },
        },
      },
    });

    return NextResponse.json(workspaces);
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
