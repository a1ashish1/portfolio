"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  Clock,
  Disc3,
  Heart,
  Megaphone,
  Moon,
  Music2,
  PartyPopper,
  Send,
  Sparkles,
  Stamp,
} from "lucide-react";
import { BubbleField } from "./BubbleField";

const NAARE = [
  "Tide se kapde saaf, par mera Sunday kaun saaf karega? 🧺",
  "Ariel removes tough stains. P&G removed my dinner partner. 🍝",
  "Head & Shoulders removes dandruff — aur mere plans bhi. 🧴",
  "Vicks lagane se cold jaata hai, akelapan nahi. 🌡️",
  "Gillette: the best a man can get… ghar pe akela. 🪒",
  "Pampers rakhe baby ko dry, meri aankhein? Full monsoon. 😭",
  "Whisper ultra-soft, meri complaints ultra-loud. 📣",
  "Oral-B se gums strong, rishta weak. 🦷",
  "S&OP ka full form: Sinha & Overtime Planning. 📊",
  "Zero-Touch Planning ho gaya — zero-touch dinner bhi. 🍽️",
  "Baddi plant ka OEE 98%, mere plans ka 0%. 📉",
  "Fabric Care toh ho gaya… Ashish Care kab? 🥺",
  "Line down ho sakti hai, meri hope nahi. 💪",
  "Month-end aata hai, woh nahi aati. 📅",
  "Supply chain optimise kar li, mera dinner schedule nahi. ⛓️",
];

const TICKER = [
  "WHY P&G WHY 📣",
  "RETURN MY MAUSAM 🥺",
  "4 PM MEANS 4 PM ⏰",
  "BAS EK LAST CALL = LIE 📵",
  "FREE THE SUPPLY CHAIN MANAGER 🧺",
  "DINNER TABLE IS EMPTY 🍽️",
];

const EXCUSES = [
  "5 min mein nikal rahi hoon",
  "Bas ek last call",
  "Line down ho gayi",
  "Month-end hai na",
  "Audit chal raha hai",
  "Shipment aa gaya",
  "Boss ne rok liya",
  "Ek email bhejni hai",
  "Nikal hi rahi thi, phir…",
];

const BINGO_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const DEMANDS = [
  { emoji: "⏰", text: "Mausam ko 4:00 PM pe chhod do. 4:01 bhi acceptable nahi." },
  { emoji: "📵", text: "“Bas ek last call” ko officially ban kiya jaaye." },
  { emoji: "🗑️", text: "Weekend pe “quick sync” shabd dictionary se delete ho." },
  { emoji: "🥟", text: "Har overtime ke badle ek plate momos. Non-negotiable." },
  { emoji: "🚀", text: "Zero-Touch Planning ki tarah Zero-Overtime Planning bhi launch karo." },
  { emoji: "🌙", text: "Man in the Moon ko night shift se turant hataya jaaye." },
];

const COMPLAINT_TYPES = [
  "Unauthorised retention of my Mausam",
  "Excessive “bas 5 minute” usage",
  "Dinner ghosting (repeat offender)",
  "Weekend encroachment",
  "Emotional supply chain disruption",
];

const PNG_REPLIES = [
  "Ticket #PNG-404 raised. Your Mausam is currently in a meeting about a meeting. Expected release: TBD. 🌙",
  "Thank you for contacting the P&G Man-in-the-Moon Department. Your complaint scored 98% OEE and 0% priority. 📉",
  "We have escalated this to the night shift. Update: the night shift is also Mausam. 🙃",
  "Your request is stuck in transit at Baddi plant. ETA: right after “one last call”. 🚚",
  "Complaint received. We have replaced your evening with a status update. Please rate your experience. ⭐",
];

/**
 * Scroll-triggered antaakshari. Short snippets only, each credited —
 * the joke is the timing, not the full song.
 */
