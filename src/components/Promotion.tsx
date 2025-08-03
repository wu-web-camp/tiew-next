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
  const [showCouponSuccess, setShowCouponSuccess] = useState(false);

  const toggleFilter = (filterId: string) => {
    const newFilters = new Set(selectedFilters);
    if (newFilters.has(filterId)) {
      newFilters.delete(filterId);
    } else {
      newFilters.add(filterId);
    }
    setSelectedFilters(newFilters);
  };

  const handleClaimCoupon = () => {
    setShowCouponSuccess(true);
  };

  const closeCouponSuccess = () => {
    setShowCouponSuccess(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 font-sans">
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-sans">Today's Deals</h1>
          <p className="text-lg md:text-xl opacity-90 font-sans">
            Spontaneous savings. Available nowhere else. Bookmark this page and check back daily.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="lg:w-80 space-y-6">
          {/* Applicable Products */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4 font-sans">Applicable Products</h3>
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
            <h3 className="font-semibold text-gray-900 mb-4 font-sans">Deals</h3>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {promotionCards.map((card) => (
              <div
                key={card.id}
                className={`${card.background} rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 min-h-[320px] flex flex-col`}
              >
                {/* Card Graphic */}
                <div className="mb-4 flex-shrink-0 h-20">
                  <div className="bg-white/50 rounded-lg p-4 text-center h-full flex flex-col justify-center">
                    <div className="text-2xl font-bold text-gray-800 mb-1 font-sans">
                      {card.graphic}
                    </div>
                    <div className="text-sm text-gray-600 min-h-[16px] font-sans">
                      {card.couponCode ? `Code: ${card.couponCode}` : '\u00A0'}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                                  <div className="flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-900 text-lg leading-tight min-h-[56px] flex items-start font-sans">
                        {card.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed min-h-[40px] font-sans">
                        {card.description}
                      </p>
                    
                    {/* Card Details */}
                    <div className="flex flex-wrap gap-2 text-xs text-gray-500 min-h-[24px]">
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
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={card.buttonText === 'CLAIM COUPON' ? handleClaimCoupon : undefined}
                    className={`w-full ${card.buttonColor} text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 mt-4 flex-shrink-0 font-sans`}
                  >
                    {card.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coupon Success Modal */}
      {showCouponSuccess && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
            {/* Close Button */}
            <button
              onClick={closeCouponSuccess}
              className="absolute top-4 right-4 text-blue-500 hover:text-blue-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Success Icon */}
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="relative">
                  {/* Main hand icon */}
                  <svg className="w-12 h-12 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4V5.5C17.6 6.5 20.5 9.4 21.5 13H22C22.6 13 23 13.4 23 14C23 14.6 22.6 15 22 15H21.5C20.5 18.6 17.6 21.5 14 22.5V24C14 24.6 13.6 25 13 25H11C10.4 25 10 24.6 10 24V22.5C6.4 21.5 3.5 18.6 2.5 15H2C1.4 15 1 14.6 1 14C1 13.4 1.4 13 2 13H2.5C3.5 9.4 6.4 6.5 10 5.5V4C10 2.9 10.9 2 12 2Z"/>
                  </svg>
                  {/* Plus signs around the icon */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-purple-600 font-bold text-sm">+</span>
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-purple-600 font-bold text-sm">+</span>
                  </div>
                  <div className="absolute -top-1 -left-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-purple-600 font-bold text-xs">%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Message */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3 font-sans">
                Coupon successfully collected!
              </h2>
              <p className="text-gray-600 leading-relaxed font-sans">
                Your discount has now been applied across all eligible properties. Complete your booking now at discounted prices!
              </p>
            </div>

            {/* Action Button */}
            <button
              onClick={closeCouponSuccess}
              className="w-full bg-[#A54141] hover:bg-[#8B3535] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 font-sans"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 