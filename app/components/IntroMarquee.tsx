"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function IntroMarquee({
  onDone,
}: {
  onDone: () => void;
}) {
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // scroll lock
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // intro marquee animation
    gsap.to(marqueeRef.current, {
      xPercent: -100,
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
    <div className="introWrap">
      <div className="marquee" ref={marqueeRef}>
        <span>MIRACLE CREATIONS • CREATIVE AGENCY • BRANDING • DESIGN • </span>
        <span>MIRACLE CREATIONS • CREATIVE AGENCY • BRANDING • DESIGN • </span>
      </div>
    </div>
  );
}
