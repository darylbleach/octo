export default function TopNavigation() {
  return (
    <nav className="w-full bg-white border-b border-neutral-100 shadow-sm sticky top-0 z-50">
      <div className="w-full flex items-center justify-between px-4 py-3 md:max-w-5xl md:mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-extrabold text-pink-500 tracking-tight">Octo</span>
        </div>
        
        {/* Desktop links */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="/dashboard" className="text-base md:text-lg font-medium text-neutral-700 hover:text-pink-500 transition-colors">Activities</a>
          <a href="/nutrition" className="text-base md:text-lg font-medium text-neutral-700 hover:text-pink-500 transition-colors">Nutrition</a>
          <a href="/marketplace" className="text-base md:text-lg font-medium text-neutral-700 hover:text-pink-500 transition-colors">Marketplace</a>
          <a href="/communities" className="text-base md:text-lg font-medium text-neutral-700 hover:text-pink-500 transition-colors">Communities</a>
          <a href="/profile" className="text-base md:text-lg font-medium text-neutral-700 hover:text-pink-500 transition-colors">Profile</a>
        </div>
      </div>
    </nav>
  );
} 