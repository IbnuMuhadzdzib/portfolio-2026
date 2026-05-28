import { useRef } from "react";
import { useGsapFadeUp, useGsapStagger } from "../hooks/useGsap";
import { skills, skillCategories, certifications } from "../data";

const CATEGORY_COLORS = {
  Frontend: "border-accent/50 text-accent",
  Mobile:   "border-blue-400/40 text-blue-300",
  Backend:  "border-purple-400/40 text-purple-300",
  Database: "border-orange-400/40 text-orange-300",
  Design:   "border-pink-400/40 text-pink-300",
  Tools:    "border-white/20 text-white/70",
};

export default function Skills() {
  const leftRef  = useRef(null);
  const rightRef = useRef(null);

  useGsapFadeUp(leftRef,  "[data-fade]",  { stagger: 0.08 });
  useGsapStagger(leftRef, "[data-skill]", { stagger: 0.04, y: 16, scale: 0.95, start: "top 78%" });
  useGsapFadeUp(rightRef, "[data-fade]",  { stagger: 0.08, start: "top 80%" });
  useGsapStagger(rightRef, "[data-cert]", { stagger: 0.06, y: 16, start: "top 78%" });

  return (
    <section id="skills" className="bg-dark-2 px-6 md:px-12 py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">

        {/* ── Skills ── */}
        <div ref={leftRef}>
          <p data-fade className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 opacity-0">
            / Skills
          </p>
          <h2 data-fade
            className="font-display font-black tracking-tighter text-white mb-3 opacity-0"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1 }}>
            Tech Stack.
          </h2>
          <p data-fade className="font-mono text-[11px] text-muted leading-relaxed mb-10 opacity-0">
            Technologies I work with daily  always learning, always improving.
          </p>

          {/* grouped by category */}
          <div className="flex flex-col gap-6">
            {skillCategories.map((cat) => {
              const catSkills = skills.filter((s) => s.category === cat);
              if (!catSkills.length) return null;
              return (
                <div key={cat}>
                  <p className="font-mono text-[9px] tracking-widest uppercase text-muted mb-3">{cat}</p>
                  <div className="flex flex-wrap gap-2">
                    {catSkills.map((s) => (
                      <span
                        key={s.label}
                        data-skill
                        className={`opacity-0 font-mono text-[11px] border px-3 py-1.5 rounded-sm tracking-wide transition-colors duration-200 hover:bg-white/5 ${CATEGORY_COLORS[cat]}`}
                      >
                        {s.label}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Recognition ── */}
        <div ref={rightRef}>
          <p data-fade className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4 opacity-0">
            / Awards &amp; Certs
          </p>
          <h2 data-fade
            className="font-display font-black tracking-tighter text-white mb-3 opacity-0"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1 }}>
            Recognition.
          </h2>
          <p data-fade className="font-mono text-[11px] text-muted leading-relaxed mb-10 opacity-0">
            Verified credentials  click any to view the original source.
          </p>

          <div>
            {certifications.map((c, i) => (
              <a
                key={i}
                data-cert
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                className="group opacity-0 flex justify-between items-start gap-4 py-4 border-b border-border hover:border-accent/40 transition-colors duration-200 cursor-none"
              >
                <span className="flex gap-3 items-start">
                  <span className="shrink-0 mt-0.5">{c.icon}</span>
                  <span className="font-mono text-[11px] text-[#ccc] group-hover:text-white transition-colors duration-200 leading-relaxed">
                    {c.label}
                  </span>
                </span>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="font-mono text-[10px] text-muted whitespace-nowrap">{c.date}</span>
                  {/* external link icon */}
                  <svg
                    className="w-3 h-3 text-muted group-hover:text-accent transition-colors duration-200 shrink-0"
                    viewBox="0 0 12 12" fill="none"
                  >
                    <path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}