import BottomNavigation from "@/components/BottomNavigation";

export default function NutritionPage() {
  return (
    <>
      <main className="min-h-screen bg-pink-50">
        <section className="w-full space-y-6 md:space-y-8">
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-pink-500 mb-4 md:mb-8">Nutrition & Wellness</h1>
          </div>
          
          {/* Mobile-first single column layout */}
          <div className="space-y-6 md:hidden">
            {/* Daily Nutrition Summary */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-4">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Today&apos;s Nutrition</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Calories</span>
                  <span>1,200 / 2,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Protein</span>
                  <span>45g / 80g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Carbs</span>
                  <span>120g / 250g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Fat</span>
                  <span>50g</span>
                </div>
                <div className="px-6 py-3 rounded-full bg-sage-400 text-white font-semibold text-sm shadow-md text-center">
                  Log Meal
                </div>
              </div>
            </div>
            
            {/* Meal Suggestions */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-4">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Suggested Meals</h3>
              <div className="space-y-4">
                <div className="border border-neutral-200 rounded-xl p-4">
                  <h4 className="font-semibold text-neutral-900 mb-2">Berry Protein Smoothie</h4>
                  <p className="text-sm text-neutral-600 mb-3">High-protein breakfast to fuel your morning</p>
                  <div className="flex justify-between items-center text-sm">
                    <span>Calories: 320</span>
                    <span>Protein: 25g</span>
                  </div>
                </div>
                
                <div className="border border-neutral-200 rounded-xl p-4">
                  <h4 className="font-semibold text-neutral-900 mb-2">Quinoa Bowl</h4>
                  <p className="text-sm text-neutral-600 mb-3">Nutrient-rich lunch with vegetables</p>
                  <div className="flex justify-between items-center text-sm">
                    <span>Calories: 450</span>
                    <span>Protein: 18g</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Desktop layout - hidden on mobile */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-8">
            {/* Daily Nutrition Summary */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-6">
              <h3 className="text-xl font-semibold text-neutral-900 mb-6">Today&apos;s Nutrition</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Calories</span>
                  <span>1,200 / 2,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Protein</span>
                  <span>45g / 80g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Carbs</span>
                  <span>120g / 250g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Fat</span>
                  <span>50g</span>
                </div>
                <div className="mt-2 px-6 py-2 rounded-full bg-sage-400 text-white font-semibold shadow-md text-center">
                  Log Meal
                </div>
              </div>
            </div>
            
            {/* Meal Suggestions */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-6">
              <h3 className="text-xl font-semibold text-neutral-900 mb-6">Suggested Meals</h3>
              <div className="space-y-4">
                <div className="border border-neutral-200 rounded-xl p-4">
                  <h4 className="font-semibold text-neutral-900 mb-2">Berry Protein Smoothie</h4>
                  <p className="text-sm text-neutral-600 mb-3">High-protein breakfast to fuel your morning</p>
                  <div className="flex justify-between items-center text-sm">
                    <span>Calories: 320</span>
                    <span>Protein: 25g</span>
                  </div>
                </div>
                
                <div className="border border-neutral-200 rounded-xl p-4">
                  <h4 className="font-semibold text-neutral-900 mb-2">Quinoa Bowl</h4>
                  <p className="text-sm text-neutral-600 mb-3">Nutrient-rich lunch with vegetables</p>
                  <div className="flex justify-between items-center text-sm">
                    <span>Calories: 450</span>
                    <span>Protein: 18g</span>
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