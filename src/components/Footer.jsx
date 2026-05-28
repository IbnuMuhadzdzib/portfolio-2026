export default function Footer() {
  return (
    <footer className="bg-[#050505] px-6 md:px-16 py-5 flex flex-wrap justify-between items-center gap-2 border-t border-border">
      <span className="font-mono text-[10px] text-[#333] tracking-wide">
        © {new Date().getFullYear()} Ibnu Alif Muhadzdzib
      </span>
      <span className="font-mono text-[10px] text-[#333] tracking-wide">Bekasi, Indonesia</span>
    </footer>
  );
}