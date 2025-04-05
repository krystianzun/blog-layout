import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Medium-Style Blog",
  description: "A Medium-inspired blog layout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="border-b border-gray-200">
          <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
            <p className="text-lg font-bold text-green-800">Green Jobs</p>
            <div className="flex items-center space-x-6">
              <a href="#" className="hidden md:block text">
                Blog
              </a>
              <a
                href="#"
                className="bg-green-600 text-white px-4 py-2 rounded-full text-sm"
              >
                Contact us
              </a>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
