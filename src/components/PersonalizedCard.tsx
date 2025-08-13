"use client";
export default function PersonalizedCard() {
  // Mock data
  const score = 82;
  const message = "You're on track! Keep up the great work.";
  const nextAction = "Try a 10-min yoga flow";
  
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-4 md:p-6">
      <div className="text-center space-y-4">
        {/* Score section */}
        <div className="space-y-2">
          <div className="text-4xl md:text-5xl font-bold text-pink-500">{score}</div>
          <div className="text-sm md:text-base text-neutral-500 font-medium">Daily Wellness Score</div>
        </div>
        
        {/* Message */}
        <div className="text-base md:text-lg text-neutral-900 leading-relaxed max-w-sm mx-auto">
          {message}
        </div>
        
        {/* Action section */}
        <div className="px-6 md:px-8 py-3 md:py-4 rounded-full bg-sage-500 text-white font-semibold text-sm md:text-base shadow-md">
          Next Best Action: {nextAction}
        </div>
      </div>
    </div>
  );
} 