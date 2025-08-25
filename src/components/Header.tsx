"use client";

import { ModeToggle } from "@/components/ThemeToggle";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const { data: session, status } = useSession();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-lg">
            TradeJournal
          </div>
          <nav className="flex items-center gap-4">
            <ModeToggle />
            {status === "loading" ? (
              <div className="w-24 h-10 bg-muted animate-pulse rounded-md" />
            ) : session ? (
              <>
                <span className="text-sm font-medium">
                  Welcome, {session.user?.name}
                </span>
                <Button variant="outline" onClick={() => signOut()}>
                  Sign Out
                </Button>
              </>
            ) : (
              <Button onClick={() => signIn("google")}>
                Sign In
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
