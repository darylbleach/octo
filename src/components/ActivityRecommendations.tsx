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
    <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-4 md:p-6">
      {/* Cycle Phase and Energy - Mobile stacked, Desktop inline */}
      <div className="space-y-3 md:space-y-0 md:flex md:items-center md:gap-4 mb-6">
        <div className="flex items-center gap-2 md:gap-4">
          <span className="text-sm md:text-lg font-semibold text-sage-500">Cycle Phase:</span>
          <span className="px-3 py-1 rounded-full bg-sage-100 text-sage-700 font-bold text-sm md:text-base">
            {mockCycle.currentPhase}
          </span>
        </div>
        <div className="flex items-center gap-2 md:gap-4 md:ml-8">
          <span className="text-sm md:text-lg font-semibold text-pink-500">Energy:</span>
          <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700 font-bold text-sm md:text-base">
            {mockCycle.energy}
          </span>
        </div>
      </div>
      
      <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-4 text-center md:text-left">
        Recommended Activities
      </h3>
      
      {/* Mobile: Stacked layout */}
      <div className="space-y-4 md:hidden">
        {recommendations.map((rec) => (
          <div key={rec.title} className="bg-sage-50 rounded-xl p-4 border border-sage-100">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-pink-500">{rec.title}</h4>
                <span className="px-2 py-1 text-xs font-bold rounded-full bg-pink-100 text-pink-700">
                  {rec.difficulty}
                </span>
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed">{rec.why}</p>
              <div className="w-full px-6 py-3 rounded-full bg-pink-500 text-white font-semibold text-sm shadow-md text-center">
                Book / Schedule
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Desktop: Grid layout */}
      <div className="hidden md:grid md:grid-cols-3 md:gap-6">
        {recommendations.map((rec) => (
          <div key={rec.title} className="bg-sage-50 rounded-xl p-4 border border-sage-100 flex flex-col gap-2">
            <span className="text-lg font-semibold text-pink-500">{rec.title}</span>
            <span className="text-xs font-bold px-2 py-1 rounded-full bg-pink-100 text-pink-700 w-fit">{rec.difficulty}</span>
            <span className="text-sm text-neutral-700">Why: {rec.why}</span>
            <div className="mt-4 px-6 py-3 rounded-full bg-pink-500 text-white font-semibold text-sm shadow-md text-center">
              Book / Schedule
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 