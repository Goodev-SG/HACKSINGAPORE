"use client";

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
} from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";
import NavWallet from "./navwallet";
import Header from "./Header";

export default function Nav() {
  const [isSignedIn, setIsSignedIn] = useState(useAuth().isSignedIn);
  return (
    <div className="flex flex-row justify-between px-20 py-5 items-center border-b">
      <a href="/" className="">
        <h1 className="font-bold text-3xl">Retire Ease</h1>
      </a>
      <div
        className={`flex w-4/12 items-center ${
          isSignedIn ? "justify-between" : "justify-end"
        }`}
      >
        <ul
          className={`flex flex-row gap-5 ${isSignedIn ? "block" : "hidden"}`}
        >
          <li>
            <Link href="/dashboard">Home</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
          <li>
            <Link href="/investment">Investment</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
        </ul>
        <div className="flex flex-row gap-4 justify-center items-center ">
          <div className={`${isSignedIn ? "block" : "hidden"}`}>
            <NavWallet walletPoint={90} />
          </div>
          <div className="flex flex-row items-center justify-center">
            <SignedOut>
              <SignInButton forceRedirectUrl="/dashboard" />
            </SignedOut>
            <SignedIn>
              {/* <UserButton /> */}
              <Header />
            </SignedIn>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-row border px-3 py-2 rounded-xl w-80 items-center gap-3">
        <Search size={15} />
        <input type="text" placeholder="Search" />
      </div> */}
    </div>
  );
}
