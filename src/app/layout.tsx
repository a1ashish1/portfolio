import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashish Kumar | Senior Software Engineer",
  description:
    "Backend specialist with 6+ years of experience building distributed systems, scalable data pipelines, and AI-powered solutions.",
  keywords: [
    "Software Engineer",
    "Backend Developer",
    "Distributed Systems",
    "System Design",
    "Java",
    "Python",
    "AWS",
    "Kubernetes",
  ],
  authors: [{ name: "Ashish Kumar" }],
  openGraph: {
    title: "Ashish Kumar | Senior Software Engineer",
    description:
      "Backend specialist building distributed systems, data pipelines, and AI-powered solutions at scale.",
    url: "https://a1ashish1.in",
    siteName: "Ashish Kumar",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashish Kumar | Senior Software Engineer",
    description:
      "Backend specialist building distributed systems, data pipelines, and AI-powered solutions at scale.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
