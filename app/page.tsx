"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  const introWrapRef = useRef<HTMLDivElement | null>(null);
  const brandRef = useRef<HTMLDivElement | null>(null);
  const wordsRef = useRef<HTMLDivElement | null>(null);

  const pinSectionRef = useRef<HTMLDivElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Lock scroll until intro finishes
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prev || "auto";
    };
  }, []);

  useLayoutEffect(() => {
    if (!introWrapRef.current || !brandRef.current || !wordsRef.current) return;

    // INTRO animation (load)
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLDivElement>(".mcWord");

      // Initial state
      gsap.set(introWrapRef.current, { opacity: 1 });
      gsap.set(brandRef.current, { opacity: 0, y: 10, scale: 0.98 });
      gsap.set(items, { opacity: 0, y: 55 });
      gsap.set(wordsRef.current, { x: 0 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          // unlock scroll
          document.body.style.overflow = "auto";
          setIntroDone(true);
        },
      });

      // 1) small brand text in center
      tl.to(brandRef.current, { opacity: 1, y: 0, duration: 0.7 }, 0);

      // 2) red words bottom-center -> up one-by-one
      tl.to(
        items,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.18,
        },
        0.35
      );

      // 3) settle words to LEFT and become huge
      tl.to({}, { duration: 0.25 });
      tl.to(wordsRef.current, { x: -340, duration: 0.95, ease: "power3.inOut" });
      tl.to(
        ".mcWords",
        { fontSize: 96, lineHeight: 0.9, duration: 0.75, ease: "power3.inOut" },
        "<"
      );
      tl.to(brandRef.current, { opacity: 0, duration: 0.25 }, "<+0.15");
    }, introWrapRef);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (!pinSectionRef.current || !marqueeRef.current) return;

    // SCROLL animations (after intro)
    const ctx = gsap.context(() => {
      // 1) pin intro words on left and move out on scroll
      ScrollTrigger.create({
        trigger: pinSectionRef.current,
        start: "top top",
        end: "+=1200",
        pin: true,
        scrub: true,
      });

      gsap.to(".mcWords", {
        x: -500,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: pinSectionRef.current,
          start: "top top",
          end: "+=700",
          scrub: true,
        },
      });

      // 2) Big MIRACLE CREATIONS marquee (right -> left) on scroll
      gsap.to(marqueeRef.current, {
        xPercent: -60,
        ease: "none",
        scrollTrigger: {
          trigger: ".marqueeSection",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, pinSectionRef);

    return () => ctx.revert();
  }, [introDone]);

  return (
    <>
      {/* Inline CSS (so you don't need to edit globals.css) */}
      <style jsx global>{`
        body {
          margin: 0;
          background: #0a0a0a;
          color: #ffffff;
          overflow-x: hidden;
        }

        /* INTRO */
        .introWrap {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 90px;
          pointer-events: none;
        }

        .brandCenter {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 14px;
          letter-spacing: 6px;
          text-transform: uppercase;
          opacity: 0;
        }

        .mcWords {
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-size: 58px;
          line-height: 0.95;
          text-transform: uppercase;
          font-weight: 900;
          color: #ff0000;
          letter-spacing: -1px;
          will-change: transform;
        }

        .mcWord {
          opacity: 0;
          will-change: transform, opacity;
        }

        /* PIN SECTION */
        .pinSection {
          min-height: 140vh;
          display: flex;
          align-items: center;
          padding: 0 60px;
        }

        /* MARQUEE SECTION */
        .marqueeSection {
          padding: 180px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          overflow: hidden;
        }

        .bigMarquee {
          white-space: nowrap;
          font-size: 140px;
          font-weight: 900;
          letter-spacing: -4px;
          text-transform: uppercase;
          padding-left: 100vw;
          will-change: transform;
        }

        .section {
          padding: 120px 60px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }

        .section h2 {
          margin: 0 0 14px;
          font-size: 44px;
          letter-spacing: -1px;
        }

        .section p {
          margin: 0;
          opacity: 0.8;
          font-size: 18px;
          max-width: 700px;
        }

        @media (max-width: 768px) {
          .pinSection {
            padding: 0 18px;
          }
          .mcWords {
            font-size: 44px !important;
          }
          .bigMarquee {
            font-size: 72px;
          }
          .section {
            padding: 80px 18px;
          }
        }
      `}</style>

      {/* INTRO OVERLAY */}
      {!introDone && (
        <div className="introWrap" ref={introWrapRef}>
          <div className="brandCenter" ref={brandRef}>
            MIRACLE CREATIONS
          </div>

          <div className="mcWords" ref={wordsRef}>
            <div className="mcWord">INNOVATION</div>
            <div className="mcWord">CREATIVITY</div>
            <div className="mcWord">IDEAS</div>
            <div className="mcWord">TECHNOLOGY</div>
            <div className="mcWord">COMMITMENT</div>
          </div>
        </div>
      )}

      {/* AFTER INTRO CONTENT */}
      {introDone && (
        <>
          {/* Pinned / scroll-away left text section */}
          <section className="pinSection" ref={pinSectionRef}>
            <div className="mcWords">
              <div className="mcWord" style={{ opacity: 1, transform: "none" }}>
                INNOVATION
              </div>
              <div className="mcWord" style={{ opacity: 1, transform: "none" }}>
                CREATIVITY
              </div>
              <div className="mcWord" style={{ opacity: 1, transform: "none" }}>
                IDEAS
              </div>
              <div className="mcWord" style={{ opacity: 1, transform: "none" }}>
                TECHNOLOGY
              </div>
              <div className="mcWord" style={{ opacity: 1, transform: "none" }}>
                COMMITMENT
              </div>
            </div>
          </section>

          {/* Horizontal marquee like Wonjyou */}
          <section className="marqueeSection">
            <div className="bigMarquee" ref={marqueeRef}>
              <span>MIRACLE CREATIONS • MIRACLE CREATIONS • MIRACLE CREATIONS • </span>
              <span>MIRACLE CREATIONS • MIRACLE CREATIONS • MIRACLE CREATIONS • </span>
            </div>
          </section>

          {/* Normal site sections */}
          <section className="section">
            <h2>Services</h2>
            <p>Branding • Social Media • Ads • Websites • Printing</p>
          </section>

          <section className="section">
            <h2>Work</h2>
            <p>Here you can add your best projects / portfolio.</p>
          </section>

          <section className="section">
            <h2>Contact</h2>
            <p>hello@miraclecreations.in</p>
          </section>
        </>
      )}
    </>
  );
}
