"use client";

import IntroMarquee from "./components/IntroMarquee";

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* ===== WONJYOU STYLE LANDING ===== */}
      <section className="relative h-screen overflow-hidden">
        {/* Top Bar */}
        <header className="absolute top-0 left-0 w-full z-10 px-10 py-8 flex items-start justify-between">
          {/* Left Nav */}
          <nav className="text-[11px] tracking-[0.28em] uppercase text-white/70 space-y-3">
            <p className="text-white/40">I. Intro</p>
            <p className="hover:text-white transition">II. Mentorship</p>
            <p className="hover:text-white transition">III. About</p>
            <p className="hover:text-white transition">IV. Work</p>
            <p className="hover:text-white transition">V. Contact</p>
          </nav>

          {/* Right CTA */}
          <div className="text-[11px] tracking-[0.28em] uppercase text-white/70 hover:text-white transition cursor-pointer">
            LET’S CONNECT
          </div>
        </header>

        {/* Center Content */}
        <div className="h-full flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <p className="text-[11px] tracking-[0.35em] uppercase text-white/60">
              Miracle Creations Studio
            </p>

            <h1 className="mt-6 text-[44px] md:text-[64px] leading-[1.05] font-medium tracking-[-0.02em]">
              Same passion. <br className="hidden md:block" /> New mission.
            </h1>

            <p className="mt-8 text-[12px] tracking-[0.28em] uppercase text-white/50">
              Branding • Design • Development • Creative Direction
            </p>
          </div>
        </div>

        {/* Bottom Left */}
        <div className="absolute bottom-10 left-10 z-10 text-[11px] tracking-[0.28em] uppercase text-white/70">
          <span className="hover:text-white transition cursor-pointer">
            watch intro
          </span>
        </div>

        {/* Bottom Right */}
        <div className="absolute bottom-10 right-10 z-10 flex items-center gap-4">
          <span className="text-[11px] tracking-[0.28em] uppercase text-white/60">
            Scroll to discover
          </span>
          <span className="w-12 h-px bg-white/20" />
        </div>
      </section>

      {/* ===== MARQUEE / ANIMATION SECTION ===== */}
      <IntroMarquee onDone={() => {}} />
    </main>
  );
}
