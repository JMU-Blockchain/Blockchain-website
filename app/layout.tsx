import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "JMU Blockchain | Unlocking the Ledger",
  description: "A technical and ethical deep-dive into decentralized systems, bridging the gap between student curiosity and industry reality.",
  keywords: ["blockchain", "JMU", "James Madison University", "crypto", "web3", "education", "decentralization"],
};

export const viewport: Viewport = {
  themeColor: "#452c63",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#452c63",
          colorBackground: "#ffffff",
          colorInputBackground: "#f9f9fb",
          colorInputText: "#1a1a1a",
        },
        elements: {
          formButtonPrimary: "bg-[#452c63] hover:bg-[#5a3a80]",
          card: "shadow-xl",
        }
      }}
    >
      <html lang="en">
        <body className={`${plusJakartaSans.className} antialiased`}>
          {children}
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
