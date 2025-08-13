export default function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-100 shadow-lg z-50 md:hidden">
      <div className="flex justify-around items-center h-16 px-2">
        <a href="/dashboard" className="flex flex-col items-center justify-center h-full py-2 px-1 text-xs font-medium text-pink-500 bg-pink-50 rounded-lg">
          <span className="text-lg mb-1">🏃</span>
          <span className="text-[10px] leading-tight">Activities</span>
        </a>
        <a href="/nutrition" className="flex flex-col items-center justify-center h-full py-2 px-1 text-xs font-medium text-neutral-400 hover:text-neutral-600 hover:bg-neutral-50 rounded-lg">
          <span className="text-lg mb-1">🥗</span>
          <span className="text-[10px] leading-tight">Nutrition</span>
        </a>
        <a href="/marketplace" className="flex flex-col items-center justify-center h-full py-2 px-1 text-xs font-medium text-neutral-400 hover:text-neutral-600 hover:bg-neutral-50 rounded-lg">
          <span className="text-lg mb-1">🛍️</span>
          <span className="text-[10px] leading-tight">Marketplace</span>
        </a>
        <a href="/communities" className="flex flex-col items-center justify-center h-full py-2 px-1 text-xs font-medium text-neutral-400 hover:text-neutral-600 hover:bg-neutral-50 rounded-lg">
          <span className="text-lg mb-1">👥</span>
          <span className="text-[10px] leading-tight">Communities</span>
        </a>
        <a href="/profile" className="flex flex-col items-center justify-center h-full py-2 px-1 text-xs font-medium text-neutral-400 hover:text-neutral-600 hover:bg-neutral-50 rounded-lg">
          <span className="text-lg mb-1">👤</span>
          <span className="text-[10px] leading-tight">Profile</span>
        </a>
      </div>
    </nav>
  );
} 