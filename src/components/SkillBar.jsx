// SkillBar renders the DOM  animation driven by useGsapSkillBars in Skills.jsx
export default function SkillBar({ label, level }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-mono text-[12px] text-white">{label}</span>
        <span className="font-mono text-[11px] text-muted">{level}%</span>
      </div>
      <div className="h-[2px] bg-[#1c1c1c] rounded-full overflow-hidden">
        <div
          data-bar
          data-level={level}
          className="h-full bg-accent rounded-full"
          style={{ width: "0%" }}
        />
      </div>
    </div>
  );
}