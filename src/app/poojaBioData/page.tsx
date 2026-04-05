import { Metadata } from "next";
import { BioDataPage } from "@/components/bioData/BioDataPage";
import { poojaBioDataContent } from "@/data/poojaBioDataContent";

export const metadata: Metadata = {
  title: "Pooja Bharti | Bio-Data",
  description:
    "Personal bio-data of Pooja Bharti — education, skills, family details, and photographs.",
};

const photos = [
  { src: "/assets/sis3.jpeg", alt: "Traditional portrait" },
  { src: "/assets/sis2.jpeg", alt: "Casual portrait" },
  { src: "/assets/sis1.jpeg", alt: "Academic project presentation" },
];

export default function PoojaBioData() {
  return (
    <BioDataPage contentRecord={poojaBioDataContent} photos={photos} />
  );
}
