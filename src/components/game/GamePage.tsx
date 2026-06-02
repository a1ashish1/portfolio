"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Sparkles, CloudRain, Sun, CloudLightning } from "lucide-react";
import { LoveBackground } from "./LoveBackground";
import { RunawayNoButton } from "./RunawayNoButton";

type Step = "intro" | "love" | "marry" | "finale";

const NICKNAME = "My fav weather";
const REAL_NAME = "Mausam";

const NO_LABELS_LOVE = [
  "No",
  "Sure?",
  "Reconsider 🥺",
  "Soch lo phir se",
  "Don't break my heart 💔",
  "Last chance...",
  "Itni bhi kya jaldi?",
  "Please na 🥹",
  "Pakka soch lo",
  "Catch me first 💨",
];

const NO_LABELS_MARRY = [
  "No",
  "Wait, what?!",
  "Reconsider? 🥺",
  "Main chai banaunga roz ☕",
  "I'll watch all your dramas 📺",
  "I'll always pick the song you want 🎶",
  "Forever sounds nice na?",
  "Don't do this 💔",
  "Itna mat satao",
  "Catch me first 💨",
];

export function GamePage() {
  const [step, setStep] = useState<Step>("intro");
  const [yesCount, setYesCount] = useState(0);
  const [dodgeCount, setDodgeCount] = useState(0);

  const advance = () => {
    setYesCount((c) => c + 1);
    if (step === "intro") setStep("love");
    else if (step === "love") setStep("marry");
    else if (step === "marry") setStep("finale");
  };

  return (
    <div className="relative min-h-[100svh] w-full overflow-hidden text-white font-sans">
      <LoveBackground intensity={step === "finale" ? "wild" : "calm"} />

      <main className="relative z-10 mx-auto flex min-h-[100svh] max-w-4xl flex-col items-center justify-center px-4 py-10 sm:px-6 sm:py-14">
        <AnimatePresence mode="wait">
          {step === "intro" && <IntroStep key="intro" onContinue={advance} />}
          {step === "love" && (
            <QuestionStep
              key="love"
              question={`Bebu… do you love me? 💗`}
              subtitle={` I know the answer but stilll.... ☁️`}
              yesLabel="Yes, pagalu! 💖"
              noLabels={NO_LABELS_LOVE}
              onYes={advance}
              onDodge={() => setDodgeCount((d) => d + 1)}
            />
          )}
          {step === "marry" && (
            <QuestionStep
              key="marry"
              question={`Will you marry me, ${NICKNAME}?`}
              subtitle={`Aapke bina har din thoda phika sa lagta hai. 💍`}
              yesLabel="Haan! 1000 times yes 💍"
              noLabels={NO_LABELS_MARRY}
              onYes={advance}
              onDodge={() => setDodgeCount((d) => d + 1)}
            />
          )}
          {step === "finale" && (
            <FinaleStep
              key="finale"
              yesCount={yesCount + 1}
              dodgeCount={dodgeCount}
              onReplay={() => {
                setStep("intro");
                setYesCount(0);
                setDodgeCount(0);
              }}
            />
          )}
        </AnimatePresence>

        {step !== "finale" && (
          <p className="mt-10 px-4 text-center text-[11px] sm:text-xs text-white/65 tracking-[0.2em] uppercase">
            made with too many{" "}
            <Heart className="inline -mt-0.5 text-pink-200" size={11} fill="currentColor" /> for {REAL_NAME}
          </p>
        )}
      </main>
    </div>
  );
}

/* ─────────────────────────  STEPS  ───────────────────────── */

