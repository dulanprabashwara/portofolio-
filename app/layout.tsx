import type { Metadata } from "next";
import { Genos, Poppins } from "next/font/google";
import { MotionProvider } from "@/components/providers/MotionProvider";
import "./globals.css";

const genos = Genos({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dulan Prabashwara Portfolio",
  description: "Software engineering portfolio of Dulan Prabashwara.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${genos.variable} ${poppins.variable}`}>
      <body className="font-body antialiased min-h-screen">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
