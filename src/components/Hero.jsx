import { useState, useEffect, useRef } from "react";
import { useGsapHeroEntrance } from "../hooks/useGsap";

const WORDS = ["Developer.", "Builder.", "Trainer.", "Designer."];

export default function Hero() {
  const [tick, setTick] = useState(0);
  const [key,  setKey]  = useState(0);
  const containerRef    = useRef(null);

  useGsapHeroEntrance(containerRef);

  useEffect(() => {
    const t = setInterval(() => {
      setTick((n) => n + 1);
      setKey((k) => k + 1);
    }, 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-svh bg-dark flex flex-col justify-center px-6 md:px-12 pt-24 pb-10 overflow-hidden"
    >
      {/* ambient glow */}
      <div
        className="absolute top-0 right-0 w-2/3 h-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 75% 40%, rgba(200,241,53,0.06) 0%, transparent 60%)" }}
        aria-hidden="true"
      />

      {/* top-right meta */}
      <div className="absolute top-24 right-6 md:right-12 hidden md:flex flex-col items-end font-mono text-[10px] text-muted tracking-wide leading-loose">
        <span>Indonesia, Bekasi</span>
        <span>ibnuformal@gmail.com</span>
        <span>+62 813 2409 0457</span>
      </div>

      {/* main copy  vertically centered */}
      <div className="flex flex-col gap-6 md:gap-8">
        <p
          data-hero-label
          className="font-mono text-[10px] tracking-widest uppercase text-accent opacity-0"
        >
          Fullstack &amp; Mobile Developer
        </p>

        <div>
          <h1
            data-hero-name
            className="font-display font-black leading-[0.88] tracking-tighter text-white opacity-0"
            style={{ fontSize: "clamp(4rem, 13vw, 11rem)" }}
          >
            Ibnu
          </h1>

          <div className="overflow-hidden" aria-live="polite">
            <span
              data-hero-role
              key={key}
              className="inline-block font-display font-black leading-[0.88] tracking-tighter text-accent opacity-0"
              style={{
                fontSize: "clamp(4rem, 13vw, 11rem)",
                animation: key > 0 ? "slideUp 0.5s cubic-bezier(0.16,1,0.3,1) both" : "none",
              }}
            >
              {WORDS[tick % WORDS.length]}
            </span>
          </div>
        </div>

        {/* bottom row */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mt-2">
          <p
            data-hero-desc
            className="font-mono text-muted leading-relaxed max-w-xs opacity-0"
            style={{ fontSize: "clamp(11px, 1.2vw, 13px)" }}
          >
            3+ years building reliable digital products  from Flutter apps
            to Laravel systems. Clean code. Good architecture.
          </p>

          <div data-hero-stats className="flex gap-8 shrink-0">
            {[
              { n: "5+",   l: "Client Projects" },
              { n: "8+",   l: "IT Trainings" },
              { n: "100+", l: "Students" },
            ].map((s) => (
              <div key={s.n} className="flex flex-col gap-0.5 sm:items-end opacity-0">
                <span
                  className="font-display font-black text-white leading-none"
                  style={{ fontSize: "clamp(22px, 3vw, 34px)" }}
                >
                  {s.n}
                </span>
                <span className="font-mono text-[9px] text-muted tracking-widest uppercase">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <div
        data-hero-scroll
        className="hidden md:flex absolute bottom-8 left-1/2 flex-col items-center gap-1.5 opacity-0"
        style={{ transform: "translateX(-50%)", animation: "bounceSlow 2s ease-in-out infinite 1.5s" }}
        aria-hidden="true"
      >
        <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, transparent, #C8F135)" }} />
        <span className="font-mono text-[9px] text-muted tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}