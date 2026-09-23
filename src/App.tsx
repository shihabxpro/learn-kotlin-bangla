import { useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ModulePage from "./pages/ModulePage";
import LessonPage from "./pages/LessonPage";

/**
 * Global, fixed background layers:
 * subtle technical grid + soft Kotlin-colored glow orbs.
 */
function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <div className="bg-grid absolute inset-0" />
      <div className="absolute left-1/2 top-[-220px] h-[520px] w-[min(900px,130vw)] -translate-x-1/2 rounded-full bg-[#7f52ff]/[0.1] blur-[150px]" />
      <div className="absolute right-[-180px] top-[38%] h-[440px] w-[440px] rounded-full bg-[#b84afe]/[0.06] blur-[140px]" />
      <div className="absolute bottom-[-220px] left-[8%] h-[420px] w-[420px] rounded-full bg-[#fe8a3c]/[0.05] blur-[150px]" />
    </div>
  );
}

/**
 * Scroll behaviour on route change:
 * - "/#roadmap" -> smooth-scroll to the roadmap section
 * - everything else -> back to the top
 */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        const timer = window.setTimeout(
          () => el.scrollIntoView({ behavior: "smooth", block: "start" }),
          80
        );
        return () => window.clearTimeout(timer);
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function AppShell() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-[#07060c] font-sans text-slate-200 antialiased">
      <BackgroundFX />
      <Navbar />
      {/* keying by pathname replays the light mount fade on each page */}
      <main key={location.pathname} className="relative z-10">
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/:slug" element={<ModulePage />} />
          <Route path="/:slug/:lessonSlug" element={<LessonPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
      <ScrollManager />
      {/* film grain */}
      <div
        aria-hidden
        className="noise-overlay pointer-events-none fixed inset-0 z-[80] opacity-[0.028] mix-blend-overlay"
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
