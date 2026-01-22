"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroIntro({ onDone }: { onDone: () => void }) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!wrapRef.current || !listRef.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLDivElement>(".heroWord");

      // Initial states
      gsap.set(items, { y: 40, opacity: 0 });
      gsap.set(wrapRef.current, { opacity: 1 });
      gsap.set(listRef.current, { x: 0 });

      // 1) Words appear one-by-one (bottom center -> up)
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          onDone();
        },
      });

      tl.to(items, {
        y: 0,
        opacity: 1,
        duration: 0.55,
        stagger: 0.18,
      });

      // Small pause
      tl.to({}, { duration: 0.2 });

      // 2) Shift whole block to LEFT and stick feel
      tl.to(listRef.current, {
        x: -260,
        duration: 0.9,
        ease: "power3.inOut",
      });
    }, wrapRef);

    return () => ctx.revert();
  }, [onDone]);

  return (
    <section className="heroIntro" ref={wrapRef}>
      <div className="heroIntroInner" ref={listRef}>
        <div className="heroWord">Educator</div>
        <div className="heroWord">Design mentorship</div>
        <div className="heroWord">by Miracle Creations</div>
        <div className="heroWord">coach</div>
        <div className="heroWord">Mentor</div>
        <div className="heroWord">consultant</div>
      </div>
    </section>
  );
}
