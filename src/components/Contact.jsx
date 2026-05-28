import { useRef } from "react";
import { useGsapFadeUp, useGsapStagger } from "../hooks/useGsap";
import { contactLinks } from "../data";

export default function Contact() {
  const ref = useRef(null);
  useGsapFadeUp(ref, "[data-fade]", { stagger: 0.1 });
  useGsapStagger(ref, "[data-link]", { stagger: 0.08, y: 20, start: "top 82%" });

  return (
    <section id="contact" ref={ref}
      className="bg-accent px-6 md:px-16 py-24 md:py-32 min-h-[55vh] flex flex-col justify-center">
      <p data-fade className="font-mono text-[10px] tracking-widest2 uppercase text-dark/50 mb-4 opacity-0">
        / Contact
      </p>
      <h2 data-fade
        className="font-display font-black tracking-tighter text-dark mb-10 md:mb-14 opacity-0"
        style={{ fontSize: "clamp(2.8rem, 9vw, 7.5rem)", lineHeight: 0.92 }}>
        Let&apos;s build<br />something.
      </h2>

      <div className="flex flex-col sm:flex-row flex-wrap gap-3">
        {contactLinks.map((c) => (
          <a
            key={c.label}
            data-link
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/[0.08] hover:bg-black/[0.17] transition-colors duration-200 rounded px-5 py-4 flex flex-col gap-1 opacity-0 cursor-none"
            data-hover
          >
            <span className="font-mono text-[9px] tracking-widest uppercase text-dark/50">{c.label}</span>
            <span className="font-display font-bold text-dark" style={{ fontSize: "clamp(12px, 1.5vw, 15px)" }}>
              {c.value}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}