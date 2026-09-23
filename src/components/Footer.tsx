import KotlinLogo from "./KotlinLogo";

export default function Footer() {
  return (
    <footer className="relative border-t border-pink-500/[0.1] bg-[#0d0713]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-10 sm:px-6 md:flex-row lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-xl border border-pink-400/20 bg-pink-500/10 shadow-[0_0_20px_rgba(255,117,143,0.2)]">
            <KotlinLogo className="size-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <p className="font-display text-sm font-bold leading-tight text-pink-100">
                Kotlin Kitty
              </p>
              <span className="text-xs">🐾</span>
            </div>
            <p className="font-bengali text-[11px] leading-tight text-pink-200/50">
              Fundamentals to Advanced
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 font-bengali text-[11.5px] tracking-[0.02em] text-pink-200/60">
          <span>Made with</span>
          <span className="text-sm">💖</span>
          <span>&</span>
          <span className="text-sm">🐾</span>
          <span>for Kotlin Developers</span>
        </div>
      </div>
    </footer>
  );
}
