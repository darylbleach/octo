export default function MarketplacePage() {
  const products = [
    {
      name: "Cycle Sync Multivitamin",
      category: "Supplements",
      price: "£24.99",
      cyclePhase: "Follicular",
      why: "Supports energy during follicular phase",
      rating: 4.8,
      reviews: 120,
      link: "#",
    },
    {
      name: "Oura Ring",
      category: "Wearables",
      price: "£299.00",
      cyclePhase: "All",
      why: "Tracks sleep, recovery, and cycle",
      rating: 4.7,
      reviews: 210,
      link: "#",
    },
    {
      name: "Yoga Mat Pro",
      category: "Fitness Equipment",
      price: "£59.00",
      cyclePhase: "Menstrual",
      why: "Gentle support for restorative workouts",
      rating: 4.9,
      reviews: 98,
      link: "#",
    },
  ];
  return (
    <main className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-pink-500 mb-8">Marketplace</h1>
      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <select className="rounded-full border border-sage-200 px-4 py-2 text-base text-neutral-700 focus:outline-none">
          <option>All Categories</option>
          <option>Supplements</option>
          <option>Wearables</option>
          <option>Fitness Equipment</option>
        </select>
        <select className="rounded-full border border-sage-200 px-4 py-2 text-base text-neutral-700 focus:outline-none">
          <option>All Cycle Phases</option>
          <option>Menstrual</option>
          <option>Follicular</option>
          <option>Ovulation</option>
          <option>Luteal</option>
        </select>
      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.name} className="bg-white rounded-2xl shadow p-6 flex flex-col gap-2">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-sage-100 text-sage-700">
                {product.category}
              </span>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-pink-100 text-pink-700">
                {product.cyclePhase}
              </span>
            </div>
            <span className="text-lg font-semibold text-neutral-900">{product.name}</span>
            <span className="text-base text-pink-500 font-bold">{product.price}</span>
            <span className="text-sm text-neutral-500">Why recommended: {product.why}</span>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-yellow-400 font-bold">★ {product.rating}</span>
              <span className="text-xs text-neutral-400">({product.reviews} reviews)</span>
            </div>
            <div className="flex gap-2 mt-4">
              <a href={product.link} className="px-4 py-2 rounded-full bg-sage-400 text-white font-semibold text-sm shadow hover:bg-sage-500 transition-all">View</a>
              <button className="px-4 py-2 rounded-full bg-pink-100 text-pink-500 font-semibold text-sm border border-pink-200 hover:bg-pink-200 transition-all">♡ Save</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 