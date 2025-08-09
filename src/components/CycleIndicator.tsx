"use client";
const mockCycle = {
  currentPhase: "Follicular",
  dayInCycle: 8,
  avgCycleLength: 28,
};
const phaseColors: Record<string, string> = {
  Menstrual: "bg-pink-200 text-pink-700",
  Follicular: "bg-sage-200 text-sage-700",
  Ovulation: "bg-yellow-200 text-yellow-700",
  Luteal: "bg-neutral-200 text-neutral-700",
};
export default function CycleIndicator() {
  return (
    <div className="flex items-center gap-4 bg-white rounded-xl shadow p-4 mb-2">
      <span className={`px-3 py-1 rounded-full font-semibold text-sm ${phaseColors[mockCycle.currentPhase] || "bg-neutral-100 text-neutral-500"}`}>
        {mockCycle.currentPhase}
      </span>
      <span className="text-neutral-700 text-sm">Day {mockCycle.dayInCycle} of {mockCycle.avgCycleLength}</span>
    </div>
  );
} 