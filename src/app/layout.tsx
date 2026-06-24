import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
  title: "Dhukio — Save Smarter, Invest Better",
  description:
    "Track your savings, monitor investments, and grow your wealth with Dhukio — the all-in-one finance saving and investment tracking platform.",
  keywords: ["finance", "savings", "investment", "tracking", "wealth", "dhukio"],
  openGraph: {
    title: "Dhukio — Save Smarter, Invest Better",
    description:
      "Track your savings, monitor investments, and grow your wealth with Dhukio.",
    images: ["/dhukio.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
