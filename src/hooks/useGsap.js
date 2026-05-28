import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Fade + slide-up a group of elements on scroll.
 * @param {string} selector  - CSS selector relative to containerRef
 * @param {object} options
 */
export function useGsapFadeUp(containerRef, selector = "[data-fade]", options = {}) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray(selector, containerRef.current);
      if (!els.length) return;

      gsap.fromTo(
        els,
        { opacity: 0, y: options.y ?? 48 },
        {
          opacity: 1,
          y: 0,
          duration: options.duration ?? 0.9,
          ease: options.ease ?? "power3.out",
          stagger: options.stagger ?? 0.08,
          scrollTrigger: {
            trigger: containerRef.current,
            start: options.start ?? "top 82%",
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);
}

/**
 * Stagger children on scroll.
 */
export function useGsapStagger(containerRef, selector = "[data-stagger]", options = {}) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray(selector, containerRef.current);
      if (!els.length) return;

      gsap.fromTo(
        els,
        { opacity: 0, y: options.y ?? 32, scale: options.scale ?? 1 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: options.duration ?? 0.7,
          ease: "power3.out",
          stagger: options.stagger ?? 0.06,
          scrollTrigger: {
            trigger: containerRef.current,
            start: options.start ?? "top 80%",
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);
}

/**
 * Animate skill bar widths on scroll.
 * Each bar element needs data-level="85" attribute.
 */
export function useGsapSkillBars(containerRef) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const bars = gsap.utils.toArray("[data-bar]", containerRef.current);
      if (!bars.length) return;

      bars.forEach((bar, i) => {
        const level = bar.dataset.level ?? 0;
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: `${level}%`,
            duration: 1.4,
            ease: "power3.out",
            delay: i * 0.08,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              once: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);
}

/**
 * Horizontal marquee / text scroll (hero label).
 */
export function useGsapMarquee(ref) {
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        xPercent: -50,
        ease: "none",
        duration: 18,
        repeat: -1,
      });
    }, ref);
    return () => ctx.revert();
  }, []);
}

/**
 * Parallax vertical offset on scroll.
 */
export function useGsapParallax(ref, speed = 0.4) {
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        yPercent: speed * 30,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);
}

/**
 * Hero timeline animation  runs once on mount.
 */
export function useGsapHeroEntrance(containerRef) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo("[data-hero-label]", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, 0.3)
        .fromTo("[data-hero-name]",  { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.9 }, 0.5)
        .fromTo("[data-hero-role]",  { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.9 }, 0.65)
        .fromTo("[data-hero-desc]",  { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7 }, 0.9)
        .fromTo("[data-hero-stats] > *", { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.6 }, 1.0)
        .fromTo("[data-hero-scroll]", { opacity: 0 }, { opacity: 1, duration: 0.5 }, 1.3);
    }, containerRef);

    return () => ctx.revert();
  }, []);
}

/**
 * Timeline dots  draw line + pop dots sequentially.
 */
export function useGsapTimeline(containerRef) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const line = containerRef.current?.querySelector("[data-timeline-line]");
      const dots = gsap.utils.toArray("[data-timeline-dot]", containerRef.current);
      const items = gsap.utils.toArray("[data-timeline-item]", containerRef.current);

      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0, transformOrigin: "top center" },
          {
            scaleY: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: { trigger: containerRef.current, start: "top 75%", once: true },
          }
        );
      }

      dots.forEach((dot, i) => {
        gsap.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: "back.out(2)",
            delay: i * 0.15,
            scrollTrigger: { trigger: containerRef.current, start: "top 75%", once: true },
          }
        );
      });

      gsap.fromTo(
        items,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: containerRef.current, start: "top 75%", once: true },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);
}