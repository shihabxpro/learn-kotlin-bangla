import { useId, type SVGProps } from "react";

export interface KittyIconProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}

/**
 * Kitty Theme Palette constants matching all 8 roadmap milestones
 */
export const KITTY_ACCENTS: Record<number, string> = {
  1: "#ff758f", // Strawberry pink (Fundamentals)
  2: "#ff4d6d", // Rose red (Control Flow)
  3: "#c77dff", // Lavender purple (Functions)
  4: "#f72585", // Neon berry pink (Null Safety)
  5: "#ff85a1", // Bubblegum (Collections)
  6: "#b5179e", // Deep orchid (OOP)
  7: "#ffa6c1", // Cotton candy (Functional)
  8: "#ff5d8f", // Hot ruby (Advanced & Coroutines)
};

export const KITTY_CHAPTER_TITLES: Record<number, string> = {
  1: "Scholar Kitty — Fundamentals",
  2: "Curious Kitty — Control Flow",
  3: "Wizard Kitty — Functions",
  4: "Guardian Kitty — Null Safety",
  5: "Organizer Kitty — Collections",
  6: "Architect Kitty — OOP",
  7: "Fairy Kitty — Functional",
  8: "Astronaut Kitty — Advanced & Coroutines",
};

/** 01. Scholar Kitty — Cat wearing spectacles reading an open book */
export function ScholarCatIcon({ color = "#ff758f", size = 28, className = "", ...props }: KittyIconProps) {
  const id = useId();
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#ffd6e0" />
        </linearGradient>
      </defs>
      {/* Cat Ears */}
      <path d="M12 18 L6 6 L20 12 Z" fill={color} />
      <path d="M11 16 L8 8 L17 12 Z" fill="#ffd6e0" opacity="0.8" />
      <path d="M36 18 L42 6 L28 12 Z" fill={color} />
      <path d="M37 16 L40 8 L31 12 Z" fill="#ffd6e0" opacity="0.8" />
      {/* Cat Head */}
      <ellipse cx="24" cy="20" rx="16" ry="12" fill={`url(#${id}-g)`} />
      {/* Cute Glasses */}
      <circle cx="18" cy="20" r="4.5" stroke="#1f1024" strokeWidth="1.8" fill="rgba(255,255,255,0.25)" />
      <circle cx="30" cy="20" r="4.5" stroke="#1f1024" strokeWidth="1.8" fill="rgba(255,255,255,0.25)" />
      <path d="M22.5 20 L25.5 20" stroke="#1f1024" strokeWidth="1.8" strokeLinecap="round" />
      {/* Eyes behind glasses */}
      <circle cx="18" cy="20" r="1.8" fill="#1f1024" />
      <circle cx="17.2" cy="19.2" r="0.7" fill="#ffffff" />
      <circle cx="30" cy="20" r="1.8" fill="#1f1024" />
      <circle cx="29.2" cy="19.2" r="0.7" fill="#ffffff" />
      {/* Cute Nose and Whiskers */}
      <path d="M23 23 L25 23 L24 24.2 Z" fill="#ff4d6d" />
      <path d="M10 22 L5 21 M10 24 L4 25" stroke="#1f1024" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <path d="M38 22 L43 21 M38 24 L44 25" stroke="#1f1024" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      {/* Open Book */}
      <path d="M12 34 Q24 31 24 37 Q24 31 36 34 L36 42 Q24 39 24 45 Q24 39 12 42 Z" fill="#ffffff" stroke={color} strokeWidth="1.5" />
      <path d="M24 37 L24 45" stroke={color} strokeWidth="1.5" />
      {/* Book text lines */}
      <path d="M15 36 H21 M15 39 H20 M27 36 H33 M27 39 H32" stroke="#ff758f" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      {/* Paws on the book */}
      <ellipse cx="16" cy="33" rx="2.5" ry="2" fill="#ffd6e0" stroke={color} strokeWidth="1.2" />
      <ellipse cx="32" cy="33" rx="2.5" ry="2" fill="#ffd6e0" stroke={color} strokeWidth="1.2" />
    </svg>
  );
}