function IntroStep({ onContinue }: { onContinue: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center w-full max-w-xl"
    >
      <motion.div
        initial={{ scale: 0.5, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.1 }}
        className="mx-auto mb-6 flex items-center justify-center gap-3"
      >
        <Sun className="text-yellow-200 drop-shadow-[0_0_12px_rgba(255,230,150,0.7)]" size={28} />
        <CloudRain className="text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.6)]" size={40} />
        <CloudLightning className="text-pink-100 drop-shadow-[0_0_12px_rgba(255,200,220,0.7)]" size={28} />
      </motion.div>

      <p className="text-pink-100/90 text-xs sm:text-sm tracking-[0.4em] uppercase mb-3">
        a tiny surprise · just for you
      </p>

      <h1 className="font-serif text-[2.25rem] leading-[1.05] sm:text-5xl md:text-6xl mb-5">
        Hi <span className="italic text-pink-100 drop-shadow-[0_2px_12px_rgba(255,200,220,0.7)]">Betu</span>
        <span className="text-pink-200">,</span>
        <br className="sm:hidden" />
        <span className="text-white/95"> my lifeline.. my heartbeat.. my everything</span>{" "}
        <Heart className="inline -mt-2 text-pink-100" size={28} fill="currentColor" />
      </h1>

      <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-2">
        wannaaa ask you something betu.. for the 1000th time hi hi :) But zaroori hai.
      </p>
      <p className="text-white/75 text-sm sm:text-base mb-10 italic">
        (Galat button bhaag jaayega. Pakka.)
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        onClick={onContinue}
        className="group relative inline-flex items-center gap-2 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full font-semibold text-pink-700 bg-white shadow-[0_10px_40px_rgba(255,80,140,0.55)] hover:shadow-[0_14px_50px_rgba(255,80,140,0.75)] transition-shadow"
      >
        <Sparkles size={18} className="text-pink-500" />
        <span>Theek hai, poochho</span>
        <motion.span
          aria-hidden
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        >
          →
        </motion.span>
      </motion.button>
    </motion.div>
  );
}

interface QuestionStepProps {
  question: string;
  subtitle: string;
  yesLabel: string;
  noLabels: string[];
  onYes: () => void;
  onDodge: () => void;
}