const SONGS = [
  {
    lyric: "Inteha ho gayi intezaar ki…\naayi na kuch khabar mere yaar ki 🎶",
    song: "Inteha Ho Gayi Intezaar Ki",
    credit: "Sharaabi · 1984 · Kishore & Asha",
    quip: "Gaana 1984 ka hai. Intezaar ka OEE tab se same hai. 📉",
  },
  {
    lyric: "Din dhal jaaye, haaye…\nraat na jaaye 🌙",
    song: "Din Dhal Jaaye",
    credit: "Guide · 1965 · Rafi",
    quip: "Din dhal gaya. Shift nahi dhali.",
  },
  {
    lyric: "Aaj jaane ki zid na karo…\nyunhi pehlu mein baithe raho 🥺",
    song: "Aaj Jaane Ki Zid Na Karo",
    credit: "Farida Khanum · ghazal",
    quip: "Roz subah 8 baje ye bajata hoon. Roz woh nikal jaati hai. 🚗",
  },
  {
    lyric: "Mausam hai aashiqana…\nae dil kahin se unko aise mein dhoondh laana 💘",
    song: "Mausam Hai Aashiqana",
    credit: "Pakeezah · 1972 · Lata",
    quip: "Naam bhi Mausam. Aur forecast bhi wahi: “late”. ⛈️",
  },
  {
    lyric: "O saathi re…\ntere bina bhi kya jeena 💔",
    song: "O Saathi Re",
    credit: "Muqaddar Ka Sikandar · 1978 · Kishore",
    quip: "Tere bina kya jeena — par tere office ke bina bilkul jee lenge. 😤",
  },
  {
    lyric: "Pal pal dil ke paas…\ntum rehti ho ❤️",
    song: "Pal Pal Dil Ke Paas",
    credit: "Blackmail · 1973 · Kishore",
    quip: "Pal pal dil ke paas… aur 9 se 9 Baddi plant ke paas. 🏭",
  },
];

const MISS_FACES = ["😐", "🙂", "😔", "🥲", "😞", "😢", "😭", "🫠", "💔", "🚨"];

const BURST_EMOJIS = ["📣", "🫧", "🧺", "🥺", "💔", "🌙", "🍽️", "🧼", "😤", "❤️"];

const SIGN_KEY = "whypngwhy-signatures";
const BASE_SIGNATURES = 1247;

