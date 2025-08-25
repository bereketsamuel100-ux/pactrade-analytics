import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { createTradeSchema } from "@/lib/validators/trade";
import { db } from "@/lib/db";
import { z } from "zod";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const tradeData = createTradeSchema.parse(body);

    // Verify user has access to the workspace
    const membership = await db.membership.findFirst({
      where: {
        workspaceId: tradeData.workspaceId,
        userId: session.user.id,
      },
    });

    if (!membership) {
      return new NextResponse("Forbidden", { status: 403 });
    }

    const trade = await db.trade.create({
      data: {
        ...tradeData,
      },
    });

    return NextResponse.json(trade, { status: 201 });
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

    const { searchParams } = new URL(req.url);
    const workspaceId = searchParams.get("workspaceId");

    if (!workspaceId) {
      return new NextResponse("Workspace ID is required", { status: 400 });
    }

    // Verify user has access to the workspace
    const membership = await db.membership.findFirst({
      where: {
        workspaceId: workspaceId,
        userId: session.user.id,
      },
    });

    if (!membership) {
      return new NextResponse("Forbidden", { status: 403 });
    }

    const trades = await db.trade.findMany({
      where: {
        workspaceId: workspaceId,
      },
      orderBy: {
        closedAt: "desc",
      },
    });

    return NextResponse.json(trades);
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