/** 02. Curious Yarn Kitty — Cat playing with branching yarn loops */
export function YarnCatIcon({ color = "#ff4d6d", size = 28, className = "", ...props }: KittyIconProps) {
  const id = useId();
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#ffb3c1" />
        </linearGradient>
      </defs>
      {/* Cat Ears */}
      <path d="M10 16 L4 5 L17 10 Z" fill={color} />
      <path d="M9 14 L6 7 L14 10 Z" fill="#ffe5ec" opacity="0.85" />
      <path d="M30 16 L36 5 L23 10 Z" fill={color} />
      <path d="M31 14 L34 7 L26 10 Z" fill="#ffe5ec" opacity="0.85" />
      {/* Head tilted curiously */}
      <circle cx="20" cy="18" r="12" fill={`url(#${id}-g)`} />
      {/* Happy Eyes */}
      <path d="M14 17 Q16 14 18 17" stroke="#1f1024" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M22 17 Q24 14 26 17" stroke="#1f1024" strokeWidth="1.8" strokeLinecap="round" />
      {/* Nose & Smile */}
      <circle cx="20" cy="20" r="1.2" fill="#ff4d6d" />
      <path d="M18.5 22 Q20 23.5 21.5 22" stroke="#1f1024" strokeWidth="1.4" strokeLinecap="round" />
      {/* Cheeks */}
      <circle cx="13" cy="20" r="2" fill="#ff758f" opacity="0.5" />
      <circle cx="27" cy="20" r="2" fill="#ff758f" opacity="0.5" />
      {/* Paws batting yarn */}
      <ellipse cx="26" cy="27" rx="3" ry="2.2" fill="#ffe5ec" stroke={color} strokeWidth="1.2" />
      {/* Ball of Yarn (Decision & Loops) */}
      <circle cx="34" cy="34" r="8" fill={color} />
      <path d="M28 32 C31 29, 37 31, 39 34" stroke="#ffffff" strokeWidth="1.3" strokeLinecap="round" opacity="0.8" />
      <path d="M30 36 C34 38, 38 34, 40 37" stroke="#ffffff" strokeWidth="1.3" strokeLinecap="round" opacity="0.8" />
      <path d="M34 26 C33 30, 36 38, 33 42" stroke="#ffffff" strokeWidth="1.3" strokeLinecap="round" opacity="0.8" />
      {/* Looping Yarn Trail (Loop & Branch) */}
      <path d="M28 37 C20 40, 16 33, 10 37 C6 40, 4 43, 2 45" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      {/* Branching yarn path */}
      <path d="M16 35 C17 30, 14 26, 12 28" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeDasharray="2 2" />
    </svg>
  );
}

/** 03. Wizard Kitty — Cat with starry wizard hat & magic wand (Functions & Lambdas) */
export function WizardCatIcon({ color = "#c77dff", size = 28, className = "", ...props }: KittyIconProps) {
  const id = useId();
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#e0aaff" />
        </linearGradient>
      </defs>
      {/* Cat Ears */}
      <path d="M11 20 L6 10 L18 15 Z" fill={color} />
      <path d="M37 20 L42 10 L30 15 Z" fill={color} />
      {/* Wizard Hat */}
      <path d="M24 3 L15 19 L33 19 Z" fill="#7b2cbf" />
      <ellipse cx="24" cy="19" rx="13" ry="3.5" fill="#5a189a" />
      {/* Hat Ribbon */}
      <path d="M16 17 C20 18.5, 28 18.5, 32 17" stroke="#ffd166" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 7 L25.5 10 L28.5 10.5 L26 12.5 L27 15.5 L24 13.8 L21 15.5 L22 12.5 L19.5 10.5 L22.5 10 Z" fill="#ffd166" transform="translate(1, -1) scale(0.65)" />
      {/* Cat Face */}
      <ellipse cx="24" cy="27" rx="14" ry="11" fill={`url(#${id}-g)`} />
      {/* Cute Big Sparkly Eyes */}
      <circle cx="18" cy="27" r="2.5" fill="#1f1024" />
      <circle cx="17" cy="26" r="1" fill="#ffffff" />
      <circle cx="30" cy="27" r="2.5" fill="#1f1024" />
      <circle cx="29" cy="26" r="1" fill="#ffffff" />
      {/* Nose */}
      <polygon points="23,30 25,30 24,31.2" fill="#ff758f" />
      <path d="M22.5 32 Q24 33.5 25.5 32" stroke="#1f1024" strokeWidth="1.2" strokeLinecap="round" />
      {/* Magic Wand in Paw */}
      <path d="M33 34 L43 24" stroke="#ffb703" strokeWidth="2" strokeLinecap="round" />
      <circle cx="43" cy="24" r="2" fill="#ffffff" />
      {/* Magic Sparkles (Lambda burst) */}
      <path d="M43 18 L44 21 L47 21 L44.5 23 L45.5 26 L43 24 L40.5 26 L41.5 23 L39 21 L42 21 Z" fill="#ffd166" />
      <circle cx="46" cy="18" r="0.9" fill="#ffd166" />
      <circle cx="38" cy="20" r="0.9" fill="#ff758f" />
      <ellipse cx="32" cy="34" rx="2.5" ry="2" fill="#f3c4fb" stroke="#7b2cbf" strokeWidth="1" />
    </svg>
  );
}

