"use client";

import Image from "next/image";
import IntroMarquee from "./components/IntroMarquee";

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* ===== WONJYOU-STYLE LANDING ===== */}
      <section className="relative h-screen overflow-hidden">
        {/* LEFT VERTICAL MENU */}
        <aside className="absolute top-0 left-0 h-full w-[72px] border-r border-white/10 flex flex-col items-center justify-between py-6 z-20">
          <div className="flex flex-col items-center gap-5 opacity-70">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[12px]">
              M
            </div>

            <div className="flex flex-col gap-6 text-[11px] tracking-[0.32em] uppercase">
              <span className="rotate-90 origin-left text-white/40">
                I Intro
              </span>
              <span className="rotate-90 origin-left text-white/60">
                II Work
              </span>
              <span className="rotate-90 origin-left text-white/60">
                III About
              </span>
              <span className="rotate-90 origin-left text-white/60">
                IV Contact
              </span>
            </div>
          </div>

          {/* CONNECT BUTTON */}
          <button className="bg-[#f1b34a] text-black text-[11px] tracking-[0.28em] uppercase px-4 py-3 rotate-90 origin-bottom-left">
            Let’s Connect →
          </button>
        </aside>

        {/* MAIN CONTENT */}
        <div className="h-full w-full pl-[72px] flex">
          {/* TEXT SIDE */}
          <div className="flex-1 flex items-center">
            <div className="px-10 w-full">
              <p className="text-[14px] text-white/80 mb-10 max-w-[200px] leading-[1.3]">
                Creative studio <br />
                by Miracle Creations
              </p>

              <div className="font-bold leading-[0.9] tracking-[-0.03em]">
                <h1 className="text-[90px] md:text-[120px] text-[#ff4d3d]">
                  EDUCATOR
                </h1>
                <h1 className="text-[90px] md:text-[120px] text-[#ff4d3d]">
                  COACH
                </h1>
                <h1 className="text-[90px] md:text-[120px] text-[#ff4d3d]">
                  MENTOR
                </h1>
                <h1 className="text-[90px] md:text-[120px] text-[#ff4d3d]">
                  CONSULTANT
                </h1>
              </div>

              {/* SCROLL INDICATOR */}
              <div className="absolute bottom-10 left-[110px] flex items-center gap-4 text-[12px] tracking-[0.22em] uppercase text-white/70">
                <span>Scroll to discover</span>
                <span className="w-12 h-px bg-white/25" />
              </div>
            </div>
          </div>

          {/* IMAGE SIDE */}
          <div className="relative w-[42%] h-full">
            <Image
              src="/hero/portrait.jpg"
              alt="portrait"
              fill
              priority
              className="object-cover opacity-80 grayscale"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </div>
      </section>

      {/* ===== NEXT SECTION (Marquee) ===== */}
      <IntroMarquee onDone={() => {}} />
    </main>
  );
}
