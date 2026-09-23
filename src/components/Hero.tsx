import { motion, type Variants } from "framer-motion";
import { ArrowRight, Map } from "lucide-react";
import { Link } from "react-router";

const MotionLink = motion.create(Link);

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.25 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-24 pt-36 sm:px-6 md:pt-40"
      aria-labelledby="hero-heading"
    >
      {/* Kitty theme local ambient blooms */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[-160px] h-[520px] w-[min(940px,120vw)] -translate-x-1/2 rounded-full bg-[#ff758f]/[0.14] blur-[140px]" />
        <div className="absolute bottom-[-140px] right-[-120px] h-[400px] w-[400px] rounded-full bg-[#c77dff]/[0.12] blur-[130px]" />
        <div className="absolute top-[35%] left-[-100px] h-[320px] w-[320px] rounded-full bg-[#ffa6c1]/[0.08] blur-[120px]" />
      </div>

      {/* floating Kitty code chips — decorative */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-[5%] top-[30%] hidden lg:block xl:left-[8%]"
      >
        <div
          className="animate-float-y rounded-2xl border border-pink-400/20 bg-[#190d24]/80 px-4 py-3 font-mono text-[11px] text-pink-200/70 shadow-[0_16px_48px_-16px_rgba(255,117,143,0.3)] backdrop-blur-md"
          style={{ ["--flt-r" as string]: "-5deg" }}
        >
          <div className="flex items-center gap-1.5 pb-1.5 mb-1.5 border-b border-pink-500/10 text-[9px] text-pink-300/50">
            <span>🐾</span> kitty_main.kt
          </div>
          <div>
            <span className="text-[#ff758f]">fun</span>{" "}
            <span className="text-white">purr</span>
            <span className="text-pink-300/60">() {"{"}</span>
          </div>
          <div className="pl-4 text-pink-300/80">
            <span className="text-[#c77dff]">println</span>(
            <span className="text-[#ffd6e0]">&quot;Hello, Kitty Dev! 💖&quot;</span>)
          </div>
          <span className="text-pink-300/60">{"}"}</span>
        </div>
      </motion.div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.25, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-[5%] top-[25%] hidden lg:block xl:right-[8%]"
      >
        <div
          className="animate-float-y rounded-2xl border border-pink-400/20 bg-[#190d24]/80 px-4 py-3 font-mono text-[11px] text-pink-200/70 shadow-[0_16px_48px_-16px_rgba(199,125,255,0.3)] backdrop-blur-md"
          style={{
            ["--flt-r" as string]: "4deg",
            animationDelay: "-3.2s",
          }}
        >
          <div className="flex items-center gap-1.5 pb-1.5 mb-1.5 border-b border-pink-500/10 text-[9px] text-pink-300/50">
            <span>🐾</span> status.kt
          </div>
          <span className="text-[#ff758f]">val</span>{" "}
          <span className="text-white">mood</span>{" "}
          <span className="text-pink-300/60">=</span>{" "}
          <span className="text-[#ffd6e0]">&quot;Meow! ✨&quot;</span>
        </div>
      </motion.div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-[24%] right-[11%] hidden xl:block"
      >
        <div
          className="animate-float-y rounded-xl border border-pink-400/20 bg-[#190d24]/80 px-3.5 py-2 font-bengali text-[11.5px] text-pink-200/70 shadow-[0_16px_48px_-16px_rgba(255,117,143,0.25)] backdrop-blur-md"
          style={{
            ["--flt-r" as string]: "-3deg",
            animationDelay: "-5s",
          }}
        >
          <span className="font-semibold text-[#ff758f]">Kotlin Kitty 🌸</span>
        </div>
      </motion.div>

      {/* content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        {/* badge */}
        <motion.div variants={fadeUp} className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-400/25 bg-pink-500/10 px-4 py-1.5 backdrop-blur shadow-[0_0_20px_rgba(255,117,143,0.2)]">
            <span className="text-sm">🐾</span>
            <span className="font-bengali text-[12px] font-semibold tracking-[0.04em] text-pink-200">
              Kotlin Kitty ইন্টারঅ্যাক্টিভ লার্নিং
            </span>
            <span className="text-xs">✨</span>
          </span>
        </motion.div>

        {/* heading */}
        <motion.h1
          id="hero-heading"
          variants={fadeUp}
          className="mt-8 font-display text-[clamp(2.5rem,7vw,5.4rem)] font-bold leading-[1.18]"
        >
          <span className="block text-white">Kotlin শিখুন</span>
          <span className="text-gradient-kotlin block pb-1">Kitty-স্টাইল রোমাঞ্চে</span>
          <span className="block text-white">সহজ বাংলায়</span>
        </motion.h1>

        {/* description */}
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-7 max-w-xl font-bengali text-base leading-relaxed text-pink-100/70 md:text-lg"
        >
          Kotlin-এর Fundamentals থেকে Coroutines এবং Advanced Architecture পর্যন্ত ধাপে ধাপে শিখুন।
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MotionLink
            to="/fundamentals"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            className="group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-[#ff5d8f] via-[#ff758f] to-[#c77dff] px-8 py-4 font-bengali text-[15px] font-bold text-white shadow-[0_16px_48px_-12px_rgba(255,117,143,0.7)] transition-shadow duration-300 hover:shadow-[0_20px_56px_-10px_rgba(255,117,143,0.85)] sm:w-auto"
          >
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
            />
            <span className="text-base">🚀</span>
            <span className="relative">শেখা শুরু করুন</span>
            <ArrowRight className="relative size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </MotionLink>

          <MotionLink
            to="/#roadmap"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-pink-400/30 bg-pink-500/5 px-8 py-4 font-bengali text-[15px] font-semibold text-pink-100 backdrop-blur transition-all duration-300 hover:border-[#ff758f]/60 hover:bg-pink-500/15 sm:w-auto shadow-[0_0_20px_rgba(255,117,143,0.15)]"
          >
            <Map className="size-4 text-pink-300 transition-colors duration-300 group-hover:text-[#ff758f]" />
            <span>রোডম্যাপ দেখুন</span>
          </MotionLink>
        </motion.div>

        {/* micro trust line */}
        <motion.p
          variants={fadeUp}
          className="mt-9 font-bengali text-[11.5px] tracking-[0.06em] text-pink-300/50 flex items-center justify-center gap-2"
        >
          <span>🐾</span> Beginner থেকে Advanced <span>🐾</span>
        </motion.p>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2.5"
      >
        <span className="font-bengali text-[10px] tracking-[0.1em] text-pink-300/50 flex items-center gap-1">
          <span>👇</span> স্ক্রোল করুন
        </span>
        <span className="relative block h-10 w-px overflow-hidden bg-pink-400/20">
          <span className="animate-scroll-dot absolute left-0 top-0 block h-2 w-px rounded-full bg-gradient-to-b from-[#ff758f] to-[#c77dff]" />
        </span>
      </motion.div>
    </section>
  );
}