function QuestionStep({
  question,
  subtitle,
  yesLabel,
  noLabels,
  onYes,
  onDodge,
}: QuestionStepProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [yesPulse, setYesPulse] = useState(false);
  const [yesScale, setYesScale] = useState(1);

  const handleDodgeLocal = () => {
    onDodge();
    setYesPulse(true);
    setYesScale((s) => Math.min(1.55, s + 0.07));
    setTimeout(() => setYesPulse(false), 260);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -24, scale: 0.98 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-center w-full max-w-2xl"
    >
      <motion.h1
        key={question}
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 16 }}
        className="font-serif text-[1.9rem] leading-tight sm:text-5xl md:text-6xl mb-3 drop-shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
      >
        {question}
      </motion.h1>
      <p className="text-white/90 text-sm sm:text-lg mb-8 sm:mb-10 px-2">
        {subtitle}
      </p>

      <div
        ref={containerRef}
        className="relative mx-auto h-[320px] sm:h-[340px] md:h-[360px] w-full max-w-xl rounded-3xl border border-white/25 bg-white/[0.07] backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden"
      >
        {/* inner heart shimmer */}
        <motion.div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
              `<svg xmlns='http://www.w3.org/2000/svg' width='44' height='44' viewBox='0 0 44 44'><g fill='rgba(255,255,255,0.18)'><path d='M22 34 L9 22 a7 7 0 0 1 9.9 -9.9 L22 15 l3.1 -2.9 A7 7 0 0 1 35 22 Z'/></g></svg>`
            )}")`,
            backgroundSize: "44px 44px",
          }}
          animate={{ backgroundPositionX: ["0px", "44px"] }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        />

        {/* Yes button (grows with each dodge) */}
        <motion.button
          type="button"
          onClick={onYes}
          animate={{
            scale: yesPulse ? yesScale * 1.08 : yesScale,
            boxShadow: yesPulse
              ? "0 24px 70px rgba(255, 80, 140, 0.8)"
              : "0 14px 44px rgba(255, 80, 140, 0.55)",
          }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          whileHover={{ scale: yesScale * 1.05 }}
          whileTap={{ scale: yesScale * 0.96 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-white text-base sm:text-lg bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 ring-2 ring-white/45 select-none whitespace-nowrap"
        >
          <span className="inline-flex items-center gap-2">
            <Heart size={18} fill="currentColor" />
            {yesLabel}
          </span>
        </motion.button>

        <RunawayNoButton
          labels={noLabels}
          containerRef={containerRef}
          onDodge={handleDodgeLocal}
        />

        <p className="absolute bottom-3 left-0 right-0 text-center text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/55 pointer-events-none">
          sahi waala daba do ✨
        </p>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────  FINALE  ───────────────────────── */

function FinaleStep({
  yesCount,
  dodgeCount,
  onReplay,
}: {
  yesCount: number;
  dodgeCount: number;
  onReplay: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center w-full max-w-2xl relative"
    >
      <ConfettiHearts />

      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.15 }}
        className="mx-auto mb-6 inline-flex items-center justify-center"
      >
        <div className="relative">
          <Heart
            size={92}
            className="text-white drop-shadow-[0_8px_30px_rgba(255,255,255,0.6)]"
            fill="currentColor"
          />
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,255,255,0.35), transparent)",
            }}
          />
        </div>
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="font-serif text-[2.2rem] sm:text-6xl md:text-7xl leading-tight mb-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
      >
        She said <span className="italic text-pink-100">YES! </span>💍
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-white/95 text-base sm:text-xl leading-relaxed mb-2 px-2"
      >
        I knew it Betuuu, my fav Mausam. ☁️🌧️🌈
      </motion.p>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.65, duration: 0.6 }}
        className="text-white/85 text-sm sm:text-lg mb-2 px-2 italic"
      >
        you are the best thing happened to me!! Love you!! <span className="text-pink-100 not-italic"></span>.
      </motion.p>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-white/80 text-sm sm:text-base mb-8 px-2"
      >
        Har season, har din — bas aap aur main. 💕
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.95, duration: 0.6 }}
        className="grid grid-cols-2 gap-3 max-w-sm mx-auto mb-8 text-sm"
      >
        <div className="rounded-2xl bg-white/12 border border-white/25 backdrop-blur-md px-4 py-3">
          <div className="text-2xl font-bold">{yesCount}</div>
          <div className="text-white/75 text-[11px] uppercase tracking-wider">Yeses</div>
        </div>
        <div className="rounded-2xl bg-white/12 border border-white/25 backdrop-blur-md px-4 py-3">
          <div className="text-2xl font-bold">{dodgeCount}</div>
          <div className="text-white/75 text-[11px] uppercase tracking-wider">No dodges</div>
        </div>
      </motion.div>

      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        onClick={onReplay}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white bg-white/12 border border-white/30 backdrop-blur-md hover:bg-white/20 transition-colors"
      >
        <Sparkles size={16} />
        Phir se khelo
      </motion.button>

      <p className="mt-10 text-[11px] sm:text-xs text-white/80 tracking-[0.2em] uppercase">
        — with all my love, hamesha · forever
      </p>
    </motion.div>
  );
}

function ConfettiHearts() {
  const pieces = Array.from({ length: 36 });
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {pieces.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 0.7;
        const duration = 1.8 + Math.random() * 1.6;
        const size = 12 + Math.random() * 20;
        const hue = 330 + Math.random() * 30;
        const drift = (Math.random() - 0.5) * 240;
        return (
          <motion.div
            key={i}
            initial={{ y: "-20vh", x: 0, opacity: 0, rotate: 0 }}
            animate={{ y: "100vh", x: drift, opacity: [0, 1, 1, 0], rotate: 360 }}
            transition={{ duration, delay, ease: "easeIn" }}
            style={{
              position: "absolute",
              left: `${left}%`,
              color: `hsl(${hue}, 92%, 72%)`,
              filter:
                "drop-shadow(0 0 10px rgba(255,150,180,0.7)) drop-shadow(0 0 3px rgba(255,255,255,0.4))",
            }}
          >
            <Heart fill="currentColor" strokeWidth={0} size={size} />
          </motion.div>
        );
      })}
    </div>
  );
}