/** 04. Guardian Umbrella Kitty — Protective Umbrella & Shield (Null Safety) */
export function UmbrellaCatIcon({ color = "#f72585", size = 28, className = "", ...props }: KittyIconProps) {
  const id = useId();
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#ff70a6" />
        </linearGradient>
      </defs>
      {/* Protective Canopy / Umbrella */}
      <path
        d="M6 20 C6 10, 42 10, 42 20 C36 17, 30 20, 24 18 C18 20, 12 17, 6 20 Z"
        fill={`url(#${id}-g)`}
        stroke="#ffffff"
        strokeWidth="1.2"
      />
      <path d="M24 5 L24 10" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
      {/* Umbrella Ribs */}
      <path d="M24 10 Q16 16 12 19 M24 10 Q32 16 36 19" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
      {/* Cat Under the Umbrella */}
      {/* Ears */}
      <path d="M15 28 L11 19 L21 24 Z" fill="#ff758f" />
      <path d="M33 28 L37 19 L27 24 Z" fill="#ff758f" />
      {/* Head */}
      <circle cx="24" cy="32" r="10" fill="#ffd6e0" />
      {/* Eyes */}
      <path d="M20 31 Q21.5 29 23 31" stroke="#1f1024" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M25 31 Q26.5 29 28 31" stroke="#1f1024" strokeWidth="1.5" strokeLinecap="round" />
      {/* Nose */}
      <circle cx="24" cy="33.5" r="1" fill="#f72585" />
      {/* Umbrella handle in paw */}
      <path d="M24 18 L24 38 Q24 43 21 42" stroke="#ffd166" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="23" cy="37" rx="2.2" ry="1.8" fill="#ffffff" />
      {/* Null-safe question mark shield badge */}
      <circle cx="36" cy="36" r="5.5" fill="#f72585" stroke="#ffffff" strokeWidth="1.5" />
      <text x="36" y="39.5" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold" fontFamily="monospace">
        ?
      </text>
    </svg>
  );
}

/** 05. Bento Box Kitty — Cat with fish, milk and collection box (Collections) */
export function BentoCatIcon({ color = "#ff85a1", size = 28, className = "", ...props }: KittyIconProps) {
  const id = useId();
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#ffd6e0" />
        </linearGradient>
      </defs>
      {/* Cat Ears */}
      <path d="M13 18 L7 7 L21 12 Z" fill={color} />
      <path d="M35 18 L41 7 L27 12 Z" fill={color} />
      {/* Cat Face peeking over the box */}
      <ellipse cx="24" cy="20" rx="14" ry="11" fill={`url(#${id}-g)`} />
      {/* Eyes */}
      <ellipse cx="18" cy="19" rx="2" ry="2.5" fill="#1f1024" />
      <circle cx="17.2" cy="18" r="0.8" fill="#ffffff" />
      <ellipse cx="30" cy="19" rx="2" ry="2.5" fill="#1f1024" />
      <circle cx="29.2" cy="18" r="0.8" fill="#ffffff" />
      {/* Pink cheeks */}
      <circle cx="14" cy="22" r="2.2" fill="#ff4d6d" opacity="0.6" />
      <circle cx="34" cy="22" r="2.2" fill="#ff4d6d" opacity="0.6" />
      {/* Nose */}
      <polygon points="23,22 25,22 24,23.3" fill="#ff4d6d" />
      {/* Collection Box (Bento / Grid Container) */}
      <rect x="7" y="27" width="34" height="17" rx="4" fill="#ffffff" stroke={color} strokeWidth="1.8" />
      {/* Compartment dividers representing List, Set, Map */}
      <line x1="18" y1="27" x2="18" y2="44" stroke="#ffb3c6" strokeWidth="1.2" />
      <line x1="29" y1="27" x2="29" y2="44" stroke="#ffb3c6" strokeWidth="1.2" />
      {/* Items in the collection box: Little fish, strawberry, milk bottle */}
      {/* Compartment 1: Fish */}
      <path d="M10 36 C13 33, 16 37, 16 35 L17 38 L16 35 C15 37, 12 39, 10 36 Z" fill="#ff758f" />
      {/* Compartment 2: Heart / Strawberry */}
      <circle cx="23.5" cy="35" r="2.5" fill="#ff4d6d" />
      {/* Compartment 3: Milk bottle */}
      <rect x="33" y="32" width="4" height="7" rx="1" fill="#70d6ff" opacity="0.8" />
      {/* Paws holding the edge of the box */}
      <ellipse cx="14" cy="27" rx="3" ry="2.2" fill="#ffd6e0" stroke={color} strokeWidth="1.2" />
      <ellipse cx="34" cy="27" rx="3" ry="2.2" fill="#ffd6e0" stroke={color} strokeWidth="1.2" />
    </svg>
  );
}

