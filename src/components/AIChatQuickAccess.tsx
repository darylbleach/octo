"use client";
import { MessageCircle } from "lucide-react";

export default function AIChatQuickAccess() {
  return (
    <button className="flex flex-col items-center justify-center bg-pink-500 rounded-xl shadow-lg p-6 min-w-[140px] hover:bg-pink-600 transition-all">
      <MessageCircle size={32} className="text-white mb-2" />
      <span className="text-base font-bold text-white">AI Advisor</span>
    </button>
  );
} 