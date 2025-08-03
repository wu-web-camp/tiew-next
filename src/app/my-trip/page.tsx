"use client";

import React from "react";
import Image from "next/image";

const trips = [
  {
    id: 1,
    name: "อุทยานประวัติศาสตร์สุโขทัย",
    location: "สุโขทัย, ประเทศไทย",
    dates: "2024-11-15 to 2024-11-18",
    price: 8500,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
    description: "เต็มไปด้วยประวัติศาสตร์ โด่งดังในช่วงเทศกาลลอยกระทง",
  },
  {
    id: 2,
    name: "วัดพระธาตุดอยสุเทพ",
    location: "เชียงใหม่, ประเทศไทย",
    dates: "2024-12-01 to 2024-12-04",
    price: 12000,
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    description: "จุดชมวิวและศูนย์รวมศรัทธา คนแน่นแทบทั้งปี",
  },
  {
    id: 3,
    name: "เกาะพะงัน",
    location: "สุราษฎร์ธานี, ประเทศไทย",
    dates: "2024-12-25 to 2024-12-30",
    price: 18000,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
    description: "โด่งดังจาก Full Moon Party",
  },
  {
    id: 4,
    name: "เขาค้อ",
    location: "เพชรบูรณ์, ประเทศไทย",
    dates: "2024-12-20 to 2024-12-22",
    price: 6500,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80",
    description: "จุดเช็คอินทะเลหมอกยอดฮิต คนแห่ไปหน้าหนาว",
  },
  {
    id: 5,
    name: "สามพันโบก",
    location: "อุบลราชธานี, ประเทศไทย",
    dates: "2025-01-10 to 2025-01-13",
    price: 9500,
    image:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=400&q=80",
    description: "แกรนด์แคนยอนเมืองไทย คนแน่นช่วงน้ำลด",
  },
];

export default function MyTrip() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto py-20 px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
            <span className="text-orange-600">📍</span>
            Popular Destinations
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent mb-4">
            5 สถานที่ยอดนิยมที่คนเยอะ
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            สถานที่ท่องเที่ยวฮิตสุดๆ ที่นักท่องเที่ยวแห่ไปเยือน
            จากประวัติศาสตร์ถึงธรรมชาติ
          </p>
        </div>

        {/* Trip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip, index) => (
            <div
              key={trip.id}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 animate-pulse"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationDuration: "0.6s",
                animationFillMode: "forwards",
                animationName: "fadeInUp",
              }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-t-3xl">
                <Image
                  src={trip.image}
                  alt={trip.name}
                  width={400}
                  height={224}
                  className="h-56 w-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Floating Price Badge */}
                <div className="absolute top-4 right-4 bg-orange-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  ฿{trip.price.toLocaleString()}
                </div>

                {/* Popular Badge */}
                <div className="absolute top-4 left-4 bg-red-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
                  🔥 ยอดนิยม
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {trip.name}
                </h2>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <span className="text-orange-500 text-lg">📍</span>
                    <span className="text-base">{trip.location}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-600">
                    <span className="text-orange-500 text-lg">📅</span>
                    <span className="text-sm">{trip.dates}</span>
                  </div>

                  {/* Description */}
                  <div className="bg-orange-50 rounded-xl p-3 mt-4">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {trip.description}
                    </p>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full group/btn relative overflow-hidden bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl">
                  <div className="flex items-center justify-center gap-2 relative z-10">
                    <span className="text-lg">👁️</span>
                    <span>ดูรายละเอียด</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-2 h-16 bg-gradient-to-b from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 text-gray-400">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-orange-200"></div>
            <span className="text-sm">เที่ยวให้สุดกับสถานที่ฮิตที่สุด</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-orange-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
