"use client";

import { useQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

async function getTrades(workspaceId: string) {
  const res = await fetch(`/api/trades?workspaceId=${workspaceId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch trades");
  }
  return res.json();
}

export default function TradesPage({
  params,
}: {
  params: { workspaceId: string };
}) {
  const {
    data: trades,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["trades", params.workspaceId],
    queryFn: () => getTrades(params.workspaceId),
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Trades</h1>
        <Button>Log Trade</Button>
      </div>
      {isLoading && <p>Loading trades...</p>}
      {error && <p className="text-red-500">{error.message}</p>}
      {trades && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Symbol</TableHead>
              <TableHead>Side</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Entry Price</TableHead>
              <TableHead>Exit Price</TableHead>
              <TableHead>P&L</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {trades.map((trade: any) => (
              <TableRow key={trade.id}>
                <TableCell>{trade.symbol}</TableCell>
                <TableCell>{trade.side}</TableCell>
                <TableCell>{trade.quantity}</TableCell>
                <TableCell>{trade.entryPrice}</TableCell>
                <TableCell>{trade.exitPrice}</TableCell>
                <TableCell>{trade.pnl ?? "N/A"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
