import { useRef } from "react";
import { useGsapFadeUp, useGsapTimeline } from "../hooks/useGsap";
import { trainings } from "../data";

export default function Training() {
  const headerRef   = useRef(null);
  const timelineRef = useRef(null);

  useGsapFadeUp(headerRef, "[data-fade]", { stagger: 0.1 });
  useGsapTimeline(timelineRef);

  return (
    <section id="training" className="bg-dark px-6 md:px-16 py-24 md:py-32">
      {/* Header */}
      <div ref={headerRef}>
        <p data-fade className="font-mono text-[10px] tracking-widest2 uppercase text-accent mb-4 opacity-0">
          / IT Training
        </p>
        <h2 data-fade
          className="font-display font-black tracking-tighter text-white mb-4 opacity-0"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 0.95 }}>
          Training<br />Sessions.
        </h2>
        <p data-fade
          className="font-mono text-muted leading-relaxed max-w-lg mb-14 opacity-0"
          style={{ fontSize: "clamp(11px, 1.2vw, 13px)" }}>
          8+ sessions across Indonesia and the Philippines  100+ participants from
          high schools, boarding schools, colleges, and educators.
        </p>
      </div>

      {/* Timeline */}
      <div ref={timelineRef} className="relative pl-4 md:pl-10">
        {/* animated line */}
        <div
          data-timeline-line
          className="absolute left-0 top-0 bottom-0 w-px bg-border origin-top"
        />

        {trainings.map((t, i) => (
          <div
            key={i}
            data-timeline-item
            className="relative pb-8 pl-6 md:pl-10 grid gap-2 md:gap-6 opacity-0"
            style={{ gridTemplateColumns: "clamp(90px, 14vw, 140px) 1fr" }}
          >
            <div
              data-timeline-dot
              className="absolute -left-[5px] top-[5px] w-2.5 h-2.5 rounded-full bg-accent border-2 border-dark scale-0"
            />
            <span className="font-mono text-[10px] text-muted pt-0.5 tracking-wide">{t.year}</span>
            <div>
              <p className="font-display font-bold text-white mb-1"
                style={{ fontSize: "clamp(13px, 1.5vw, 16px)" }}>
                {t.place}
              </p>
              <p className="font-mono text-[11px] text-accent tracking-wide">{t.topic}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}