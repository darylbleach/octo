import BottomNavigation from "@/components/BottomNavigation";

export default function ProfilePage() {
  const user = {
    name: "Sam",
    location: "London, UK",
    level: "Level 4: Wellness Explorer",
    streak: 7,
    achievements: [
      { label: "Cycle Sync Champion", date: "May 2024" },
      { label: "Consistency Queen", date: "Apr 2024" },
    ],
  };
  
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-sage-50">
        <section className="w-full max-w-4xl mx-auto px-4 py-6 space-y-6">
          {/* Header */}
          <div className="text-center space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Profile
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Your wellness journey and achievements
            </p>
          </div>
          
          {/* Create Community */}
          <div className="text-center pt-4">
            <button className="px-8 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-semibold rounded-xl transition-all duration-200">
              Create New Community
            </button>
          </div>
          
          {/* Mobile-first single column layout */}
          <div className="space-y-6 md:hidden">
            {/* User Info & Progress */}
            <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-6">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-sage-100 flex items-center justify-center text-3xl md:text-4xl font-bold text-sage-400 mx-auto border-4 border-sage-200">
                  S
                </div>
                <div className="text-lg md:text-xl font-semibold text-neutral-900">{user.name}</div>
                <div className="text-sm text-neutral-500">{user.location}</div>
                <div className="text-base text-pink-500 font-bold">{user.level}</div>
                <div className="flex items-center justify-center gap-2 text-sage-500 font-semibold">
                  <span className="text-xl">🔥</span>
                  <span>{user.streak} day streak</span>
                </div>
              </div>
            </div>
            
            {/* Achievements */}
            <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-6">
              <h2 className="text-lg font-semibold text-sage-500 mb-4 text-center">Achievements</h2>
              <div className="space-y-4">
                {user.achievements.map((ach) => (
                  <div key={ach.label} className="flex items-center gap-4 p-4 bg-sage-50 rounded-xl border border-sage-100 hover:bg-sage-100 transition-colors duration-200">
                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-xl border-2 border-pink-200">🏅</div>
                    <div className="flex-1">
                      <div className="text-base font-bold text-pink-500">{ach.label}</div>
                      <div className="text-xs text-neutral-400">{ach.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Settings */}
            <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-6">
              <h2 className="text-lg font-semibold text-sage-500 mb-4 text-center">Settings</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors duration-200">
                  <span className="text-base text-neutral-700">Notifications</span>
                  <input type="checkbox" className="w-5 h-5 accent-pink-400" defaultChecked />
                </div>
                <div className="flex justify-between items-center p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors duration-200">
                  <span className="text-base text-neutral-700">Cycle Sync Tips</span>
                  <input type="checkbox" className="w-5 h-5 accent-sage-400" defaultChecked />
                </div>
                <div className="flex justify-between items-center p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors duration-200">
                  <span className="text-base text-neutral-700">Community Updates</span>
                  <input type="checkbox" className="w-5 h-5 accent-pink-400" defaultChecked />
                </div>
              </div>
            </div>
          </div>
          
          {/* Desktop layout - hidden on mobile */}
          <div className="hidden md:grid md:grid-cols-3 md:gap-8">
            {/* User Info & Progress */}
            <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-6 flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-sage-100 flex items-center justify-center text-4xl font-bold text-sage-400 mb-4 border-4 border-sage-200">S</div>
              <div className="text-xl font-semibold text-neutral-900 mb-1">{user.name}</div>
              <div className="text-sm text-neutral-500 mb-2">{user.location}</div>
              <div className="text-base text-pink-500 font-bold mb-2">{user.level}</div>
              <div className="flex items-center gap-2 text-sage-500 font-semibold mb-2">
                <span className="text-xl">🔥</span>
                <span>{user.streak} day streak</span>
              </div>
            </div>
            
            {/* Achievements */}
            <div className="col-span-2 bg-white rounded-2xl shadow-lg border border-neutral-200 p-6">
              <h2 className="text-xl font-semibold text-sage-500 mb-4">Achievements</h2>
              <div className="flex gap-6">
                {user.achievements.map((ach) => (
                  <div key={ach.label} className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center text-2xl mb-2 border-2 border-pink-200">🏅</div>
                    <span className="text-base font-bold text-pink-500">{ach.label}</span>
                    <span className="text-xs text-neutral-400">{ach.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Desktop Settings */}
          <div className="hidden md:block bg-white rounded-2xl shadow-lg border border-neutral-200 p-6 max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-sage-500 mb-4">Settings</h2>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors duration-200">
                <span className="text-base text-neutral-700">Notifications</span>
                <input type="checkbox" className="w-6 h-6 accent-pink-400" defaultChecked />
              </div>
              <div className="flex justify-between items-center p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors duration-200">
                <span className="text-base text-neutral-700">Cycle Sync Tips</span>
                <input type="checkbox" className="w-6 h-6 accent-sage-400" defaultChecked />
              </div>
              <div className="flex justify-between items-center p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors duration-200">
                <span className="text-base text-neutral-700">Community Updates</span>
                <input type="checkbox" className="w-6 h-6 accent-pink-400" defaultChecked />
              </div>
            </div>
          </div>
        </section>
      </main>
      <BottomNavigation />
    </>
  );
} 