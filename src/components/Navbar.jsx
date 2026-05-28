import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const NAV_LINKS = ["Home", "Projects", "Skills", "Training", "Contact"];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const navRef    = useRef(null);
  const menuRef   = useRef(null);
  const linesRef  = useRef([]);

  // entrance
  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  // menu open/close with GSAP
  useEffect(() => {
    if (!menuRef.current) return;
    if (menuOpen) {
      gsap.set(menuRef.current, { display: "flex" });
      gsap.fromTo(menuRef.current,
        { clipPath: "inset(0 0 100% 0)" },
        { clipPath: "inset(0 0 0% 0)", duration: 0.6, ease: "power4.inOut" }
      );
      gsap.fromTo("[data-menu-link]",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.07, duration: 0.5, ease: "power3.out", delay: 0.2 }
      );
    } else {
      gsap.to(menuRef.current,
        { clipPath: "inset(0 0 100% 0)", duration: 0.5, ease: "power4.inOut",
          onComplete: () => gsap.set(menuRef.current, { display: "none" }) }
      );
    }
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, menuOpen ? 500 : 0);
  };

  return (
    <>
      <nav
        ref={navRef}
        style={{ opacity: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-400 ${
          scrolled ? "bg-dark/90 backdrop-blur-md border-b border-border" : ""
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => handleNav("home")}
          className="font-display font-black text-base tracking-tighter text-white cursor-none z-[110] relative"
          data-hover
        >
          IBNU<span className="text-accent">.</span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => handleNav(l.toLowerCase())}
              className="font-mono text-[11px] tracking-widest uppercase text-white/40 hover:text-white transition-colors duration-200 cursor-none"
              data-hover
            >
              {l}
            </button>
          ))}
        </div>

        {/* Burger  clou.ch style: top-right, two lines morph to X */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="relative z-[110] flex flex-col justify-center items-end gap-[6px] w-10 h-10 cursor-none"
          data-hover
        >
          <span
            ref={(el) => (linesRef.current[0] = el)}
            className="block h-[1.5px] bg-white transition-all duration-400 origin-right"
            style={{
              width: menuOpen ? "22px" : "22px",
              transform: menuOpen ? "translateY(3.75px) rotate(-45deg)" : "none",
            }}
          />
          <span
            ref={(el) => (linesRef.current[1] = el)}
            className="block h-[1.5px] bg-white transition-all duration-400 origin-right"
            style={{
              width: menuOpen ? "22px" : "14px",
              transform: menuOpen ? "translateY(-3.75px) rotate(45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Full-screen menu overlay */}
      <div
        ref={menuRef}
        style={{ display: "none", clipPath: "inset(0 0 100% 0)" }}
        className="fixed inset-0 bg-dark z-[100] flex flex-col justify-end px-6 md:px-12 pb-16 pt-28"
      >
        {/* big nav links */}
        <div className="flex flex-col gap-2 mb-16">
          {NAV_LINKS.map((l, i) => (
            <button
              key={l}
              data-menu-link
              onClick={() => handleNav(l.toLowerCase())}
              className="font-display font-black tracking-tighter text-left text-white hover:text-accent transition-colors duration-200 leading-none opacity-0"
              style={{ fontSize: "clamp(2.8rem, 9vw, 7rem)" }}
            >
              {l}
            </button>
          ))}
        </div>

        {/* bottom meta */}
        <div data-menu-link className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-t border-border pt-6 opacity-0">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[10px] text-muted tracking-widest uppercase">Contact</span>
            <a href="mailto:ibnuformal@gmail.com" className="font-mono text-[12px] text-white hover:text-accent transition-colors">ibnuformal@gmail.com</a>
            <a href="https://wa.me/6281324090457" className="font-mono text-[12px] text-white hover:text-accent transition-colors">+62 813 2409 0457</a>
          </div>
          <div className="flex flex-col gap-1 sm:items-end">
            <span className="font-mono text-[10px] text-muted tracking-widest uppercase">Socials</span>
            <a href="https://github.com/IbnuMuhadzdzib" target="_blank" rel="noopener noreferrer" className="font-mono text-[12px] text-white hover:text-accent transition-colors">GitHub</a>
            <a href="https://instagram.com/consometasky" target="_blank" rel="noopener noreferrer" className="font-mono text-[12px] text-white hover:text-accent transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </>
  );
}