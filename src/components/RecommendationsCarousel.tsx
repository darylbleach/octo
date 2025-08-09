"use client";
const recommendations = [
  { title: "Morning Yoga", type: "Activity", desc: "Start your day with a gentle flow." },
  { title: "Berry Smoothie", type: "Nutrition", desc: "Try this antioxidant-rich recipe." },
  { title: "Mindful Minute", type: "Wellness Tip", desc: "Take 60 seconds to breathe deeply." },
];

export default function RecommendationsCarousel() {
  return (
    <div className="mt-4 bg-pink-50 rounded-xl p-6 shadow">
      <h3 className="text-2xl font-bold text-pink-500 mb-4">Today&apos;s Recommendations</h3>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {recommendations.map((rec) => (
          <div key={rec.title} className="min-w-[180px] bg-white rounded-xl shadow p-4 flex flex-col gap-2">
            <span className="text-xs font-bold text-sage-400">{rec.type}</span>
            <span className="text-lg font-semibold text-neutral-900">{rec.title}</span>
            <span className="text-sm text-neutral-500">{rec.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 