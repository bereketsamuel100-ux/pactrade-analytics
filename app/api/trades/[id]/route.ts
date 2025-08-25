import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { updateTradeSchema } from "@/lib/validators/trade";
import { z } from "zod";

async function verifyUserAccess(userId: string, tradeId: string) {
  const trade = await db.trade.findUnique({
    where: { id: tradeId },
    select: { workspaceId: true },
  });

  if (!trade) {
    return false;
  }

  const membership = await db.membership.findFirst({
    where: {
      workspaceId: trade.workspaceId,
      userId: userId,
    },
  });

  return !!membership;
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!(await verifyUserAccess(session.user.id, params.id))) {
      return new NextResponse("Forbidden", { status: 403 });
    }

    const trade = await db.trade.findUnique({
      where: { id: params.id },
    });

    if (!trade) {
      return new NextResponse("Trade not found", { status: 404 });
    }

    return NextResponse.json(trade);
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id:string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!(await verifyUserAccess(session.user.id, params.id))) {
      return new NextResponse("Forbidden", { status: 403 });
    }

    const body = await req.json();
    const tradeData = updateTradeSchema.parse(body);

    const updatedTrade = await db.trade.update({
      where: { id: params.id },
      data: tradeData,
    });

    return NextResponse.json(updatedTrade);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(error.message, { status: 422 });
    }
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!(await verifyUserAccess(session.user.id, params.id))) {
      return new NextResponse("Forbidden", { status: 403 });
    }

    await db.trade.delete({
      where: { id: params.id },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
