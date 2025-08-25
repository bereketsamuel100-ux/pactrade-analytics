"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignInPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>
            Sign in to your TradeJournal account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button
              className="w-full"
              variant="outline"
              onClick={() => signIn("google", { callbackUrl: "/" })}
            >
              Sign In with Google
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button
              className="w-full"
              onClick={() => signIn("email", { email, callbackUrl: "/" })}
            >
              Sign In with Email
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
