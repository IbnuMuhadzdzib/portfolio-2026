import { useRef } from "react";
import { useGsapFadeUp, useGsapStagger } from "../hooks/useGsap";

const CARDS = [
  { label: "Education",  value: "SMK IDN Boarding School" },
  { label: "Status",     value: "Freelancing + Co-Founder" },
  { label: "Location",   value: "Bekasi, Indonesia" },
  { label: "Available",  value: "For Projects or Contract" },
];

export default function About() {
  const ref = useRef(null);
  useGsapFadeUp(ref, "[data-fade]", { stagger: 0.1 });
  useGsapStagger(ref, "[data-card]", { stagger: 0.07, y: 24, scale: 0.97 });

  return (
    <section id="about" ref={ref} className="bg-accent px-6 md:px-16 py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        <div>
          <p data-fade className="font-mono text-[10px] tracking-widest2 uppercase text-dark/60 mb-4 opacity-0">
            / About Me
          </p>
          <h2 data-fade
            className="font-display font-black tracking-tighter text-dark mb-6 opacity-0"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1 }}>
            I build things<br />that work.
          </h2>
          <p data-fade
            className="font-mono text-dark/70 leading-[1.9] opacity-0"
            style={{ fontSize: "clamp(11px, 1.3vw, 13px)" }}>
            Fullstack &amp; Mobile Developer from Bekasi. Currently studying at SMK IDN Boarding School
            Bogor while actively freelancing, co-founding Codeat  an online coding education platform
             and training developers across Indonesia and the Philippines.
            Clean code, good architecture, and experiences that don&apos;t confuse users.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {CARDS.map((c) => (
            <div
              key={c.label}
              data-card
              className="bg-black/[0.08] hover:bg-black/[0.15] transition-colors duration-200 rounded p-4 flex flex-col gap-1 opacity-0"
            >
              <span className="font-mono text-[9px] tracking-widest uppercase text-dark/50">{c.label}</span>
              <span className="font-display font-bold text-dark" style={{ fontSize: "clamp(12px, 1.4vw, 15px)" }}>
                {c.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}