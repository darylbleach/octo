export default function ProgressTracker() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-4 md:p-6">
      <div className="space-y-4">
        {/* Streak section */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-pink-500 font-bold text-lg md:text-xl mb-2">
            <span className="text-2xl">🔥</span>
            <span>7 day streak</span>
          </div>
          <div className="text-sm text-neutral-500">Keep the momentum going!</div>
        </div>
        
        {/* Badges section */}
        <div className="space-y-3">
          <div className="text-sm font-medium text-neutral-700 text-center">Recent Achievements</div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col items-center p-3 bg-neutral-50 rounded-xl">
              <span className="text-2xl mb-2">🏆</span>
              <span className="text-xs text-neutral-600 text-center leading-tight">Cycle Sync Champion</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-neutral-50 rounded-xl">
              <span className="text-2xl mb-2">🏆</span>
              <span className="text-xs text-neutral-600 text-center leading-tight">Consistency Queen</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 