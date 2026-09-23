import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  CheckCircle2,
  BookOpen,
  Clock,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router";
import { modules as rawMilestones, type ModuleMeta } from "../data/modules";
import { bnDigits } from "../utils/bn";
import {
  MilestoneCatIcon,
  KITTY_ACCENTS,
  KITTY_CHAPTER_TITLES,
} from "./KittyIcons";

const milestones = rawMilestones.slice(0, 8);

const levelFor = (id: number) =>
  id <= 3 ? "বিগিনার" : id <= 6 ? "ইন্টারমিডিয়েট" : "অ্যাডভান্সড";

const ESTIMATED_TIMES: Record<number, string> = {
  1: "১ ঘণ্টা ২০ মিনিট",
  2: "১ ঘণ্টা ৪০ মিনিট",
  3: "১ ঘণ্টা ৩০ মিনিট",
  4: "১ ঘণ্টা ১০ মিনিট",
  5: "১ ঘণ্টা ২০ মিনিট",
  6: "২ ঘণ্টা",
  7: "২ ঘণ্টা ১৫ মিনিট",
  8: "২ ঘণ্টা ৩০ মিনিট",
};

interface DeckCardProps {
  milestone: ModuleMeta;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function DeckCard({ milestone: m, index: i, total, progress }: DeckCardProps) {
  const isLast = i === total - 1;
  const accent = KITTY_ACCENTS[m.id] || m.accent;
  const estTime = ESTIMATED_TIMES[m.id] || "১ ঘণ্টা";
  const kittyTitle = KITTY_CHAPTER_TITLES[m.id] || levelFor(m.id);

  /**
   * Layout animation timeline:
   * Each card gently compresses down in scale as the next card arrives over it.
   * Card 8 (isLast) stays firmly at scale: 1.0 pinned at the top.
   */
  const stepStart = i / total;
  const stepEnd = Math.min(1, (i + 1) / total);

  // Progressive target scale: earlier cards slightly scale down to create stacked depth
  const targetScale = isLast ? 1 : 1 - (total - 1 - i) * 0.014;

  const scale = useTransform(
    progress,
    [Math.max(0, stepStart - 0.04), Math.min(1, stepEnd)],
    [1, targetScale]
  );

  const dim = useTransform(
    progress,
    [Math.max(0, stepStart), Math.min(1, stepEnd)],
    [0, 0.36]
  );

  return (
    <div
      className="sticky"
      style={{
        /* Stepped top offset for the cards in the stack */
        top: `calc(72px + ${i * 16}px)`,
        zIndex: i + 1,
        /* Non-last cards have margin to provide scroll runway.
           Last card has 0 marginBottom so CSS sticky stays pinned inside the parent runway */
        marginBottom: isLast ? 0 : "clamp(170px, 30vh, 240px)",
      }}
    >
      <Link
        to={`/${m.slug}`}
        aria-label={`${m.title} — ${m.cardDesc}`}
        className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 rounded-2xl"
      >
        <motion.article
          style={{
            scale: isLast ? 1 : scale,
            ["--ac" as string]: accent,
          }}
          className={`relative overflow-hidden rounded-2xl border border-pink-500/[0.18] bg-[#140b1c] shadow-[0_16px_40px_-15px_rgba(0,0,0,0.8)] transition-all duration-300 group-hover:border-pink-400/40 group-hover:shadow-[0_20px_50px_-12px_rgba(255,117,143,0.3)] ${
            i % 2 === 0 ? "md:mr-3" : "md:ml-3"
          }`}
        >
          {/* Kitty colored book spine on the left edge */}
          <div
            aria-hidden
            className="absolute left-0 top-0 bottom-0 w-[4px]"
            style={{
              background: `linear-gradient(180deg, ${accent}, #ff758f)`,
              boxShadow: `0 0 14px ${accent}aa`,
            }}
          />

          {/* Kitty ambient subtle glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 right-0 w-72 h-36 opacity-20 blur-2xl"
            style={{ background: accent }}
          />

          {/* Background ghost number watermark with paw */}
          <div
            aria-hidden
            className="pointer-events-none absolute right-4 top-2 select-none flex items-center gap-1 opacity-[0.06] sm:opacity-[0.08]"
          >
            <span
              className="font-mono text-5xl font-black tracking-tighter"
              style={{ color: accent }}
            >
              0{m.id}
            </span>
            <span className="text-3xl">🐾</span>
          </div>

          <div className="p-5 sm:p-6 pl-6 sm:pl-7">
            {/* Header: Number Badge + Cat-themed Icon + Chapter Title + Kitty Persona */}
            <div className="flex items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                {/* Kitty Number Badge */}
                <span
                  className="flex size-7 items-center justify-center rounded-lg border font-mono text-xs font-bold shadow-sm"
                  style={{
                    borderColor: `${accent}66`,
                    background: `linear-gradient(135deg, ${accent}30, ${accent}0d)`,
                    color: accent,
                  }}
                >
                  0{m.id}
                </span>

                {/* Cute Cat-Themed SVG Icon in Header */}
                <div
                  className="flex size-7 items-center justify-center rounded-lg border shadow-sm transition-transform duration-300 group-hover:scale-110"
                  style={{
                    borderColor: `${accent}44`,
                    background: `${accent}16`,
                  }}
                  title={kittyTitle}
                >
                  <MilestoneCatIcon moduleId={m.id} size={18} color={accent} />
                </div>

                <div className="flex items-center gap-1 font-bengali font-bold tracking-wide text-[13px] sm:text-sm">
                  <span style={{ color: accent }}>ধাপ {bnDigits(m.id)}</span>
                  <span className="text-xs">🐾</span>
                </div>
                <span className="text-white/20">•</span>
                <span className="font-bengali text-pink-200/60 hidden sm:inline text-[11.5px]">
                  {kittyTitle}
                </span>
              </div>

              {m.id === 1 && (
                <span className="inline-flex items-center gap-1 rounded-full border border-pink-400/30 bg-pink-500/10 px-2.5 py-0.5 font-bengali text-[10.5px] font-medium text-pink-200 shadow-sm">
                  <CheckCircle2 className="size-3 text-[#ff758f]" />
                  শুরু করার জন্য প্রস্তুত
                </span>
              )}
            </div>

            {/* Main Info: Bespoke Cat Mascot SVG + Title + Study Description */}
            <div className="mt-3.5 flex items-start gap-3.5">
              <div
                className="flex size-12 flex-none items-center justify-center rounded-2xl border shadow-md transition-transform duration-300 group-hover:scale-105"
                style={{
                  borderColor: `${accent}35`,
                  background: `linear-gradient(135deg, ${accent}25, ${accent}08)`,
                  boxShadow: `0 8px 24px -6px ${accent}40`,
                }}
              >
                <MilestoneCatIcon
                  moduleId={m.id}
                  size={32}
                  color={accent}
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-lg font-bold text-white sm:text-xl tracking-tight group-hover:text-pink-100 transition-colors">
                    {m.title}
                  </h3>
                  <span className="text-xs sm:hidden">🐾</span>
                </div>
                <p className="mt-1 font-bengali text-sm text-pink-100/70 leading-relaxed line-clamp-2">
                  {m.cardDesc}
                </p>
              </div>
            </div>

            {/* Clean Footer Row: Metadata & Study Link */}
            <div className="mt-4 flex items-center justify-between border-t border-pink-500/[0.1] pt-3 text-xs">
              <div className="flex items-center gap-3 font-bengali text-pink-200/60">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="size-3.5 text-pink-400/70" />
                  {bnDigits(m.lessons.length)} লেসন
                </span>
                <span className="text-white/20">•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="size-3.5 text-pink-400/70" />
                  {estTime}
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 font-bengali font-semibold text-white group-hover:text-[#ff758f] transition-colors">
                <span>অধ্যায় দেখুন</span>
                <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </div>

          {/* Dim overlay while covered by later cards in the stack */}
          {!isLast && (
            <motion.span
              aria-hidden
              style={{ opacity: dim }}
              className="pointer-events-none absolute inset-0 bg-[#0a050f]"
            />
          )}
        </motion.article>
      </Link>
    </div>
  );
}

export default function Roadmap() {
  const deckRef = useRef<HTMLDivElement>(null);

  /**
   * Target scroll progress of the complete deck container.
   * Maps continuously from start to end of the deck runway.
   */
  const { scrollYProgress } = useScroll({
    target: deckRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="roadmap"
      aria-labelledby="roadmap-heading"
      className="relative px-4 py-20 sm:px-6 md:py-28 lg:px-8"
    >
      {/* Background Kitty ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden -z-10"
      >
        <div className="absolute left-1/2 top-[8%] h-[520px] w-[680px] -translate-x-1/2 rounded-full bg-[#ff758f]/[0.08] blur-[160px]" />
        <div className="absolute right-[10%] top-[40%] h-[380px] w-[380px] rounded-full bg-[#c77dff]/[0.06] blur-[140px]" />
      </div>

      {/* Section Header */}
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-pink-400/25 bg-pink-500/10 px-4 py-1.5 font-bengali text-xs tracking-wide text-pink-200 backdrop-blur shadow-[0_0_20px_rgba(255,117,143,0.15)]"
        >
          <span>🐾</span>
          <span>Kotlin Kitty লার্নিং পাথ</span>
          <span>✨</span>
        </motion.div>

        <motion.h2
          id="roadmap-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl tracking-tight"
        >
          সম্পূর্ণ <span className="text-gradient-kotlin">Kitty রোডম্যাপ</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-3 font-bengali text-sm leading-relaxed text-pink-100/70 md:text-base"
        >
          সহজ শুরু থেকে অ্যাডভান্সড আর্কিটেকচার পর্যন্ত ৮টি পরিকল্পিত মাইলস্টোন
        </motion.p>
      </div>

      {/* The Deck — Clean Sticky Stacked Cards with Ample Runway for Last Card Pinning */}
      <div
        ref={deckRef}
        className="relative mx-auto mt-12 max-w-2xl md:mt-16"
        style={{
          /* Runway padding inside the parent guarantees Card 8 stays 100% sticky and pinned */
          paddingBottom: "clamp(260px, 45vh, 420px)",
        }}
      >
        {milestones.map((m, i) => (
          <DeckCard
            key={m.id}
            milestone={m}
            index={i}
            total={milestones.length}
            progress={scrollYProgress}
          />
        ))}
      </div>

      {/* Goal Marker — Kitty Milestone Achieved Flag */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        className="relative mt-4 flex flex-col items-center gap-3 text-center pb-12"
      >
        <div className="relative">
          <div
            aria-hidden
            className="animate-pulse-soft absolute -inset-4 rounded-full blur-xl"
            style={{
              background:
                "radial-gradient(circle, rgba(255,117,143,0.45) 0%, rgba(199,125,255,0.3) 60%, transparent 80%)",
            }}
          />
          <span className="relative flex size-14 items-center justify-center rounded-2xl rotate-45 border border-pink-300/30 bg-gradient-to-br from-[#ff5d8f] via-[#ff758f] to-[#c77dff] shadow-[0_0_40px_-5px_rgba(255,117,143,0.8)]">
            <span className="text-xl -rotate-45" role="img" aria-label="Cat with ribbon">
              🐱🎀
            </span>
          </span>
        </div>
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-400/35 bg-pink-950/60 px-4 py-1.5 font-bengali text-xs font-bold text-pink-100 shadow-[0_0_20px_rgba(255,117,143,0.3)] backdrop-blur">
            <span className="size-2 rounded-full bg-[#ff758f] animate-pulse" />
            লক্ষ্য: পূর্ণাঙ্গ Kotlin ডেভেলপার
          </div>
          <p className="max-w-sm font-bengali text-xs leading-relaxed text-pink-200/60">
            ৮টি ধাপ সফলভাবে শেষ করে আপনি প্রোজেক্ট তৈরির জন্য সম্পূর্ণ প্রস্তুত হবেন!
          </p>
        </div>
      </motion.div>
    </section>
  );
}
