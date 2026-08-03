"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, Loader2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { SUGGESTED_PROMPTS } from "@/data/knowledgeBase";
import { askAshish, type ChatMessage } from "@/lib/chat/gemini";
import { MessageContent } from "@/components/chat/MessageContent";

const WELCOME: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi — I'm Ask Ashish, a portfolio assistant. I can share Ashish's background, experience, and skills based on what's on this site. If something isn't covered here, I'll point you to his contact details.",
};

function newId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function AskAshish() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 180);
    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, open, busy]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || busy) return;

    const userMsg: ChatMessage = {
      id: newId(),
      role: "user",
      content: trimmed,
    };

    const historyForApi = messages.filter((m) => m.id !== "welcome");

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setError(null);
    setBusy(true);

    try {
      const reply = await askAshish(historyForApi, trimmed);
      setMessages((prev) => [
        ...prev,
        { id: newId(), role: "assistant", content: reply },
      ]);
    } catch {
      setError(
        "Something went wrong. Please try again, or email Ashish directly."
      );
    } finally {
      setBusy(false);
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    void send(input);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void send(input);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex h-[min(560px,calc(100dvh-6.5rem))] w-[min(100vw-1.5rem,380px)] flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/50"
          >
            <header className="flex items-start justify-between gap-3 border-b border-border bg-card/80 px-4 py-3.5 backdrop-blur-sm">
              <div className="flex min-w-0 items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent/25 bg-accent/10">
                  <Sparkles className="h-4 w-4 text-accent" aria-hidden />
                </div>
                <div className="min-w-0">
                  <h2
                    id={titleId}
                    className="text-sm font-semibold tracking-tight text-zinc-100"
                  >
                    Ask Ashish
                  </h2>
                  <p className="text-xs leading-relaxed text-muted">
                    Portfolio assistant · answers from this site only
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-1.5 text-muted transition-colors hover:bg-zinc-800 hover:text-zinc-200"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </header>

            <div
              ref={listRef}
              className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
            >
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={cn(
                    "flex",
                    m.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[92%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed",
                      m.role === "user"
                        ? "rounded-br-md bg-accent text-background"
                        : "rounded-bl-md border border-border bg-card text-zinc-300"
                    )}
                  >
                    <MessageContent text={m.content} />
                  </div>
                </div>
              ))}

              {busy && (
                <div className="flex justify-start">
                  <div className="inline-flex items-center gap-2 rounded-2xl rounded-bl-md border border-border bg-card px-3.5 py-2.5 text-xs text-muted">
                    <Loader2 className="h-3.5 w-3.5 animate-spin text-accent" />
                    Thinking…
                  </div>
                </div>
              )}

              {error && (
                <p className="px-1 text-xs text-red-400/90">{error}</p>
              )}

              {messages.length <= 1 && !busy && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {SUGGESTED_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => void send(prompt)}
                      className="rounded-full border border-border bg-card/60 px-3 py-1.5 text-left text-[11px] text-zinc-400 transition-colors hover:border-accent/35 hover:text-accent-light"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form
              onSubmit={onSubmit}
              className="border-t border-border bg-card/50 p-3"
            >
              <div className="flex items-end gap-2 rounded-xl border border-border bg-background px-2.5 py-2 focus-within:border-accent/40">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  rows={1}
                  maxLength={500}
                  placeholder="Ask about experience, skills…"
                  disabled={busy}
                  className="max-h-24 min-h-[36px] flex-1 resize-none bg-transparent px-1 py-1.5 text-[13px] text-zinc-200 outline-none placeholder:text-zinc-600"
                  aria-label="Message"
                />
                <button
                  type="submit"
                  disabled={busy || !input.trim()}
                  className="mb-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent text-background transition-opacity hover:bg-accent-light disabled:opacity-40"
                  aria-label="Send message"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
              <p className="mt-2 px-0.5 text-[10px] leading-snug text-zinc-600">
                Grounded in portfolio content. Unverified topics redirect to
                contact.
              </p>
            </form>
          </motion.section>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className={cn(
          "flex h-12 items-center gap-2.5 rounded-full border border-accent/30 bg-accent px-4 text-sm font-medium text-background shadow-lg shadow-accent/20 transition-colors hover:bg-accent-light",
          open &&
            "border-border bg-card text-zinc-200 shadow-black/40 hover:bg-zinc-800"
        )}
        aria-expanded={open}
        aria-label={open ? "Close Ask Ashish" : "Open Ask Ashish"}
      >
        {open ? (
          <X className="h-4 w-4" />
        ) : (
          <MessageCircle className="h-4 w-4" />
        )}
        <span className="pr-0.5">{open ? "Close" : "Ask Ashish"}</span>
      </motion.button>
    </div>
  );
}
