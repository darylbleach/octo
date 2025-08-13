import BottomNavigation from "@/components/BottomNavigation";

export default function CommunitiesPage() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-sage-50">
        <section className="w-full max-w-4xl mx-auto px-4 py-6 space-y-6">
          {/* Header */}
          <div className="text-center space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Communities
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Connect with like-minded people on your wellness journey
            </p>
          </div>
          
          {/* Mobile-first single column layout */}
          <div className="space-y-6 md:hidden">
            {/* Community Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-6 hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center text-2xl border-2 border-pink-200">
                    🌸
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900">Cycle Sync Community</h3>
                    <p className="text-sm text-neutral-600">1.2k members</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-700 leading-relaxed">Connect with others on their wellness journey. Share tips, ask questions, and find support.</p>
                <button className="w-full px-6 py-3 bg-pink-500 text-white text-sm font-semibold rounded-xl shadow-md hover:bg-pink-600 active:bg-pink-700 transition-all duration-200 transform active:scale-95">
                  Join Community
                </button>
              </div>
            </div>
            
            {/* Community Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-6 hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center text-2xl border-2 border-sage-200">
                    🧘
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900">Mindful Movement</h3>
                    <p className="text-sm text-neutral-600">856 members</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-700 leading-relaxed">Yoga, pilates, and gentle fitness enthusiasts. Perfect for low-impact exercise lovers.</p>
                <button className="w-full px-6 py-3 bg-sage-500 text-white text-sm font-semibold rounded-xl shadow-md hover:bg-sage-600 active:bg-sage-700 transition-all duration-200 transform active:scale-95">
                  Join Community
                </button>
              </div>
            </div>
            
            {/* Community Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-6 hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center text-2xl border-2 border-pink-200">
                    🥗
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900">Nutrition & Wellness</h3>
                    <p className="text-sm text-neutral-600">2.1k members</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-700 leading-relaxed">Healthy eating tips, recipes, and nutrition advice. Share your favorite healthy meals!</p>
                <button className="w-full px-6 py-3 bg-pink-500 text-white text-sm font-semibold rounded-xl shadow-md hover:bg-pink-600 active:bg-pink-700 transition-all duration-200 transform active:scale-95">
                  Join Community
                </button>
              </div>
            </div>
            
            {/* Community Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-6 hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center text-2xl border-2 border-sage-200">
                    💤
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900">Sleep & Recovery</h3>
                    <p className="text-sm text-neutral-600">743 members</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-700 leading-relaxed">Tips for better sleep, stress management, and recovery techniques for optimal wellness.</p>
                <button className="w-full px-6 py-3 bg-sage-500 text-white text-sm font-semibold rounded-xl shadow-md hover:bg-sage-600 active:bg-sage-700 transition-all duration-200 transform active:scale-95">
                  Join Community
                </button>
              </div>
            </div>
          </div>
          
          {/* Desktop layout - hidden on mobile */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Community Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-6 hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center text-2xl border-2 border-pink-200">
                    🌸
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900">Cycle Sync Community</h3>
                    <p className="text-sm text-neutral-600">1.2k members</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-700 leading-relaxed">Connect with others on their wellness journey. Share tips, ask questions, and find support.</p>
                <button className="w-full px-6 py-3 bg-pink-500 text-white text-sm font-semibold rounded-xl shadow-md hover:bg-pink-600 active:bg-pink-700 transition-all duration-200 transform active:scale-95">
                  Join Community
                </button>
              </div>
            </div>
            
            {/* Community Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-6 hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center text-2xl border-2 border-sage-200">
                    🧘
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900">Mindful Movement</h3>
                    <p className="text-sm text-neutral-600">856 members</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-700 leading-relaxed">Yoga, pilates, and gentle fitness enthusiasts. Perfect for low-impact exercise lovers.</p>
                <button className="w-full px-6 py-3 bg-sage-500 text-white text-sm font-semibold rounded-xl shadow-md hover:bg-sage-600 active:bg-sage-700 transition-all duration-200 transform active:scale-95">
                  Join Community
                </button>
              </div>
            </div>
            
            {/* Community Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-6 hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center text-2xl border-2 border-pink-200">
                    🥗
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900">Nutrition & Wellness</h3>
                    <p className="text-sm text-neutral-600">2.1k members</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-700 leading-relaxed">Healthy eating tips, recipes, and nutrition advice. Share your favorite healthy meals!</p>
                <button className="w-full px-6 py-3 bg-pink-500 text-white text-sm font-semibold rounded-xl shadow-md hover:bg-pink-600 active:bg-pink-700 transition-all duration-200 transform active:scale-95">
                  Join Community
                </button>
              </div>
            </div>
          </div>
          
          {/* Create Community */}
          <div className="text-center pt-4">
            <button className="px-8 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-semibold rounded-xl transition-all duration-200">
              Create New Community
            </button>
          </div>
        </section>
      </main>
      <BottomNavigation />
    </>
  );
} 