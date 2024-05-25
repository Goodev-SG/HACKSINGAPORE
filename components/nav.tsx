import { Search } from "lucide-react";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignOutButton,
} from "@clerk/nextjs";

export default function Nav() {
  return (
    <div className="flex flex-row justify-between px-20 py-5 items-center border-b">
      <a href="/" className="">
        <h1 className="font-bold text-3xl">Retire Ease</h1>
      </a>
      <ul className="flex flex-row gap-5">
        <li>Dashboard</li>
        <li>Dashboard</li>
        <li>Dashboard</li>
      </ul>
      <div className="flex flex-row border px-3 py-2 rounded-xl w-80 items-center gap-3">
        <Search size={15} />
        <input type="text" placeholder="Search" />
      </div>
      <div className="flex flex-row gap-3">
        <SignedOut>
          <SignInButton forceRedirectUrl="/dashboard" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
