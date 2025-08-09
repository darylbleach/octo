"use client";

const mockCycle = {
  currentPhase: "Follicular",
  energy: "High",
};

const recommendations = [
  {
    title: "HIIT Cardio",
    difficulty: "Hard",
    why: "Your energy is highest in the follicular phase. HIIT maximizes gains now!",
  },
  {
    title: "Strength Training",
    difficulty: "Medium",
    why: "Build muscle efficiently during this phase.",
  },
  {
    title: "Yoga Flow",
    difficulty: "Easy",
    why: "Great for recovery and flexibility.",
  },
];

export default function ActivityRecommendations() {
  return (
    <div className="bg-white rounded-2xl shadow p-6 max-w-3xl mx-auto mb-12">
      <div className="flex items-center gap-4 mb-4">
        <span className="text-lg font-semibold text-sage-500">Cycle Phase:</span>
        <span className="px-3 py-1 rounded-full bg-sage-100 text-sage-700 font-bold text-base">
          {mockCycle.currentPhase}
        </span>
        <span className="ml-8 text-lg font-semibold text-pink-500">Energy:</span>
        <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700 font-bold text-base">
          {mockCycle.energy}
        </span>
      </div>
      <h3 className="text-xl font-bold text-neutral-900 mb-4">Recommended Activities</h3>
      <div className="grid grid-cols-3 gap-6">
        {recommendations.map((rec) => (
          <div key={rec.title} className="bg-sage-50 rounded-xl p-4 flex flex-col gap-2">
            <span className="text-lg font-semibold text-pink-500">{rec.title}</span>
            <span className="text-xs font-bold px-2 py-1 rounded-full bg-pink-100 text-pink-700 w-fit">{rec.difficulty}</span>
            <span className="text-sm text-neutral-700">Why: {rec.why}</span>
            <button className="mt-4 px-8 py-3 rounded-full bg-pink-500 text-white font-bold text-base shadow-lg hover:bg-pink-600 transition-all">Book / Schedule</button>
          </div>
        ))}
      </div>
    </div>
  );
} 