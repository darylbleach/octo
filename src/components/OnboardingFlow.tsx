export default function OnboardingFlow() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-4 md:p-8 space-y-6 md:space-y-8">
      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs md:text-sm text-neutral-400">Step 1 of 5</span>
          <span className="text-xs md:text-sm text-pink-400 font-semibold">20%</span>
        </div>
        <div className="w-full h-2 bg-pink-100 rounded-full overflow-hidden">
          <div 
            className="h-2 bg-pink-400 transition-all duration-300"
            style={{ width: "20%" }}
          />
        </div>
      </div>
      
      {/* Question */}
      <div className="space-y-4 md:space-y-6">
        <label className="block text-base md:text-lg font-semibold text-neutral-900 mb-2 text-center md:text-left">
          What are your primary wellness goals?
        </label>
        
        <div className="grid grid-cols-2 gap-2 md:flex md:flex-wrap md:gap-3">
          <div className="px-3 py-2 md:px-4 md:py-2 rounded-full border font-medium text-xs md:text-sm bg-sage-400 text-white border-sage-400">
            Fitness
          </div>
          <div className="px-3 py-2 md:px-4 md:py-2 rounded-full border font-medium text-xs md:text-sm bg-sage-50 text-sage-500 border-sage-200">
            Nutrition
          </div>
          <div className="px-3 py-2 md:px-4 md:py-2 rounded-full border font-medium text-xs md:text-sm bg-sage-50 text-sage-500 border-sage-200">
            Mental Health
          </div>
          <div className="px-3 py-2 md:px-4 md:py-2 rounded-full border font-medium text-xs md:text-sm bg-sage-50 text-sage-500 border-sage-200">
            Cycle Tracking
          </div>
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center pt-4 gap-3">
        <div className="flex-1 md:flex-none px-4 md:px-6 py-3 rounded-full bg-neutral-200 text-neutral-400 font-semibold text-sm md:text-base">
          Back
        </div>
        <div className="flex-1 md:flex-none px-4 md:px-8 py-3 rounded-full bg-sage-500 text-white font-semibold text-sm md:text-base shadow-md">
          Next
        </div>
      </div>
    </div>
  );
} 