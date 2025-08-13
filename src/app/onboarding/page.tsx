"use client";
import OnboardingFlow from "@/components/OnboardingFlow";

export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-sage-50">
      <section className="w-full max-w-2xl mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Welcome to Octo
          </h1>
          <p className="text-lg text-neutral-600 max-w-md mx-auto">
            Let&apos;s personalize your wellness journey with a few quick questions
          </p>
        </div>

        {/* Health Data Integration */}
        <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">
            Connect Your Health Data
          </h2>
          <p className="text-neutral-600 mb-6">
            Connect your existing platforms to get personalized insights and recommendations
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { name: 'Oura', color: 'bg-orange-500' },
              { name: 'Whoop', color: 'bg-purple-600' },
              { name: 'Apple Health', color: 'bg-green-500' },
              { name: 'Flo', color: 'bg-pink-500' },
              { name: 'Eve', color: 'bg-blue-500' },
              { name: 'Garmin', color: 'bg-blue-600' }
            ].map((platform) => (
              <button
                key={platform.name}
                className={`${platform.color} hover:opacity-90 active:scale-95 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-md`}
              >
                {platform.name}
              </button>
            ))}
          </div>
          <div className="mt-4 text-center">
            <button className="text-sage-600 hover:text-sage-700 font-medium text-sm">
              Skip for now
            </button>
          </div>
        </div>

        {/* Goals & Aspirations */}
        <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">
            What are you looking to achieve?
          </h2>
          <p className="text-neutral-600 mb-6">
            Select the areas that interest you most
          </p>
          <div className="space-y-3">
            {[
              'Nutrition advice and meal planning',
              'Supplement suggestions and guidance',
              'Access to health services and specialists',
              'Fitness plans aligned to your cycle',
              'Sleep optimization and recovery',
              'Stress management and mindfulness'
            ].map((goal, index) => (
              <button
                key={index}
                className="w-full text-left p-4 rounded-xl border-2 border-neutral-200 hover:border-sage-400 hover:bg-sage-50 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-neutral-700 group-hover:text-neutral-900 font-medium">
                    {goal}
                  </span>
                  <div className="w-5 h-5 rounded-full border-2 border-neutral-300 group-hover:border-sage-400 transition-colors"></div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Symptom Check-In */}
        <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">
            How are you feeling today?
          </h2>
          <p className="text-neutral-600 mb-6">
            Let us know about any current issues you&apos;re experiencing
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              'Tiredness',
              'Skin breakouts',
              'Sleep trouble',
              'Mood changes',
              'Bloating',
              'Cramps',
              'Low energy',
              'Anxiety'
            ].map((symptom, index) => (
              <button
                key={index}
                className="p-3 rounded-xl border-2 border-neutral-200 hover:border-pink-300 hover:bg-pink-50 transition-all duration-200 group"
              >
                <span className="text-neutral-700 group-hover:text-neutral-900 font-medium text-sm">
                  {symptom}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Starter Snapshot */}
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl shadow-lg p-6 md:p-8 text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Your Personalized Insight
          </h2>
          <div className="space-y-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
              <p className="text-pink-50 text-sm leading-relaxed">
                Based on your goals, we&apos;ve identified that 73% of women with similar aspirations found success by starting with morning routines and cycle-synced nutrition.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
              <p className="text-pink-50 text-sm leading-relaxed">
                Your Cycle Sync Community is ready to support you with personalized tips and shared experiences.
              </p>
              <p className="text-pink-100 text-xs mt-2 opacity-80">
                - Sarah, 28, Cycle Sync Community
              </p>
            </div>
          </div>
        </div>

        {/* Get Started Button */}
        <div className="text-center space-y-4">
          <a href="/dashboard" className="inline-block w-full bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700 text-white font-bold text-lg py-4 px-8 rounded-2xl shadow-lg transition-all duration-200 transform active:scale-95">
            Get Started with My Wellness Journey
          </a>
          <p className="text-neutral-500 text-sm">
            You can always update your preferences later from your profile
          </p>
        </div>
      </section>
    </main>
  );
} 