/** 06. Crowned Architect Kitty — Regal Kitty with Crown & Collar (OOP / Classes) */
export function CrownCatIcon({ color = "#b5179e", size = 28, className = "", ...props }: KittyIconProps) {
  const id = useId();
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#e0aaff" />
        </linearGradient>
      </defs>
      {/* Royal Crown */}
      <path d="M16 14 L18 6 L24 11 L30 6 L32 14 Z" fill="#ffd166" stroke="#e0aaff" strokeWidth="1" />
      <circle cx="18" cy="6" r="1.3" fill="#ff4d6d" />
      <circle cx="24" cy="11" r="1.3" fill="#7209b7" />
      <circle cx="30" cy="6" r="1.3" fill="#ff4d6d" />
      {/* Cat Ears */}
      <path d="M12 21 L7 10 L19 16 Z" fill={color} />
      <path d="M11 19 L8 12 L16 16 Z" fill="#f3c4fb" opacity="0.8" />
      <path d="M36 21 L41 10 L29 16 Z" fill={color} />
      <path d="M37 19 L40 12 L32 16 Z" fill="#f3c4fb" opacity="0.8" />
      {/* Head */}
      <ellipse cx="24" cy="27" rx="15" ry="12" fill={`url(#${id}-g)`} />
      {/* Regal Confident Eyes */}
      <ellipse cx="18" cy="26" rx="2.5" ry="2.8" fill="#1f1024" />
      <circle cx="17.2" cy="25" r="0.9" fill="#ffffff" />
      <ellipse cx="30" cy="26" rx="2.5" ry="2.8" fill="#1f1024" />
      <circle cx="29.2" cy="25" r="0.9" fill="#ffffff" />
      {/* Whiskers */}
      <path d="M11 28 L4 27 M11 30 L5 31" stroke="#1f1024" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M37 28 L44 27 M37 30 L43 31" stroke="#1f1024" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      {/* Nose & Sweet Mouth */}
      <polygon points="23,29 25,29 24,30.3" fill="#ff4d6d" />
      <path d="M22.5 31 Q24 32.5 25.5 31" stroke="#1f1024" strokeWidth="1.3" strokeLinecap="round" />
      {/* Royal Collar with Gem (Class hierarchy / OOP foundation) */}
      <path d="M14 38 C18 41, 30 41, 34 38" stroke="#ff758f" strokeWidth="3" strokeLinecap="round" />
      <polygon points="24,38 27,42 24,45 21,42" fill="#ffd166" stroke="#ffffff" strokeWidth="0.8" />
    </svg>
  );
}

/** 07. Angel Wings Fairy Kitty — Wings & sparkles (Functional & Scope Functions) */
export function SparkleCatIcon({ color = "#ffa6c1", size = 28, className = "", ...props }: KittyIconProps) {
  const id = useId();
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#ffd6e0" />
        </linearGradient>
      </defs>
      {/* Angel Wings */}
      <path
        d="M13 24 C6 20, 2 12, 6 6 C12 8, 14 16, 17 21 Z"
        fill="#ffffff"
        opacity="0.9"
        stroke={color}
        strokeWidth="1.2"
      />
      <path
        d="M35 24 C42 20, 46 12, 42 6 C36 8, 34 16, 31 21 Z"
        fill="#ffffff"
        opacity="0.9"
        stroke={color}
        strokeWidth="1.2"
      />
      {/* Floating Halo */}
      <ellipse cx="24" cy="8" rx="8" ry="2.5" fill="none" stroke="#ffd166" strokeWidth="1.8" />
      {/* Cat Ears */}
      <path d="M13 19 L8 8 L20 13 Z" fill={color} />
      <path d="M35 19 L40 8 L28 13 Z" fill={color} />
      {/* Head */}
      <circle cx="24" cy="24" r="12" fill={`url(#${id}-g)`} />
      {/* Happy Curled Eyes */}
      <path d="M17 23 Q19.5 20.5 22 23" stroke="#1f1024" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M26 23 Q28.5 20.5 31 23" stroke="#1f1024" strokeWidth="1.8" strokeLinecap="round" />
      {/* Soft Pink Cheeks */}
      <circle cx="16" cy="26" r="2.2" fill="#ff4d6d" opacity="0.6" />
      <circle cx="32" cy="26" r="2.2" fill="#ff4d6d" opacity="0.6" />
      {/* Nose */}
      <circle cx="24" cy="26" r="1.1" fill="#ff4d6d" />
      {/* Floating Stars / Sparkles */}
      <path d="M24 37 L25 39 L27 39 L25.5 40.5 L26 42.5 L24 41 L22 42.5 L22.5 40.5 L21 39 L23 39 Z" fill="#ffd166" />
      <circle cx="10" cy="38" r="1" fill="#c77dff" />
      <circle cx="38" cy="36" r="1" fill="#c77dff" />
    </svg>
  );
}

