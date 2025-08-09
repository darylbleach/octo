"use client";
import { useEffect, useRef } from "react";

const progress = 72; // percent
const level = 4;
const levelLabel = "Wellness Explorer";

export default function Gamification() {
  const circleRef = useRef<SVGCircleElement>(null);
  useEffect(() => {
    if (circleRef.current) {
      const radius = circleRef.current.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      circleRef.current.style.strokeDasharray = `${circumference}`;
      circleRef.current.style.strokeDashoffset = `${circumference - (progress / 100) * circumference}`;
    }
  }, []);
  return (
    <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center max-w-xs mx-auto mb-12">
      <h3 className="text-xl font-bold text-neutral-900 mb-4">Daily Progress</h3>
      <div className="relative w-32 h-32 mb-4">
        <svg width="128" height="128">
          <circle
            cx="64"
            cy="64"
            r="56"
            fill="none"
            stroke="#F3E8EE"
            strokeWidth="12"
          />
          <circle
            ref={circleRef}
            cx="64"
            cy="64"
            r="56"
            fill="none"
            stroke="#F472B6"
            strokeWidth="12"
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.6s" }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-pink-500">{progress}%</span>
      </div>
      <div className="text-lg font-semibold text-sage-500 mb-2">Level {level}: {levelLabel}</div>
      <button className="mt-4 px-8 py-3 rounded-full bg-pink-500 text-white font-bold text-base shadow-lg hover:bg-pink-600 transition-all">Share Milestone</button>
    </div>
  );
} 