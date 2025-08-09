"use client";
export default function PersonalizedCard() {
  // Mock data
  const score = 82;
  const message = "You're on track! Keep up the great work.";
  const nextAction = "Try a 10-min yoga flow";
  return (
    <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center mb-2">
      <div className="text-3xl font-bold text-pink-500 mb-1">{score}</div>
      <div className="text-sm text-neutral-500 mb-2">Daily Wellness Score</div>
      <div className="text-base text-neutral-900 mb-4">{message}</div>
      <button className="px-8 py-3 rounded-full bg-sage-500 text-white font-bold text-base shadow-lg hover:bg-sage-600 transition-all">
        Next Best Action: {nextAction}
      </button>
    </div>
  );
} 