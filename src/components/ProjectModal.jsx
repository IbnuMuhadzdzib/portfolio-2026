import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ProjectModal({ project, onClose }) {
  const overlayRef = useRef(null);
  const panelRef   = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 })
      .fromTo(panelRef.current,
        { y: "100%", opacity: 0 },
        { y: "0%",   opacity: 1, duration: 0.55, ease: "power4.out" },
        "-=0.15"
      )
      .fromTo("[data-modal-item]",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.055 },
        "-=0.2"
      );
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleClose = () => {
    const tl = gsap.timeline({ defaults: { ease: "power3.in" }, onComplete: onClose });
    tl.to("[data-modal-item]", { opacity: 0, y: -14, duration: 0.25, stagger: 0.03 })
      .to(panelRef.current, { y: "100%", opacity: 0, duration: 0.4 }, "-=0.1")
      .to(overlayRef.current, { opacity: 0, duration: 0.25 }, "-=0.15");
  };

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-end md:items-center justify-center">
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className="relative z-10 bg-[#111] w-full md:max-w-2xl max-h-[90vh] rounded-t-2xl md:rounded-2xl overflow-y-auto border border-border"
        style={{ scrollbarWidth: "none" }}
      >
        {/* Sticky header */}
        <div
          data-modal-item
          className="sticky top-0 z-20 bg-[#111]/95 backdrop-blur-sm border-b border-border flex items-center justify-between px-6 md:px-8 py-4"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-muted">{project.id}</span>
            <span className="w-px h-3 bg-border-2" />
            <span className="font-mono text-[10px] text-accent tracking-widest uppercase">{project.type}</span>
          </div>
          <button
            onClick={handleClose}
            data-hover
            className="w-8 h-8 rounded-full border border-border-2 flex items-center justify-center text-muted hover:text-white hover:border-accent transition-colors duration-200 cursor-none"
            aria-label="Close"
          >
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
              <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 md:px-8 py-8 flex flex-col gap-8">

          {/* Title + year */}
          <div data-modal-item>
            <h2
              className="font-display font-black tracking-tighter text-white mb-1.5 leading-none"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
            >
              {project.title}
            </h2>
            <p className="font-mono text-[10px] text-muted">{project.year}</p>
          </div>

          {/* Description */}
          <p data-modal-item className="font-mono text-[12px] md:text-[13px] text-[#aaa] leading-[1.9]">
            {project.desc}
          </p>

          {/* Highlights */}
          <div data-modal-item>
            <p className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4">/ Highlights</p>
            <ul className="flex flex-col gap-3">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span className="font-mono text-[12px] text-[#ccc] leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div data-modal-item>
            <p className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4">/ Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[11px] text-white/80 border border-border-2 hover:border-accent hover:text-accent transition-colors duration-200 px-3 py-1.5 rounded-sm tracking-wide"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Action row */}
          <div data-modal-item className="flex items-center justify-between pt-2 pb-4 border-t border-border">
            <button
              onClick={handleClose}
              data-hover
              className="font-mono text-[11px] text-muted hover:text-white transition-colors duration-200 tracking-widest uppercase cursor-none flex items-center gap-2"
            >
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M12 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back
            </button>

            {/* GitHub link */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                className="group flex items-center gap-2 font-mono text-[11px] text-muted hover:text-accent transition-colors duration-200 tracking-widest uppercase cursor-none"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                </svg>
                View on GitHub
                <svg className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}