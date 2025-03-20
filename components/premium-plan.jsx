"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";

const premiumFeatures = [
  "Advanced Analytics",
  "Smart Receipt Scanner",
  "Budget Planning",
  "Multi-Account Support",
  "Multi-Currency",
  "AI Insights"
];

export function PremiumPlan({ user }) {
  return (
    <div className="p-6 border rounded-lg border-primary bg-primary/5 relative">
      <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg text-sm">
        Premium
      </div>
      <h2 className="text-2xl font-bold mb-4">Business Plan</h2>
      <div className="mb-4">
        <span className="text-4xl font-bold">₹70</span>
        <span className="text-muted-foreground">/month</span>
      </div>
      <p className="text-muted-foreground mb-6">
        Get access to all premium features with a 14-day free trial
      </p>
      <ul className="space-y-4 mb-6">
        {premiumFeatures.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-primary">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="w-full" asChild>
        <Link href="/dashboard?plan=premium">Start 14-Day Free Trial</Link>
      </Button>
    </div>
  );
}
