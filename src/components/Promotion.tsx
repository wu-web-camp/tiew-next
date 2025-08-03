'use client';

import { useState } from 'react';

interface PromotionCard {
  id: string;
  title: string;
  description: string;
  background: string;
  couponCode?: string;
  expiresIn?: string;
  minSpend?: string;
  buttonText: string;
  buttonColor: string;
  graphic: string;
}

const promotionCards: PromotionCard[] = [
  {
    id: '1',
    title: 'Up to $1,200 Off Hotels',
    description: 'Expires in 3 days | Promo Code: AGODADEAL5',
    background: 'bg-[#F8F9FA]',
    couponCode: 'AGODADEAL5',
    expiresIn: '3 days',
    buttonText: 'CLAIM COUPON',
    buttonColor: 'bg-[#A54141] hover:bg-[#8B3535]',
    graphic: 'UP TO 5% OFF'
  },
  {
    id: '2',
    title: 'Up to $1,600 Off Hotels',
    description: 'Min. spend ฿3,750 | Expires in 3 days | Promo Code: AGODADEAL8',
    background: 'bg-[#F8F9FA]',
    couponCode: 'AGODADEAL8',
    expiresIn: '3 days',
    minSpend: '฿3,750',
    buttonText: 'CLAIM COUPON',
    buttonColor: 'bg-[#A54141] hover:bg-[#8B3535]',
    graphic: 'UP TO 8% OFF'
  },
  {
    id: '3',
    title: 'Limited Time Price Drop - Up to 30%',
    description: 'Unlock special hotel rates at your dream destination. Book now before prices go up!',
    background: 'bg-[#F8F9FA]',
    buttonText: 'ACTIVATE NOW',
    buttonColor: 'bg-[#A54141] hover:bg-[#8B3535]',
    graphic: 'UNLOCK DEALS'
  },
  {
    id: '4',
    title: 'Thailand Exclusive - KTC x Trip Planner',
    description: 'Sign up now to upgrade to VIP Platinum and get exclusive travel benefits',
    background: 'bg-[#F8F9FA]',
    buttonText: 'SIGN UP NOW',
    buttonColor: 'bg-[#A54141] hover:bg-[#8B3535]',
    graphic: 'VIP CARD'
  },
  {
    id: '5',
    title: 'Weekend Flash Sale - Up to 25% Off',
    description: 'Travel like a VIP! Get exclusive VIP rates this weekend and save on your next adventure',
    background: 'bg-[#F8F9FA]',
    buttonText: 'BOOK NOW',
    buttonColor: 'bg-[#A54141] hover:bg-[#8B3535]',
    graphic: 'VIP FLASH RATES'
  },
  {
    id: '6',
    title: 'Save On Hotels & Save Wildlife',
    description: 'We\'ll donate $1 to WWF for every reservation you make!',
    background: 'bg-[#F8F9FA]',
    buttonText: 'BOOK & DONATE',
    buttonColor: 'bg-[#A54141] hover:bg-[#8B3535]',
    graphic: 'ECO DEALS'
  }
];

const filterOptions = {
  products: [
    { id: 'hotels', label: 'Hotels & Homes', count: 7 },
    { id: 'flights', label: 'Flights', count: 0 },
    { id: 'bundles', label: 'Flight + Hotel', count: 0 }
  ],
  deals: [
    { id: 'coupons', label: 'Coupons', count: 2 },
    { id: 'credit-card', label: 'Credit Card', count: 1 },
    { id: 'campaigns', label: 'Special Campaigns', count: 5 },
    { id: 'limited', label: 'Limited Time Offers', count: 4 }
  ]
};

export default function Promotion() {
  const [selectedFilters, setSelectedFilters] = useState<Set<string>>(new Set());

  const toggleFilter = (filterId: string) => {
    const newFilters = new Set(selectedFilters);
    if (newFilters.has(filterId)) {
      newFilters.delete(filterId);
    } else {
      newFilters.add(filterId);
    }
    setSelectedFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#A54141] to-[#8B3535] text-white py-16 px-6 rounded-2xl mb-8 overflow-hidden">
        {/* Simple dot pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[length:20px_20px]"></div>
        </div>
        
        {/* Left Character */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
          <div className="w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center">
            <span className="text-2xl">😰</span>
          </div>
        </div>

        {/* Right Character */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
          <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center">
            <span className="text-2xl">😊</span>
          </div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Today's Deals</h1>
          <p className="text-lg md:text-xl opacity-90">
            Spontaneous savings. Available nowhere else. Bookmark this page and check back daily.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="lg:w-80 space-y-6">
          {/* Applicable Products */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Applicable Products</h3>
            <div className="space-y-3">
              {filterOptions.products.map((product) => (
                <label key={product.id} className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedFilters.has(product.id)}
                      onChange={() => toggleFilter(product.id)}
                      className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">{product.label}</span>
                  </div>
                  <span className="text-sm text-gray-500">({product.count})</span>
                </label>
              ))}
            </div>
          </div>

          {/* Deals */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Deals</h3>
            <div className="space-y-3">
              {filterOptions.deals.map((deal) => (
                <label key={deal.id} className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedFilters.has(deal.id)}
                      onChange={() => toggleFilter(deal.id)}
                      className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">{deal.label}</span>
                  </div>
                  <span className="text-sm text-gray-500">({deal.count})</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content - Promotion Cards Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {promotionCards.map((card) => (
              <div
                key={card.id}
                className={`${card.background} rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200`}
              >
                {/* Card Graphic */}
                <div className="mb-4">
                  <div className="bg-white/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-gray-800 mb-2">
                      {card.graphic}
                    </div>
                    {card.couponCode && (
                      <div className="text-sm text-gray-600">
                        Code: {card.couponCode}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 text-lg leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                  
                  {/* Card Details */}
                  <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                    {card.expiresIn && (
                      <span className="bg-white/50 px-2 py-1 rounded">
                        Expires in {card.expiresIn}
                      </span>
                    )}
                    {card.minSpend && (
                      <span className="bg-white/50 px-2 py-1 rounded">
                        Min. spend {card.minSpend}
                      </span>
                    )}
                  </div>

                  {/* Action Button */}
                  <button
                    className={`w-full ${card.buttonColor} text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 mt-4`}
                  >
                    {card.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 