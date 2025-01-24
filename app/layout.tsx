import type { Metadata } from "next";
import { IBM_Plex_Sans, } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import  { ClerkProvider, SignedIn, SignedOut, SignIn,} from '@clerk/nextjs' 


const IBM_Plex = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight:['400','500','600', '700'],
});



export const metadata: Metadata = {
  title: "Pic2Life",
  description: "AI-powered Image Generater",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: '#624cf5' }
    }}>
    <html lang="en">
      <body
        className={cn("font-IBM_PLEX antialiased",IBM_Plex.variable,IBM_Plex.className)}
      >
        <main className='flex-center min-h-screen w-full bg-purple-100'>
             
        <SignedOut>
          <SignIn routing="hash"/>
        </SignedOut>
        <SignedIn >
        {children}
        </SignedIn>
        </main>
      </body>
    </html>
    </ClerkProvider>
  );
}
