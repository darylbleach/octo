import BottomNavigation from "@/components/BottomNavigation";

export default function DashboardPage() {
  // Mock user data - in a real app this would come from user context/API
  const userName = "Sam";
  const currentTime = new Date().getHours();
  const greeting = currentTime < 12 ? "Good morning" : currentTime < 17 ? "Good afternoon" : "Good evening";
  
  // Mock recommendations with completion status
  const recommendations = [
    {
      id: 1,
      title: "Morning Coffee & Skincare",
      type: "Wellness",
      description: "Time for your morning coffee and skincare routine",
      completed: true,
      time: "8:00 AM"
    },
    {
      id: 2,
      title: "10-min Yoga Flow",
      type: "Activity",
      description: "Gentle morning stretch to wake up your body",
      completed: false,
      time: "8:30 AM"
    },
    {
      id: 3,
      title: "Berry Protein Smoothie",
      type: "Nutrition",
      description: "High-protein breakfast to fuel your day",
      completed: false,
      time: "9:00 AM"
    }
  ];

  const completedCount = recommendations.filter(r => r.completed).length;
  const totalCount = recommendations.length;

  return (
    <>
      <main className="min-h-screen bg-pink-50">
        <section className="w-full space-y-6 md:space-y-8">
          {/* Mobile-first single column layout */}
          <div className="space-y-6 md:hidden">
            {/* Greeting & Wellness Score */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-4 md:p-6">
              <div className="text-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-2xl md:text-3xl font-bold text-pink-500">
                    {greeting}, {userName}
                  </h1>
                  <p className="text-base md:text-lg text-neutral-700">
                    Time for your morning coffee and skincare routine
                  </p>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-pink-500">82</div>
                <div className="text-sm md:text-base text-neutral-500 font-medium">Daily Wellness Score</div>
              </div>
            </div>

            {/* AI Assistant Prompt */}
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl shadow-md border border-pink-400 p-4 md:p-6">
              <div className="flex flex-col items-center space-y-3">
                <span className="text-2xl md:text-3xl">💬</span>
                <div className="text-center">
                  <div className="text-base md:text-lg font-bold text-white">AI Wellness Assistant</div>
                  <div className="text-sm md:text-sm text-pink-100 mt-2">Do you need any help today?</div>
                  <button className="mt-3 px-6 py-3 bg-white text-pink-600 rounded-full text-sm font-semibold shadow-lg hover:bg-pink-50 active:bg-pink-100 transition-all duration-200 transform active:scale-95">
                    Ask me anything
                  </button>
                </div>
              </div>
            </div>

            {/* Enhanced Recommendations */}
            <div className="bg-pink-50 rounded-2xl p-4 md:p-6 shadow-sm border border-pink-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-pink-500">
                  Today&apos;s Recommendations
                </h3>
                <div className="text-sm text-neutral-600">
                  {completedCount}/{totalCount} completed
                </div>
              </div>
              <div className="space-y-3">
                {recommendations.map((rec) => (
                  <div key={rec.id} className={`bg-white rounded-xl shadow-sm border p-4 transition-all ${
                    rec.completed 
                      ? 'border-green-200 bg-green-50' 
                      : 'border-neutral-100'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className={`inline-block px-2 py-1 text-xs font-bold rounded-full ${
                            rec.completed 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-sage-100 text-sage-700'
                          }`}>
                            {rec.type}
                          </span>
                          <span className="text-xs text-neutral-500">{rec.time}</span>
                        </div>
                        <h4 className={`font-semibold ${
                          rec.completed ? 'text-green-700' : 'text-neutral-900'
                        }`}>
                          {rec.title}
                        </h4>
                        <p className={`text-sm leading-relaxed ${
                          rec.completed ? 'text-green-600' : 'text-neutral-600'
                        }`}>
                          {rec.description}
                        </p>
                      </div>
                      <div className="ml-3">
                        {rec.completed ? (
                          <button className="w-8 h-8 bg-green-500 hover:bg-green-600 active:bg-green-700 rounded-lg flex items-center justify-center text-white shadow-md transition-all duration-200 transform active:scale-95">
                            <span className="text-sm">✓</span>
                          </button>
                        ) : (
                          <button className="w-8 h-8 border-2 border-neutral-300 hover:border-sage-400 hover:bg-sage-50 rounded-lg transition-all duration-200 cursor-pointer">
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cycle View & Energy */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-4 md:p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm md:text-lg font-semibold text-sage-500">Cycle Phase:</span>
                  <span className="px-3 py-1 rounded-full bg-sage-100 text-sage-700 font-bold text-sm md:text-base">
                    Follicular
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm md:text-lg font-semibold text-pink-500">Energy Level:</span>
                  <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700 font-bold text-sm md:text-base">
                    High
                  </span>
                </div>
                <div className="text-center pt-2">
                  <p className="text-sm text-neutral-600">
                    Perfect time for high-intensity workouts and new challenges!
                  </p>
                </div>
              </div>
            </div>

            {/* Streak Tracker */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-4 md:p-6">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-pink-500 font-bold text-lg md:text-xl mb-2">
                    <span className="text-2xl">🔥</span>
                    <span>7 day streak</span>
                  </div>
                  <div className="text-sm text-neutral-500">Keep the momentum going!</div>
                </div>
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
          </div>
          
          {/* Desktop layout - hidden on mobile */}
          <div className="hidden md:grid md:grid-cols-3 md:gap-8 md:items-start">
            {/* Main column */}
            <div className="col-span-2 flex flex-col gap-8">
              {/* Greeting & Wellness Score */}
              <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-6">
                <div className="text-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold text-pink-500">
                      {greeting}, {userName}
                    </h1>
                    <p className="text-lg text-neutral-700">
                      Time for your morning coffee and skincare routine
                    </p>
                  </div>
                  <div className="text-5xl font-bold text-pink-500">82</div>
                  <div className="text-base text-neutral-500 font-medium">Daily Wellness Score</div>
                </div>
              </div>
              
              {/* Enhanced Recommendations */}
              <div className="bg-pink-50 rounded-2xl p-6 shadow-sm border border-pink-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-pink-500">
                    Today&apos;s Recommendations
                  </h3>
                  <div className="text-sm text-neutral-600">
                    {completedCount}/{totalCount} completed
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {recommendations.map((rec) => (
                    <div key={rec.id} className={`bg-white rounded-xl shadow-sm border p-4 transition-all ${
                      rec.completed 
                        ? 'border-green-200 bg-green-50' 
                        : 'border-neutral-100'
                    }`}>
                      <div className="flex items-start justify-between">
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-3">
                            <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${
                              rec.completed 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-sage-100 text-sage-700'
                            }`}>
                              {rec.type}
                            </span>
                            <span className="text-sm text-neutral-500">{rec.time}</span>
                          </div>
                          <h4 className={`text-lg font-semibold ${
                            rec.completed ? 'text-green-700' : 'text-neutral-900'
                          }`}>
                            {rec.title}
                          </h4>
                          <p className={`text-sm leading-relaxed ${
                            rec.completed ? 'text-green-600' : 'text-neutral-600'
                          }`}>
                            {rec.description}
                          </p>
                        </div>
                        <div className="ml-4">
                          {rec.completed ? (
                            <button className="w-8 h-8 bg-green-500 hover:bg-green-600 active:bg-green-700 rounded-lg flex items-center justify-center text-white shadow-md transition-all duration-200 transform active:scale-95">
                              <span className="text-sm">✓</span>
                            </button>
                          ) : (
                            <button className="w-8 h-8 border-2 border-neutral-300 hover:border-sage-400 hover:bg-sage-50 rounded-lg transition-all duration-200 cursor-pointer">
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Cycle View & Energy */}
              <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-sage-500">Cycle Phase:</span>
                    <span className="px-3 py-1 rounded-full bg-sage-100 text-sage-700 font-bold text-base">Follicular</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-pink-500">Energy Level:</span>
                    <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700 font-bold text-base">High</span>
                  </div>
                  <div className="text-center pt-2">
                    <p className="text-sm text-neutral-600">
                      Perfect time for high-intensity workouts and new challenges!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="flex flex-col gap-8">
              {/* AI Assistant Prompt */}
              <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl shadow-md border border-pink-400 p-6">
                <div className="flex flex-col items-center space-y-3">
                  <span className="text-3xl">💬</span>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">AI Wellness Assistant</div>
                    <div className="text-sm text-pink-100 mt-2">Do you need any help today?</div>
                    <button className="mt-3 px-6 py-3 bg-white text-pink-600 rounded-full text-sm font-semibold shadow-lg hover:bg-pink-50 active:bg-pink-100 transition-all duration-200 transform active:scale-95">
                      Ask me anything
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Streak Tracker */}
              <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-6 flex flex-col items-center">
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-pink-500 font-bold text-xl mb-2">
                      <span className="text-2xl">🔥</span>
                      <span>7 day streak</span>
                    </div>
                    <div className="text-sm text-neutral-500">Keep the momentum going!</div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-neutral-700 text-center">Recent Achievements</div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex flex-col items-center p-3 bg-neutral-50 rounded-xl">
                        <span className="text-2xl mb-2">🏆</span>
                        <span className="text-xs text-neutral-600 text-center leading-tight">Cycle Sync Champion</span>
                      </div>
                      <div className="flex flex-col items-center p-3 bg-neutral-50 rounded-xl">
                        <span className="text-xs text-neutral-600 text-center leading-tight">Consistency Queen</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <BottomNavigation />
    </>
  );
} 