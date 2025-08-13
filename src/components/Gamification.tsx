export default function Gamification() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-4 md:p-6">
      <div className="text-center space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-neutral-900">Daily Progress</h3>
        
        {/* Progress circle */}
        <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto">
          <svg width="100%" height="100%" viewBox="0 0 128 128">
            <circle
              cx="64"
              cy="64"
              r="56"
              fill="none"
              stroke="#F3E8EE"
              strokeWidth="12"
            />
            <circle
              cx="64"
              cy="64"
              r="56"
              fill="none"
              stroke="#F472B6"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray="351.86"
              strokeDashoffset="98.52"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-2xl md:text-3xl font-bold text-pink-500">
            72%
          </span>
        </div>
        
        {/* Level info */}
        <div className="space-y-2">
          <div className="text-base md:text-lg font-semibold text-sage-500">
            Level 4: Wellness Explorer
          </div>
          <div className="text-sm text-neutral-500">
            Keep going! You&apos;re doing great!
          </div>
        </div>
        
        {/* Action section */}
        <div className="px-6 md:px-8 py-3 rounded-full bg-pink-500 text-white font-semibold text-sm md:text-base shadow-md">
          Share Milestone
        </div>
      </div>
    </div>
  );
} 