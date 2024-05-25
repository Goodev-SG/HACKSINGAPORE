import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignOutButton,
} from "@clerk/nextjs";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Nav />
          <div className="px-[10%] py-10">{children}</div>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