/** 08. Astronaut Cosmo Kitty — Space Helmet, Stars & Rocket (Advanced & Coroutines) */
export function AstronautCatIcon({ color = "#ff5d8f", size = 28, className = "", ...props }: KittyIconProps) {
  const id = useId();
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#70d6ff" />
          <stop offset="100%" stopColor="#c77dff" />
        </linearGradient>
      </defs>
      {/* Outer Astronaut Helmet with Cat Ear Cones */}
      <path d="M12 16 L7 6 L18 11 Z" fill="#ffffff" stroke={color} strokeWidth="1.2" />
      <path d="M36 16 L41 6 L30 11 Z" fill="#ffffff" stroke={color} strokeWidth="1.2" />
      <ellipse cx="24" cy="23" rx="17" ry="15" fill="#ffffff" stroke={color} strokeWidth="1.5" />
      {/* Glass Visor (Reflection of space / flow) */}
      <ellipse cx="24" cy="23" rx="13" ry="11" fill="#1b1029" stroke={`url(#${id}-g)`} strokeWidth="1.5" />
      {/* Cat Face inside Visor */}
      <circle cx="24" cy="24" r="8" fill="#ffd6e0" />
      {/* Big Wondering Eyes */}
      <ellipse cx="21" cy="23" rx="1.8" ry="2.2" fill="#1f1024" />
      <circle cx="20.3" cy="22" r="0.7" fill="#ffffff" />
      <ellipse cx="27" cy="23" rx="1.8" ry="2.2" fill="#1f1024" />
      <circle cx="26.3" cy="22" r="0.7" fill="#ffffff" />
      {/* Nose */}
      <circle cx="24" cy="26" r="0.8" fill="#ff4d6d" />
      {/* Visor Glare highlight */}
      <path d="M15 17 Q20 14 26 15" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      {/* Little Rocket & Orbiting Stars */}
      <path d="M37 36 L43 32 L41 38 Z" fill="#ff5d8f" />
      <circle cx="42" cy="33" r="1" fill="#ffffff" />
      {/* Jet flame */}
      <path d="M36 37 L34 40 L38 39 Z" fill="#ffd166" />
      {/* Space dust / orbit */}
      <circle cx="8" cy="38" r="1.2" fill="#ffd166" />
      <circle cx="6" cy="22" r="0.8" fill="#ffffff" />
    </svg>
  );
}

/** Dynamic Milestone Kitty Icon Picker by Milestone ID (1 to 8) */
export function MilestoneCatIcon({
  moduleId,
  className = "",
  color,
  size = 28,
  ...props
}: {
  moduleId: number;
} & KittyIconProps) {
  const chosenColor = color || KITTY_ACCENTS[moduleId] || "#ff758f";

  switch (moduleId) {
    case 1:
      return <ScholarCatIcon color={chosenColor} size={size} className={className} {...props} />;
    case 2:
      return <YarnCatIcon color={chosenColor} size={size} className={className} {...props} />;
    case 3:
      return <WizardCatIcon color={chosenColor} size={size} className={className} {...props} />;
    case 4:
      return <UmbrellaCatIcon color={chosenColor} size={size} className={className} {...props} />;
    case 5:
      return <BentoCatIcon color={chosenColor} size={size} className={className} {...props} />;
    case 6:
      return <CrownCatIcon color={chosenColor} size={size} className={className} {...props} />;
    case 7:
      return <SparkleCatIcon color={chosenColor} size={size} className={className} {...props} />;
    case 8:
      return <AstronautCatIcon color={chosenColor} size={size} className={className} {...props} />;
    default:
      return <ScholarCatIcon color={chosenColor} size={size} className={className} {...props} />;
  }
}
