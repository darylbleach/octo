export default function NutritionPage() {
  return (
    <main className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-pink-500 mb-8">Nutrition</h1>
      <section className="grid grid-cols-3 gap-8">
        {/* Nutrition Tracking Summary */}
        <div className="col-span-1 bg-white rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold text-sage-500 mb-2">Today&apos;s Nutrition</h2>
          <div className="text-4xl font-bold text-pink-400 mb-1">1,650</div>
          <div className="text-sm text-neutral-500 mb-4">Calories consumed</div>
          <div className="w-full flex justify-between text-sm text-neutral-700">
            <span>Protein</span>
            <span>80g</span>
          </div>
          <div className="w-full flex justify-between text-sm text-neutral-700">
            <span>Carbs</span>
            <span>210g</span>
          </div>
          <div className="w-full flex justify-between text-sm text-neutral-700 mb-4">
            <span>Fat</span>
            <span>50g</span>
          </div>
          <button className="mt-2 px-6 py-2 rounded-full bg-sage-400 text-white font-semibold shadow hover:bg-sage-500 transition-all">Log Meal</button>
        </div>
        {/* Meal Suggestions */}
        <div className="col-span-2 bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold text-sage-500 mb-4">Personalized Meal Suggestions</h2>
          <ul className="space-y-4">
            <li className="p-4 rounded-xl bg-sage-50 flex flex-col gap-1">
              <span className="font-bold text-lg text-pink-500">Berry Protein Smoothie</span>
              <span className="text-neutral-700">Breakfast &middot; 320 kcal</span>
              <span className="text-neutral-500 text-sm">High in antioxidants and protein for a strong start.</span>
            </li>
            <li className="p-4 rounded-xl bg-sage-50 flex flex-col gap-1">
              <span className="font-bold text-lg text-pink-500">Grilled Salmon Salad</span>
              <span className="text-neutral-700">Lunch &middot; 480 kcal</span>
              <span className="text-neutral-500 text-sm">Omega-3s for cycle support and energy.</span>
            </li>
            <li className="p-4 rounded-xl bg-sage-50 flex flex-col gap-1">
              <span className="font-bold text-lg text-pink-500">Chickpea Buddha Bowl</span>
              <span className="text-neutral-700">Dinner &middot; 550 kcal</span>
              <span className="text-neutral-500 text-sm">Plant-based, high fiber, cycle-friendly.</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
} 