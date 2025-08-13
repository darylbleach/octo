import BottomNavigation from "@/components/BottomNavigation";

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
    {
      name: "Cycle Tracking Journal",
      category: "Wellness Tools",
      price: "£18.99",
      cyclePhase: "All",
      why: "Track symptoms, mood, and energy patterns",
      rating: 4.6,
      reviews: 89,
      link: "#",
    },
    {
      name: "Adaptogenic Tea Blend",
      category: "Supplements",
      price: "£32.50",
      cyclePhase: "Luteal",
      why: "Supports stress management and sleep",
      rating: 4.5,
      reviews: 156,
      link: "#",
    },
  ];
  
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-sage-50">
        <section className="w-full max-w-6xl mx-auto px-4 py-6 space-y-6">
          {/* Header */}
          <div className="text-center space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Marketplace
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Discover products tailored to your cycle and wellness goals
            </p>
          </div>
          
          {/* Enhanced Filters */}
          <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-4 md:p-6">
            <div className="space-y-4 md:space-y-0 md:flex md:items-center md:gap-6">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-neutral-700 mb-2">Category</label>
                <select className="w-full rounded-xl border-2 border-neutral-200 px-4 py-3 text-base text-neutral-700 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-300 transition-all duration-200">
                  <option>All Categories</option>
                  <option>Supplements</option>
                  <option>Wearables</option>
                  <option>Fitness Equipment</option>
                  <option>Wellness Tools</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold text-neutral-700 mb-2">Cycle Phase</label>
                <select className="w-full rounded-xl border-2 border-neutral-200 px-4 py-3 text-base text-neutral-700 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-300 transition-all duration-200">
                  <option>All Cycle Phases</option>
                  <option>Menstrual</option>
                  <option>Follicular</option>
                  <option>Ovulation</option>
                  <option>Luteal</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold text-neutral-700 mb-2">Sort By</label>
                <select className="w-full rounded-xl border-2 border-neutral-200 px-4 py-3 text-base text-neutral-700 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-300 transition-all duration-200">
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Highest Rated</option>
                  <option>Most Reviewed</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.name} className="bg-white rounded-2xl shadow-lg border border-neutral-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-6 space-y-4">
                  {/* Header with tags */}
                  <div className="flex justify-between items-start">
                    <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-sage-100 text-sage-700 border border-sage-200">
                      {product.category}
                    </span>
                    <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-pink-100 text-pink-700 border border-pink-200">
                      {product.cyclePhase}
                    </span>
                  </div>
                  
                  {/* Product Info */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-neutral-900 leading-tight">{product.name}</h3>
                    <div className="text-2xl font-bold text-pink-600">{product.price}</div>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      <span className="font-semibold text-neutral-700">Why recommended:</span> {product.why}
                    </p>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400 text-lg">★</span>
                      <span className="font-bold text-neutral-900">{product.rating}</span>
                    </div>
                    <span className="text-sm text-neutral-500">({product.reviews} reviews)</span>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-3">
                    <button className="flex-1 px-4 py-3 bg-white hover:bg-gray-50 active:bg-gray-100 text-neutral-700 font-semibold text-sm rounded-lg shadow-md border border-neutral-300 transition-all duration-200">
                      View Details
                    </button>
                    <button className="flex-1 px-4 py-3 bg-pink-500 hover:bg-pink-600 active:bg-pink-700 text-white font-semibold text-sm rounded-lg shadow-md transition-all duration-200">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center pt-4">
            <button className="px-6 py-3 bg-neutral-700 hover:bg-neutral-800 text-white font-semibold text-sm rounded-lg shadow-md transition-all duration-200">
              Load More Products
            </button>
          </div>
        </section>
      </main>
      <BottomNavigation />
    </>
  );
} 