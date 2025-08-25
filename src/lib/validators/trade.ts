import { z } from "zod";

export const createTradeSchema = z.object({
  workspaceId: z.string(),
  brokerageAccountId: z.string(),
  symbol: z.string(),
  market: z.string(),
  side: z.string(),
  quantity: z.number(),
  entryPrice: z.number(),
  exitPrice: z.number(),
  fees: z.number(),
  openedAt: z.string().datetime(),
  closedAt: z.string().datetime(),
  notes: z.string().optional(),
});

export type CreateTradePayload = z.infer<typeof createTradeSchema>;

export const updateTradeSchema = z.object({
  symbol: z.string().optional(),
  market: z.string().optional(),
  side: z.string().optional(),
  quantity: z.number().optional(),
  entryPrice: z.number().optional(),
  exitPrice: z.number().optional(),
  fees: z.number().optional(),
  openedAt: z.string().datetime().optional(),
  closedAt: z.string().datetime().optional(),
  notes: z.string().optional(),
});

export type UpdateTradePayload = z.infer<typeof updateTradeSchema>;
