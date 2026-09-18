import type { Metadata } from "next";
import { WhyPngWhyPage } from "@/components/whypngwhy/WhyPngWhyPage";

export const metadata: Metadata = {
  title: "WHY P&G WHY? 📣 | Return My Mausam",
  description:
    "A completely unofficial, deeply unserious protest page. Satire only.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function WhyPngWhy() {
  return <WhyPngWhyPage />;
}
