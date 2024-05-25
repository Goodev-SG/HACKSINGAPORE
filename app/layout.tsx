import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignOutButton,
} from "@clerk/nextjs";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header className="py-6 bg-primary px-4">
            <div className="flex justify-between">
              <div>
                <a href="/">
                  <img src="" alt="logo" />
                </a>
              </div>
              <div>
                <SignedOut>
                  <SignInButton forceRedirectUrl="/dashboard" />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </div>
          </header>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
