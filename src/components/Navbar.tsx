import { Fragment, useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Home, Map, Info, ArrowUpRight, Heart } from "lucide-react";
import KotlinLogo from "./KotlinLogo";

interface MenuItem {
  id: number;
  label: string;
  sub: string;
  icon: typeof Home;
  to?: string;
  soon?: boolean;
}

const menuItems: MenuItem[] = [
  { id: 1, label: "হোম", sub: "HOME", icon: Home, to: "/" },
  { id: 2, label: "রোডম্যাপ", sub: "ROADMAP", icon: Map, to: "/#roadmap" },
  { id: 3, label: "সম্পর্কে", sub: "ABOUT", icon: Info, soon: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  /* subtle background deepening after scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close the menu on outside click / Escape */
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const rowClass =
    "group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors duration-200 hover:bg-[#ff758f]/10";

  const rowInner = (item: MenuItem, i: number) => (
    <Fragment>
      <span className="flex size-9 items-center justify-center rounded-lg border border-pink-400/20 bg-pink-500/5 transition-colors duration-200 group-hover:border-[#ff758f]/50">
        <item.icon className="size-4 text-pink-300/70 transition-colors duration-200 group-hover:text-[#ff758f]" />
      </span>
      <span className="flex-1">
        <span className="block font-bengali text-[15px] font-semibold text-slate-200 group-hover:text-white">
          {item.label}
        </span>
        <span className="block font-mono text-[9px] tracking-[0.18em] text-pink-300/40">
          {item.sub}
        </span>
      </span>
      <span className="mr-1 font-mono text-[9px] tracking-widest text-pink-300/50">
        0{i + 1}
      </span>
      {item.soon ? (
        <span className="rounded-full border border-pink-400/20 px-2 py-0.5 font-bengali text-[9px] text-pink-300/60">
          শীঘ্রই আসছে
        </span>
      ) : (
        <ArrowUpRight className="size-3.5 -translate-x-1 text-pink-300/50 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:text-[#ff758f] group-hover:opacity-100" />
      )}
    </Fragment>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`pointer-events-none absolute inset-0 border-b backdrop-blur-md transition-colors duration-300 ${
          scrolled
            ? "border-pink-500/[0.12] bg-[#0e0714]/90 shadow-[0_4px_24px_-4px_rgba(255,117,143,0.15)]"
            : "border-transparent bg-[#0e0714]/60"
        }`}
      />
      <nav
        className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-20 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Brand — Kotlin Kitty */}
        <Link
          to="/"
          aria-label="Kotlin Kitty Home"
          className="flex items-center gap-3 group"
        >
          <div className="relative flex size-10 items-center justify-center rounded-xl border border-pink-400/25 bg-pink-500/10 shadow-[0_0_24px_-4px_rgba(255,117,143,0.45)] transition-transform duration-300 group-hover:scale-105">
            <KotlinLogo className="size-6" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display text-[17px] font-bold tracking-tight text-white">
                Kotlin
                <span className="text-[#ff758f]"> Kitty</span>
              </span>
              <span className="text-xs" role="img" aria-label="Cat paw">
                🐾
              </span>
            </div>
            <p className="font-bengali text-[10px] text-pink-300/60 hidden sm:block leading-none">
              ইন্টারঅ্যাক্টিভ লার্নিং
            </p>
          </div>
          <span className="hidden rounded-full border border-pink-400/20 bg-pink-500/10 px-2 py-0.5 font-mono text-[9px] tracking-[0.15em] text-pink-300 sm:inline-block">
            KITTY EDITION
          </span>
        </Link>

        {/* Right side */}
        <div className="relative flex items-center gap-3" ref={panelRef}>
          <span className="hidden font-bengali text-[11px] tracking-[0.05em] text-pink-200/60 md:inline-flex items-center gap-1.5">
            <Heart className="size-3 text-[#ff758f]" />
            বাংলায় শিখুন
          </span>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
            className="group relative flex size-11 items-center justify-center rounded-xl border border-pink-400/20 bg-pink-500/5 transition-all duration-200 hover:border-[#ff758f]/50 hover:bg-pink-500/15"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-full origin-center rounded-full bg-pink-200 transition-transform duration-200 ease-out ${
                  open ? "translate-y-[5.25px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-[1.5px] w-full origin-center rounded-full bg-pink-200 transition-transform duration-200 ease-out ${
                  open ? "-translate-y-[5.25px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>

          {/* Dropdown panel */}
          <AnimatePresence>
            {open && (
              <motion.div
                id="site-menu"
                role="menu"
                initial={{ opacity: 0, y: -6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.98 }}
                transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                style={{ willChange: "transform, opacity" }}
                className="absolute right-0 top-[calc(100%+0.75rem)] w-[calc(100vw-2rem)] max-w-[280px] origin-top-right overflow-hidden rounded-2xl border border-pink-500/20 bg-[#160c1d] p-2 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(255,117,143,0.15)]"
              >
                <p className="px-3 pb-2 pt-2.5 font-bengali text-[10.5px] font-medium tracking-[0.08em] text-pink-300/70 flex items-center gap-1.5">
                  <span>🐾</span> মেনু
                </p>
                <ul className="flex flex-col gap-1">
                  {menuItems.map((item, i) => (
                    <li key={item.id}>
                      {item.to ? (
                        <Link
                          role="menuitem"
                          to={item.to}
                          onClick={() => setOpen(false)}
                          className={rowClass}
                        >
                          {rowInner(item, i)}
                        </Link>
                      ) : (
                        <span role="menuitem" className={rowClass}>
                          {rowInner(item, i)}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="mt-2 flex items-center justify-between border-t border-pink-500/[0.1] px-3 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2 animate-pulse-soft rounded-full bg-[#ff758f]" />
                    <span className="font-bengali text-[10px] tracking-[0.02em] text-pink-200/60">
                      Kitty Live Platform
                    </span>
                  </div>
                  <span className="text-xs">🌸</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
}
