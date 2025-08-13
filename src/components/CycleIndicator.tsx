export default function CycleIndicator() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-white rounded-xl shadow-sm border border-neutral-100 p-3 md:p-4">
      <span className="px-3 py-1 rounded-full font-semibold text-xs md:text-sm bg-sage-200 text-sage-700">
        Follicular
      </span>
      <span className="text-neutral-700 text-xs md:text-sm text-center sm:text-left">
        Day 8 of 28
      </span>
    </div>
  );
} 