import { Metadata } from "next";
import { BioDataPage } from "@/components/bioData/BioDataPage";

export const metadata: Metadata = {
  title: "Ashish Kumar | Bio-Data",
  description:
    "Personal bio-data of Ashish Kumar — education, career, family details, and achievements.",
};

export default function BioData() {
  return <BioDataPage />;
}
