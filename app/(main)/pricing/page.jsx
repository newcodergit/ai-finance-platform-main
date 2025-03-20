import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { PremiumPlan } from "@/components/premium-plan";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

const freeFeatures = [
  "Basic transaction tracking",
  "Single account management",
  "Basic budget planning",
  "Monthly reports",
  "Email notifications",
];

const premiumFeatures = [
  {
    title: "Advanced Analytics",
    description: "Get detailed insights into your spending patterns and financial health",
    icon: "📊"
  },
  {
    title: "Smart Receipt Scanner",
    description: "Automatically extract and categorize expenses from your receipts",
    icon: "📸"
  },
  {
    title: "Budget Planning",
    description: "Create and track custom budgets with smart alerts and recommendations",
    icon: "💰"
  },
  {
    title: "Multi-Account Support",
    description: "Manage all your bank accounts, credit cards, and investments in one place",
    icon: "🏦"
  },
  {
    title: "Multi-Currency",
    description: "Track expenses and manage budgets across different currencies",
    icon: "🌍"
  },
  {
    title: "AI Insights",
    description: "Get personalized financial recommendations powered by AI",
    icon: "🤖"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    content: "The premium features have completely transformed how I manage my business finances. The receipt scanner alone saves me hours every week.",
    image: "/testimonials/sarah.jpg"
  },
  {
    name: "Michael Chen",
    role: "Freelance Developer",
    content: "The multi-currency support and AI insights have been game-changers for my international clients. Highly recommended!",
    image: "/testimonials/michael.jpg"
  },
  {
    name: "Emma Davis",
    role: "Financial Advisor",
    content: "I recommend this platform to all my clients. The advanced analytics help them make better financial decisions.",
    image: "/testimonials/emma.jpg"
  }
];

export default function PricingPage() {
  return (
    <div className="container py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-muted-foreground text-lg">
          Choose the plan that best fits your needs
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
        {/* Free Plan */}
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Free</h2>
          <div className="mb-4">
            <span className="text-4xl font-bold">₹0</span>
            <span className="text-muted-foreground">/month</span>
          </div>
          <p className="text-muted-foreground mb-6">
            Perfect for personal finance management
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>Basic transaction tracking</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>Single account management</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>Basic budget planning</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>Monthly reports</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>Email notifications</span>
            </li>
          </ul>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>

        {/* Premium Plan */}
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
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>Advanced Analytics</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>Smart Receipt Scanner</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>Budget Planning</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>Multi-Account Support</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>Multi-Currency</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span>AI Insights</span>
            </li>
          </ul>
          <Button className="w-full" asChild>
            <Link href="/dashboard?plan=premium">Start 14-Day Free Trial</Link>
          </Button>
        </div>
      </div>

      {/* Premium Features Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Premium Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {premiumFeatures.map((feature, index) => (
            <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/dashboard?plan=premium">Upgrade to Premium</Link>
          </Button>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Premium Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 border rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="/dashboard?plan=premium">Join Our Premium Users</Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 