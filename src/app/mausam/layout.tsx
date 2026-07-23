import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mausam Sinha | Supply Chain Manager",
  description:
    "Supply Chain Manager at Procter & Gamble. IIT Kharagpur Chemical Engineer specializing in production planning, S&OP, process excellence, and technical program management.",
  keywords: [
    "Mausam Sinha",
    "Supply Chain Manager",
    "Technical Program Management",
    "Production Planning",
    "S&OP",
    "Procter & Gamble",
    "IIT Kharagpur",
    "Process Excellence",
  ],
  authors: [{ name: "Mausam Sinha" }],
  openGraph: {
    title: "Mausam Sinha | Supply Chain Manager",
    description:
      "IIT Kharagpur graduate driving plant-level production planning, global pilots, and multimillion-dollar savings at Procter & Gamble.",
    url: "https://a1ashish1.in/mausam",
    siteName: "Mausam Sinha",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mausam Sinha | Supply Chain Manager",
    description:
      "IIT Kharagpur graduate driving plant-level production planning, global pilots, and multimillion-dollar savings at Procter & Gamble.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MausamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
