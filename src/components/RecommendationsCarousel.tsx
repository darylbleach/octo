"use client";
const recommendations = [
  { title: "Morning Yoga", type: "Activity", desc: "Start your day with a gentle flow." },
  { title: "Berry Smoothie", type: "Nutrition", desc: "Try this antioxidant-rich recipe." },
  { title: "Mindful Minute", type: "Wellness Tip", desc: "Take 60 seconds to breathe deeply." },
];

export default function RecommendationsCarousel() {
  return (
    <div className="bg-pink-50 rounded-2xl p-4 md:p-6 shadow-sm border border-pink-100">
      <h3 className="text-xl md:text-2xl font-bold text-pink-500 mb-4 text-center md:text-left">
        Today&apos;s Recommendations
      </h3>
      
      {/* Mobile: Stacked layout */}
      <div className="space-y-3 md:hidden">
        {recommendations.map((rec) => (
          <div key={rec.title} className="bg-white rounded-xl shadow-sm border border-neutral-100 p-4">
            <div className="space-y-2">
              <span className="inline-block px-2 py-1 text-xs font-bold text-sage-400 bg-sage-50 rounded-full">
                {rec.type}
              </span>
              <h4 className="text-base font-semibold text-neutral-900">{rec.title}</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">{rec.desc}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Desktop: Horizontal carousel */}
      <div className="hidden md:flex gap-4 overflow-x-auto pb-2">
        {recommendations.map((rec) => (
          <div key={rec.title} className="min-w-[200px] bg-white rounded-xl shadow-sm border border-neutral-100 p-4 flex flex-col gap-2">
            <span className="inline-block px-2 py-1 text-xs font-bold text-sage-400 bg-sage-50 rounded-full w-fit">
              {rec.type}
            </span>
            <h4 className="text-lg font-semibold text-neutral-900">{rec.title}</h4>
            <p className="text-sm text-neutral-600">{rec.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 