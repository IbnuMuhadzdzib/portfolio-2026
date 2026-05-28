// FadeIn is now handled by GSAP  this is a lightweight passthrough
// kept for structural compatibility; actual animation via useGsapFadeIn hook
export default function FadeIn({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}