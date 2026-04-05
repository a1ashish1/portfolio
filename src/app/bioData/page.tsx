import { Metadata } from "next";
import { BioDataPage } from "@/components/bioData/BioDataPage";
import { bioDataContent } from "@/data/bioDataContent";

export const metadata: Metadata = {
  title: "Ashish Kumar | Bio-Data",
  description:
    "Personal bio-data of Ashish Kumar — education, career, family details, and achievements.",
};

const photos = [
  { src: "/assets/20260303_180857.jpg", alt: "At Udaipur lakeside" },
  { src: "/assets/IMG-20260131-WA0048.jpg", alt: "Casual portrait" },
  { src: "/assets/IMG-20251213-WA0013.jpeg", alt: "Traditional look" },
  { src: "/assets/20241001_075506.jpg", alt: "At Pangong Lake" },
  { src: "/assets/20241001_074829.jpg", alt: "Bike ride at Pangong Lake" },
  { src: "/assets/20240929_113035.jpg", alt: "At Ladakh signpost" },
];

export default function BioData() {
  return <BioDataPage contentRecord={bioDataContent} photos={photos} />;
}
