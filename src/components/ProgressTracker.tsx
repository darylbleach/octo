"use client";
import { Flame, Award } from "lucide-react";

const badges = [
  { icon: Award, label: "Cycle Sync Champion" },
  { icon: Award, label: "Consistency Queen" },
];

export default function ProgressTracker() {
  const streak = 7;
  return (
    <div className="flex flex-col items-center bg-white rounded-xl shadow p-4 min-w-[120px]">
      <div className="flex items-center gap-1 text-pink-500 font-bold text-lg mb-2">
        <Flame size={20} />
        {streak} day streak
      </div>
      <div className="flex gap-2 mt-2">
        {badges.map((badge) => (
          <div key={badge.label} className="flex flex-col items-center">
            <badge.icon size={20} className="text-sage-400" />
            <span className="text-xs text-neutral-500 mt-1">{badge.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 