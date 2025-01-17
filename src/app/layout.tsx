import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import FontAwesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import '../lib/fontawesome';
import { Providers } from "./providers";

// Prevent FontAwesome from adding its CSS automatically
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Freehold Puchong",
  description: "Freehold Puchong",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><Providers>{children}</Providers></body>
    </html>
  );
}
