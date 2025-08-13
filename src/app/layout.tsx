import type { Metadata, Viewport } from "next";
import "./globals.css";
import "@fontsource/inter";
import "@fontsource/poppins";
import TopNavigation from "@/components/TopNavigation";

export const metadata: Metadata = {
  title: "Octo - Wellness App",
  description: "Your personal wellness companion",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-pink-50 font-sans antialiased text-neutral-900 mobile-tap-highlight">
        <TopNavigation />
        <div className="w-full px-4 pt-4 md:pt-8 md:max-w-5xl md:mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
