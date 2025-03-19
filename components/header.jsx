import React from "react";
import { Button } from "./ui/button";
import { PenBox, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";
import Image from "next/image";

const Header = async () => {
  await checkUser();

  return (
    <header className="fixed top-0 z-50 w-full glass animate-fade-in">
      <nav className="container flex items-center justify-between px-4 py-4 mx-auto">
        <Link href="/" className="button-hover">
          <Image
            src={"/logo.png"}
            alt="Welth Logo"
            width={300}
            height={200}
            className="object-contain w-auto h-12"
          />
        </Link>

        {/* Navigation Links - Different for signed in/out users */}
        <div className="items-center hidden space-x-8 md:flex">
          <SignedOut>
            <a href="#features" className="text-gray-600 transition-colors duration-200 hover:text-primary">
              Features
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 transition-colors duration-200 hover:text-primary"
            >
              Testimonials
            </a>
          </SignedOut>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link
              href="/dashboard"
              className="text-gray-600 transition-colors duration-200 hover:text-primary dark:text-blue-400 dark:hover:text-blue-300"
            >
              <Button variant="outline" className="button-hover">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
            <a href="/transaction/create">
              <Button className="button-hover">
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </a>
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline" className="button-hover">Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10 button-hover",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
