import React from "react";
import Link from "next/link";
import { SignedIn, SignIn, SignInButton, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./ui/ModeToggle";
import DashboardBtn from "./ui/DashboardBtn";

const Navbar = () => {
  return (
    <div>
      <nav className="border-b">
        <div className="flex h-16 items-center px-4 container mx-auto">
          {/* left side logo*/}
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-2xl mr-6 font-mono hover:opactiy-80 transition-opacity"
          >
            <span className="text-gray-800 dark:text-white">{`{`}</span>
            <span className="bg-gradient-to-tr text-gray-800 dark:text-white to-gray-700 ">
              codeFuzz
            </span>
            <span className="text-gray-700 dark:text-white">{`}`}</span>
          </Link>

          {/* Right side Actions*/}
          {/* <SignInButton>signin</SignInButton> */}
          <SignedIn>
            <div className="flex items-center space-x-4 ml-auto">
              <DashboardBtn />
              <ModeToggle />
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
