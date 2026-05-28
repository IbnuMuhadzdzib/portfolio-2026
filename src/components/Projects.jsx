import { useState, useRef } from "react";
import { useGsapFadeUp, useGsapStagger } from "../hooks/useGsap";
import ProjectModal from "./ProjectModal";
import { projects } from "../data";

function Arrow({ active }) {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7h10M8 3l4 4-4 4"
        stroke={active ? "#C8F135" : "#555"}
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Projects() {
  const [hovered,  setHovered]  = useState(null);
  const [selected, setSelected] = useState(null);
  const headerRef = useRef(null);
  const listRef   = useRef(null);

  useGsapFadeUp(headerRef, "[data-fade]", { stagger: 0.1 });
  useGsapStagger(listRef, "[data-row]", { stagger: 0.05, y: 28 });

  return (
    <section id="projects" className="bg-dark px-6 md:px-16 py-24 md:py-32">
      {/* Header */}
      <div ref={headerRef} className="flex justify-between items-end mb-12 md:mb-16">
        <div>
          <p data-fade className="font-mono text-[10px] tracking-widest2 uppercase text-accent mb-4 opacity-0">
            / Projects
          </p>
          <h2 data-fade
            className="font-display font-black tracking-tighter text-white opacity-0"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 0.95 }}>
            Selected<br />Work.
          </h2>
        </div>
        <span data-fade className="font-mono text-[11px] text-muted pb-1 opacity-0">
          {projects.length} Projects
        </span>
      </div>

      {/* List */}
      <div ref={listRef}>
        {projects.map((p) => (
          <div
            key={p.id}
            data-row
            className={`border-t py-5 md:py-6 grid gap-3 md:gap-6 items-center transition-colors duration-200 cursor-pointer opacity-0 group
              ${hovered === p.id ? "border-[#2e2e2e]" : "border-border"}`}
            style={{ gridTemplateColumns: "40px 1fr 36px" }}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setSelected(p)}
            data-hover
          >
            <span className="font-mono text-[10px] text-muted">{p.id}</span>

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3
                  className="font-display font-bold tracking-tight transition-colors duration-200"
                  style={{
                    fontSize: "clamp(0.9rem, 2vw, 1.3rem)",
                    color: hovered === p.id ? "#C8F135" : "#ffffff",
                  }}
                >
                  {p.title}
                </h3>
                {p.highlight && (
                  <span className="font-mono text-[9px] bg-accent text-dark px-2 py-0.5 rounded-sm font-bold tracking-wide uppercase">
                    Featured
                  </span>
                )}
                <span className="font-mono text-[10px] text-muted ml-auto hidden sm:block">{p.year}</span>
              </div>

              {/* expandable desc on hover */}
              <p
                className="font-mono text-[11px] text-muted leading-relaxed overflow-hidden transition-all duration-500"
                style={{
                  maxHeight: hovered === p.id ? "60px" : "0",
                  opacity: hovered === p.id ? 1 : 0,
                  marginBottom: hovered === p.id ? "8px" : "0",
                  transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                {p.shortDesc}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="font-mono text-[9px] text-muted border border-border-2 px-2 py-0.5 rounded-sm tracking-wide">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* arrow */}
            <div
              className="w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300"
              style={{
                borderColor: hovered === p.id ? "#C8F135" : "#2a2a2a",
                transform: hovered === p.id ? "rotate(-45deg)" : "rotate(0deg)",
              }}
            >
              <Arrow active={hovered === p.id} />
            </div>
          </div>
        ))}
        <div className="border-t border-border" />
      </div>

      {/* Click hint */}
      <p className="font-mono text-[10px] text-muted/40 mt-4 tracking-wide">
        Click any project to view details
      </p>

      {/* Modal */}
      {selected && (
        <ProjectModal
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}