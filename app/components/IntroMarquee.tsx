"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function IntroMarquee({ onDone }: { onDone: () => void }) {
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // scroll lock
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // simple marquee move (for now)
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 3.2,
      ease: "power2.inOut",
      onComplete: () => {
        document.body.style.overflow = prev || "auto";
        onDone();
      },
    });

    return () => {
      document.body.style.overflow = prev || "auto";
    };
  }, [onDone]);

  return (
    <section className="marqueeSection">
      <div className="marqueeContainer">
        <div className="marqueeWrapper">
          <div className="marqueeImages" ref={marqueeRef}>
            <div className="mImg">
              <img src="/marquee/1.jpg" alt="" />
            </div>
            <div className="mImg">
              <img src="/marquee/2.jpg" alt="" />
            </div>
            <div className="mImg">
              <img src="/marquee/3.jpg" alt="" />
            </div>

            {/* Center image (Pinned target) */}
            <div className="mImg pin">
              <img src="/marquee/4.jpg" alt="" />
            </div>

            <div className="mImg">
              <img src="/marquee/5.jpg" alt="" />
            </div>
            <div className="mImg">
              <img src="/marquee/6.jpg" alt="" />
            </div>
            <div className="mImg">
              <img src="/marquee/7.jpg" alt="" />
            </div>
            <div className="mImg">
              <img src="/marquee/8.jpg" alt="" />
            </div>
            <div className="mImg">
              <img src="/marquee/9.jpg" alt="" />
            </div>
            <div className="mImg">
              <img src="/marquee/10.jpg" alt="" />
            </div>
            <div className="mImg">
              <img src="/marquee/11.jpg" alt="" />
            </div>
            <div className="mImg">
              <img src="/marquee/12.jpg" alt="" />
            </div>
            <div className="mImg">
              <img src="/marquee/13.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