interface Burst {
  id: string;
  emoji: string;
  x: number;
  y: number;
  dx: number;
  dy: number;
  rot: number;
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function WhyPngWhyPage() {
  const [bursts, setBursts] = useState<Burst[]>([]);
  const [nowPlaying, setNowPlaying] = useState<number | null>(null);
  const timeouts = useRef<number[]>([]);

  useEffect(
    () => () => {
      timeouts.current.forEach((t) => window.clearTimeout(t));
    },
    []
  );

  const burst = useCallback((x: number, y: number) => {
    const batch: Burst[] = Array.from({ length: 14 }, (_, i) => {
      const angle = (Math.PI * 2 * i) / 14 + Math.random() * 0.5;
      const dist = 90 + Math.random() * 130;
      return {
        id: `${Date.now()}-${i}-${Math.random().toString(36).slice(2, 7)}`,
        emoji: BURST_EMOJIS[Math.floor(Math.random() * BURST_EMOJIS.length)],
        x,
        y,
        dx: Math.cos(angle) * dist,
        dy: Math.sin(angle) * dist - 40,
        rot: (Math.random() - 0.5) * 320,
      };
    });

    setBursts((prev) => [...prev, ...batch]);
    const ids = new Set(batch.map((b) => b.id));
    const t = window.setTimeout(() => {
      setBursts((prev) => prev.filter((b) => !ids.has(b.id)));
    }, 1300);
    timeouts.current.push(t);
  }, []);

  const burstFromEvent = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const r = e.currentTarget.getBoundingClientRect();
      burst(r.left + r.width / 2, r.top + r.height / 2);
    },
    [burst]
  );

  return (
    <div className="relative min-h-[100svh] overflow-x-hidden bg-[#0b1026] font-sans text-white selection:bg-pink-400/40">
      {/* ambient wash */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(1100px 620px at 12% -8%, rgba(56,189,248,0.30), transparent 62%), radial-gradient(900px 540px at 92% 4%, rgba(236,72,153,0.26), transparent 60%), radial-gradient(1000px 700px at 50% 108%, rgba(99,102,241,0.30), transparent 62%)",
        }}
      />
      <BubbleField />

      <main className="relative z-10 mx-auto w-full max-w-4xl px-4 pb-24 pt-10 sm:px-6 sm:pt-14">
        <Hero onBurst={burstFromEvent} />
        <Ticker />
        <SongBreak index={0} onPlay={setNowPlaying} />
        <MissingClock />
        <SongBreak index={1} onPlay={setNowPlaying} />
        <NaaraMachine onBurst={burst} />
        <SongBreak index={2} onPlay={setNowPlaying} />
        <ExcuseBingo onBingo={burst} />
        <SongBreak index={3} onPlay={setNowPlaying} />
        <Demands />
        <SongBreak index={4} onPlay={setNowPlaying} />
        <ComplaintDesk onBurst={burstFromEvent} />
        <SongBreak index={5} onPlay={setNowPlaying} />
        <Petition onBurst={burstFromEvent} />
        <Footer />
      </main>

      <NowPlaying index={nowPlaying} />

      {/* emoji burst layer */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-50">
        <AnimatePresence>
          {bursts.map((b) => (
            <motion.span
              key={b.id}
              className="absolute text-2xl"
              style={{ left: b.x, top: b.y }}
              initial={{ x: 0, y: 0, opacity: 1, scale: 0.5, rotate: 0 }}
              animate={{
                x: b.dx,
                y: b.dy,
                opacity: 0,
                scale: 1.35,
                rotate: b.rot,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.15, ease: "easeOut" }}
            >
              {b.emoji}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ───────────────────────────  HERO  ─────────────────────────── */

function MoonBadge() {
  return (
    <motion.div
      animate={{ rotate: [-6, 6, -6] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative mx-auto mb-5 h-28 w-28 sm:h-32 sm:w-32"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-300/30 to-indigo-500/20 blur-xl" />
      <svg
        viewBox="0 0 120 120"
        className="relative h-full w-full drop-shadow-[0_8px_28px_rgba(125,211,252,0.45)]"
        role="img"
        aria-label="Parody man-in-the-moon badge"
      >
        <circle
          cx="60"
          cy="60"
          r="56"
          fill="rgba(255,255,255,0.06)"
          stroke="rgba(186,230,253,0.55)"
          strokeWidth="2.5"
        />
        {/* 13 stars, but one has clearly clocked out */}
        {Array.from({ length: 13 }).map((_, i) => {
          const a = (Math.PI * 2 * i) / 13 - Math.PI / 2;
          return (
            <circle
              key={i}
              cx={60 + Math.cos(a) * 46}
              cy={60 + Math.sin(a) * 46}
              r={i === 6 ? 1.1 : 2.4}
              fill={i === 6 ? "rgba(248,113,113,0.9)" : "rgba(253,224,71,0.95)"}
            />
          );
        })}
        {/* crescent face, mid-yawn */}
        <path
          d="M74 26 A38 38 0 1 0 74 94 A30 30 0 1 1 74 26 Z"
          fill="rgba(254,240,138,0.92)"
        />
        <circle cx="52" cy="50" r="2.6" fill="#0b1026" />
        <path
          d="M44 66 q9 9 18 1"
          stroke="#0b1026"
          strokeWidth="2.6"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute -right-1 -top-1 rounded-full bg-pink-500 px-2 py-0.5 text-[10px] font-black tracking-wider shadow-lg">
        P&amp;G?
      </span>
    </motion.div>
  );
}

function Hero({ onBurst }: { onBurst: (e: React.MouseEvent<HTMLElement>) => void }) {
  // Grouped per word so narrow phones wrap between words, never mid-word.
  const words = ["WHY", "P&G", "WHY?"];
  let letterIndex = 0;

  return (
    <header className="text-center">
      <MoonBadge />

      <p className="mb-3 text-[10px] uppercase tracking-[0.45em] text-sky-200/80 sm:text-xs">
        Ek shaanti-purn protest · one man · one cold dinner
      </p>

      <h1 className="mb-4 flex flex-wrap justify-center gap-x-3 text-[2rem] font-black leading-none tracking-tight sm:text-6xl md:text-7xl">
        {words.map((word) => (
          <span key={word} className="inline-flex whitespace-nowrap">
            {word.split("").map((ch, i) => {
              const delay = letterIndex++ * 0.06;
              return (
                <motion.span
                  key={`${word}-${ch}-${i}`}
                  animate={{ y: [0, -9, 0], rotate: [0, i % 2 ? 4 : -4, 0] }}
                  transition={{
                    duration: 2.2,
                    delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="bg-gradient-to-b from-white via-sky-100 to-pink-200 bg-clip-text text-transparent drop-shadow-[0_6px_18px_rgba(255,255,255,0.28)]"
                >
                  {ch}
                </motion.span>
              );
            })}
          </span>
        ))}
      </h1>

      <motion.p
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="mb-4 text-xl font-extrabold text-pink-200 sm:text-3xl"
      >
        RETURN MY MAUSAM 🥺
      </motion.p>

      <p className="mx-auto mb-7 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
        Respected Procter &amp; Gamble, aapne Fabric Care toh sambhal liya. Ab
        thoda <span className="font-semibold text-sky-200">Ashish Care</span> bhi
        kar lo. Roz raat 9 baje “nikal rahi hoon” sunte-sunte mera patience ka
        OEE gir chuka hai. 📉
      </p>

      <motion.button
        type="button"
        onClick={onBurst}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 px-7 py-3.5 text-sm font-bold shadow-[0_14px_44px_rgba(244,63,94,0.5)] sm:text-base"
      >
        <Megaphone size={18} />
        Protest shuru karo
      </motion.button>
    </header>
  );
}

function Ticker() {
  const strip = [...TICKER, ...TICKER];
  return (
    <div className="my-10 overflow-hidden rounded-full border border-white/15 bg-white/[0.06] py-2.5 backdrop-blur-sm">
      <motion.div
        className="flex w-max gap-8 whitespace-nowrap px-4 text-xs font-bold tracking-widest text-sky-100 sm:text-sm"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {strip.map((t, i) => (
          <span key={i} className="flex items-center gap-8">
            {t}
            <span className="text-pink-300">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─────────────────────────  ANTAAKSHARI  ───────────────────────── */

function Equalizer({ bars = 4, className = "" }: { bars?: number; className?: string }) {
  return (
    <span className={`flex items-end gap-[3px] ${className}`} aria-hidden>
      {Array.from({ length: bars }).map((_, i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full bg-current"
          animate={{ height: [5, 14, 7, 16, 5] }}
          transition={{
            duration: 1.1 + i * 0.18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </span>
  );
}

function SongBreak({
  index,
  onPlay,
}: {
  index: number;
  onPlay: (i: number) => void;
}) {
  const song = SONGS[index];

  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => onPlay(index)}
      viewport={{ once: false, amount: 0.6 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative mb-10 overflow-hidden rounded-3xl border border-amber-200/25 bg-gradient-to-br from-amber-300/[0.12] via-pink-300/[0.08] to-transparent px-5 py-6 text-center sm:px-8 sm:py-8"
    >
      <motion.span
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        className="absolute -right-5 -top-5 text-amber-200/25 sm:-right-3 sm:-top-3"
      >
        <Disc3 size={92} />
      </motion.span>

      <p className="mb-3 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-amber-200/90">
        <Equalizer className="text-amber-200" />
        bajao
      </p>

      <blockquote className="mx-auto max-w-lg whitespace-pre-line font-serif text-lg italic leading-relaxed text-white sm:text-2xl">
        {song.lyric}
      </blockquote>

      <figcaption className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-white/55 sm:text-xs">
        — {song.song} · {song.credit}
      </figcaption>

      <p className="mt-4 inline-block rounded-full border border-white/15 bg-black/25 px-4 py-1.5 text-xs text-pink-100 sm:text-sm">
        {song.quip}
      </p>
    </motion.figure>
  );
}

function NowPlaying({ index }: { index: number | null }) {
  if (index === null) return null;
  const song = SONGS[index];

  return (
    <div className="pointer-events-none fixed bottom-3 left-3 z-40 sm:bottom-5 sm:left-5">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 16, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.94 }}
          transition={{ duration: 0.3 }}
          className="flex max-w-[78vw] items-center gap-2.5 rounded-full border border-white/20 bg-black/55 px-3.5 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.45)] backdrop-blur-md sm:max-w-xs"
        >
          <Music2 size={14} className="shrink-0 text-amber-200" />
          <span className="min-w-0">
            <span className="block text-[9px] font-bold uppercase tracking-widest text-white/50">
              now playing
            </span>
            <span className="block truncate text-[11px] font-semibold text-white/90 sm:text-xs">
              {song.song}
            </span>
          </span>
          <Equalizer className="shrink-0 text-pink-300" bars={3} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────  SECTION SHELL  ───────────────────────── */

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`mb-10 rounded-3xl border border-white/15 bg-white/[0.07] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-7 ${className}`}
    >
      {children}
    </motion.section>
  );
}

function SectionTitle({
  icon,
  children,
  hint,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div className="mb-5">
      <h2 className="flex items-center gap-2.5 text-lg font-extrabold sm:text-2xl">
        <span className="text-pink-300">{icon}</span>
        {children}
      </h2>
      {hint && <p className="mt-1.5 text-xs text-white/60 sm:text-sm">{hint}</p>}
    </div>
  );
}

/* ─────────────────────────  LIVE CLOCK  ───────────────────────── */

function MissingClock() {
  const [secs, setSecs] = useState<number | null>(null);

  useEffect(() => {
    setSecs(0);
    const id = window.setInterval(() => setSecs((s) => (s ?? 0) + 1), 1000);
    return () => window.clearInterval(id);
  }, []);

  const h = Math.floor((secs ?? 0) / 3600);
  const m = Math.floor(((secs ?? 0) % 3600) / 60);
  const s = (secs ?? 0) % 60;

  return (
    <Card>
      <SectionTitle
        icon={<Clock size={20} />}
        hint="Ye timer tabse chal raha hai jabse aapne ye page khola. Uske “5 minute” abhi bhi loading hain."
      >
        “Bas 5 minute mein nikal rahi hoon” ⏱️
      </SectionTitle>

      <div className="mb-5 flex items-center justify-center gap-2 font-mono text-4xl font-black tabular-nums text-sky-200 sm:text-6xl">
        <TimeBox value={pad(h)} label="hrs" />
        <span className="pb-6 text-pink-300">:</span>
        <TimeBox value={pad(m)} label="min" />
        <span className="pb-6 text-pink-300">:</span>
        <TimeBox value={pad(s)} label="sec" />
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat value="47" label="Dinners akele" />
        <Stat value="∞" label="“Last” calls" />
        <Stat value="12%" label="Patience ka OEE" />
        <Stat value="0" label="Actual 5-minutes" />
      </div>
    </Card>
  );
}

function TimeBox({ value, label }: { value: string; label: string }) {
  return (
    <span className="flex flex-col items-center">
      <span className="rounded-2xl border border-white/20 bg-black/25 px-3 py-2 sm:px-4">
        {value}
      </span>
      <span className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-white/50">
        {label}
      </span>
    </span>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/[0.06] px-3 py-3 text-center">
      <div className="text-xl font-black text-pink-200 sm:text-2xl">{value}</div>
      <div className="mt-0.5 text-[10px] uppercase tracking-wider text-white/60">
        {label}
      </div>
    </div>
  );
}

/* ─────────────────────────  NAARA MACHINE  ───────────────────────── */

function NaaraMachine({ onBurst }: { onBurst: (x: number, y: number) => void }) {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);

  const shout = (e: React.MouseEvent<HTMLButtonElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    onBurst(r.left + r.width / 2, r.top + r.height / 2);
    setIndex((i) => (i + 1 + Math.floor(Math.random() * (NAARE.length - 1))) % NAARE.length);
    setCount((c) => c + 1);
  };

  return (
    <Card>
      <SectionTitle
        icon={<Megaphone size={20} />}
        hint="Button dabao, naara badlega. Gala kharab ho toh P&G zimmedaar."
      >
        Naara Generator 📣
      </SectionTitle>

      <div className="mb-5 flex min-h-[104px] items-center justify-center rounded-2xl border border-white/15 bg-black/25 px-4 py-6 text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -14, scale: 0.96 }}
            transition={{ duration: 0.28 }}
            className="text-base font-bold leading-relaxed text-white sm:text-xl"
          >
            {NAARE[index]}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <motion.button
          type="button"
          onClick={shout}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.94 }}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 px-6 py-3 text-sm font-bold shadow-[0_12px_36px_rgba(56,189,248,0.4)]"
        >
          <Sparkles size={16} />
          Naara lagao
        </motion.button>
        <span className="rounded-full border border-white/20 bg-white/[0.07] px-4 py-2 text-xs font-semibold text-white/80">
          {count} naare lag chuke 🔊
        </span>
      </div>
    </Card>
  );
}

/* ─────────────────────────  EXCUSE BINGO  ───────────────────────── */

function ExcuseBingo({ onBingo }: { onBingo: (x: number, y: number) => void }) {
  const [marked, setMarked] = useState<number[]>([]);

  const hasBingo = useMemo(
    () => BINGO_LINES.some((line) => line.every((i) => marked.includes(i))),
    [marked]
  );

  const wasBingo = useRef(false);
  useEffect(() => {
    if (hasBingo && !wasBingo.current) {
      wasBingo.current = true;
      onBingo(window.innerWidth / 2, window.innerHeight / 2);
    }
    if (!hasBingo) wasBingo.current = false;
  }, [hasBingo, onBingo]);

  const toggle = (i: number) =>
    setMarked((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );

  return (
    <Card>
      <SectionTitle
        icon={<AlertTriangle size={20} />}
        hint="Aaj kaunsa excuse mila? Tap karke mark karo. Teen ek line mein = BINGO."
      >
        Excuse Bingo 🎯
      </SectionTitle>

      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {EXCUSES.map((ex, i) => {
          const on = marked.includes(i);
          return (
            <motion.button
              key={ex}
              type="button"
              onClick={() => toggle(i)}
              whileTap={{ scale: 0.93 }}
              aria-pressed={on}
              className={`flex min-h-[86px] items-center justify-center rounded-2xl border p-2.5 text-center text-[11px] font-semibold leading-snug transition-colors sm:min-h-[100px] sm:text-sm ${
                on
                  ? "border-pink-300/70 bg-pink-500/30 text-white shadow-[0_0_24px_rgba(244,114,182,0.35)]"
                  : "border-white/15 bg-white/[0.05] text-white/75 hover:bg-white/[0.1]"
              }`}
            >
              <span>
                {on && <span className="mr-1">✅</span>}
                {ex}
              </span>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {hasBingo && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-5 rounded-2xl border border-yellow-300/40 bg-yellow-400/15 px-4 py-3 text-center text-sm font-bold text-yellow-100"
          >
            <PartyPopper className="mr-1.5 inline" size={16} />
            BINGO! Aaj bhi dinner akela. Trophy ke liye P&amp;G se contact karein. 🏆
          </motion.p>
        )}
      </AnimatePresence>
    </Card>
  );
}

/* ─────────────────────────  DEMANDS  ───────────────────────── */

function Demands() {
  return (
    <Card>
      <SectionTitle
        icon={<Stamp size={20} />}
        hint="Non-negotiable. Warna hum roz aisa hi page banayenge."
      >
        Hamari Maange 📜
      </SectionTitle>

      <ul className="space-y-2.5">
        {DEMANDS.map((d, i) => (
          <motion.li
            key={d.text}
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.35 }}
            className="flex items-start gap-3 rounded-2xl border border-white/12 bg-white/[0.05] px-4 py-3"
          >
            <span className="text-xl leading-none">{d.emoji}</span>
            <span className="text-sm leading-relaxed text-white/85 sm:text-base">
              <span className="mr-1.5 font-black text-pink-300">{i + 1}.</span>
              {d.text}
            </span>
          </motion.li>
        ))}
      </ul>
    </Card>
  );
}

/* ─────────────────────────  COMPLAINT DESK  ───────────────────────── */

function ComplaintDesk({
  onBurst,
}: {
  onBurst: (e: React.MouseEvent<HTMLElement>) => void;
}) {
  const [type, setType] = useState(COMPLAINT_TYPES[0]);
  const [miss, setMiss] = useState(9);
  const [note, setNote] = useState("");
  const [reply, setReply] = useState<string | null>(null);

  const submit = (e: React.MouseEvent<HTMLButtonElement>) => {
    onBurst(e);
    setReply(PNG_REPLIES[Math.floor(Math.random() * PNG_REPLIES.length)]);
  };

  return (
    <Card>
      <SectionTitle
        icon={<Send size={20} />}
        hint="Form 100% real hai. Bas kahin bheja nahi jaata. Bilkul unke replies ki tarah."
      >
        Official Complaint Desk 🧾
      </SectionTitle>

      <div className="space-y-4">
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/60">
            Shikayat ka type
          </span>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full rounded-xl border border-white/20 bg-[#131a38] px-3.5 py-2.5 text-sm text-white outline-none focus:border-pink-300/60"
          >
            {COMPLAINT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-white/60">
            <span>Miss level</span>
            <span className="text-base">
              {MISS_FACES[miss - 1]} {miss}/10
            </span>
          </span>
          <input
            type="range"
            min={1}
            max={10}
            value={miss}
            onChange={(e) => setMiss(Number(e.target.value))}
            className="w-full accent-pink-400"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/60">
            Aur kuch kehna hai? (optional)
          </span>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
            maxLength={300}
            placeholder="Jaise: aaj phir khichdi akele khayi…"
            className="w-full resize-none rounded-xl border border-white/20 bg-[#131a38] px-3.5 py-2.5 text-sm text-white outline-none placeholder:text-white/35 focus:border-pink-300/60"
          />
        </label>

        <motion.button
          type="button"
          onClick={submit}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 px-5 py-3 text-sm font-bold shadow-[0_12px_36px_rgba(244,63,94,0.42)] sm:w-auto"
        >
          <Send size={16} />
          P&amp;G HQ ko bhejo
        </motion.button>

        <AnimatePresence>
          {reply && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="rounded-2xl border border-sky-300/35 bg-sky-400/10 px-4 py-3.5"
            >
              <p className="mb-1 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-sky-200">
                <Moon size={12} /> Auto-reply · P&amp;G (allegedly)
              </p>
              <p className="text-sm leading-relaxed text-white/90">{reply}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Card>
  );
}

/* ─────────────────────────  PETITION  ───────────────────────── */

function Petition({
  onBurst,
}: {
  onBurst: (e: React.MouseEvent<HTMLElement>) => void;
}) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let stored = 0;
    try {
      stored = Number(localStorage.getItem(SIGN_KEY) ?? 0) || 0;
    } catch {
      stored = 0;
    }
    setCount(BASE_SIGNATURES + stored);
  }, []);

  const sign = (e: React.MouseEvent<HTMLButtonElement>) => {
    onBurst(e);
    setCount((c) => {
      const next = (c ?? BASE_SIGNATURES) + 1;
      try {
        localStorage.setItem(SIGN_KEY, String(next - BASE_SIGNATURES));
      } catch {
        // Counter still works for this visit.
      }
      return next;
    });
  };

  return (
    <Card className="text-center">
      <SectionTitle
        icon={<Heart size={20} />}
        hint="Ek baar se man na bhare toh dobara dabao. Yahan re-voting legal hai."
      >
        Petition: Return My Mausam ✍️
      </SectionTitle>

      <motion.div
        key={count ?? "loading"}
        initial={{ scale: 0.86 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 14 }}
        className="mb-4 text-4xl font-black text-pink-200 tabular-nums sm:text-6xl"
      >
        {count === null ? "—" : count.toLocaleString("en-IN")}
      </motion.div>
      <p className="mb-5 text-xs text-white/60 sm:text-sm">
        supporters (jinme se 1,247 maine khud gine hain 🙃)
      </p>

      <motion.button
        type="button"
        onClick={sign}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.94 }}
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-300 to-pink-400 px-7 py-3.5 text-sm font-black text-[#3b0764] shadow-[0_14px_44px_rgba(251,191,36,0.4)] sm:text-base"
      >
        <Heart size={18} fill="currentColor" />
        Main bhi sign karta hoon
      </motion.button>
    </Card>
  );
}

/* ─────────────────────────  FOOTER  ───────────────────────── */

function Footer() {
  return (
    <footer className="mt-12 text-center">
      <p className="mx-auto mb-4 max-w-md text-sm leading-relaxed text-white/75">
        P&amp;G, mazaak ek taraf — she genuinely loves what she builds there. Bas
        thoda jaldi bhej diya karo. 🙏
      </p>
      <p className="mb-6 text-lg font-bold text-pink-200">
        Ghar pe khaana thanda ho raha hai. 🍲❤️
      </p>

      <div className="mb-6 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
        <a
          href="/mausam"
          className="rounded-full border border-white/20 bg-white/[0.07] px-4 py-2 font-semibold text-white/85 transition-colors hover:bg-white/15"
        >
          Uska actual portfolio 👩‍💼
        </a>
        <a
          href="/game"
          className="rounded-full border border-white/20 bg-white/[0.07] px-4 py-2 font-semibold text-white/85 transition-colors hover:bg-white/15"
        >
          Ek chhota surprise 💕
        </a>
        <a
          href="/"
          className="rounded-full border border-white/20 bg-white/[0.07] px-4 py-2 font-semibold text-white/85 transition-colors hover:bg-white/15"
        >
          Ashish ka portfolio 💻
        </a>
      </div>

      <p className="mx-auto max-w-lg text-[10px] leading-relaxed text-white/45 sm:text-[11px]">
        100% satire, 0% affiliation. Procter &amp; Gamble, Tide, Ariel, Pampers,
        Gillette, Vicks, Whisper, Oral-B aur Old Spice apne respective maalikon
        ke trademarks hain. Ye page ek boyfriend ki bhookh aur pyaar ka nateeja
        hai — koi official complaint nahi. Made with 🫧 by Ashish.
      </p>
    </footer>
  );
}
