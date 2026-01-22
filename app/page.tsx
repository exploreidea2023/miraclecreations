"use client";

import IntroMarquee from "./components/IntroMarquee";

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* 1) LANDING HERO (Text only like wonjyou) */}
      <section className="h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-[10px] tracking-[0.5em] uppercase opacity-70">
            Miracle Creations
          </p>

          <h1 className="mt-6 text-[12px] tracking-[0.35em] uppercase opacity-60">
            Creative Studio
          </h1>

          <p className="mt-10 text-[11px] tracking-[0.25em] uppercase opacity-50">
            Branding • Design • Development
          </p>

          <div className="mt-16 flex justify-center">
            <div className="h-[70px] w-[1px] bg-white/15 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[20px] bg-white/70 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* 2) MARQUEE SECTION (Images start here) */}
      <IntroMarquee onDone={() => {}} />
    </main>
  );
}
