import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jobique - LinkedIn Job Optimizer",
  description:
    "Discover the freshest job opportunities with Jobique. Find jobs posted in the last 1-6 hours using hidden LinkedIn time filters and apply early for better response rates.",
  openGraph: {
    title: "Jobique - LinkedIn Job Optimizer",
    description:
      "Find jobs posted just hours ago. Stand out by applying early with Jobique.",
    url: "https://jobique-tan.vercel.app",
    siteName: "Jobique",
    images: [
      {
        url: "https://jobique-tan.vercel.app/og-image.png", // ✅ Make sure the image exists
        width: 1200,
        height: 630,
        alt: "Jobique - Discover Jobs Early",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jobique - LinkedIn Job Optimizer",
    description:
      "Find jobs posted just hours ago. Stand out by applying early with Jobique.",
    images: ["https://jobique-tan.vercel.app/og-image.png"],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
