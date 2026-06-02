import type { Metadata } from "next";
import { GamePage } from "@/components/game/GamePage";

export const metadata: Metadata = {
  title: "A Little Question for Weather 💕",
  description: "A tiny, playful surprise just for you, Mausam.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Game() {
  return <GamePage />;
}
