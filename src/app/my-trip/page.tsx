"use client";

import React from "react";

const trips = [
  {
    id: 1,
    name: "Bangkok Adventure",
    location: "Bangkok, Thailand",
    dates: "2024-07-01 to 2024-07-05",
    price: 12000,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Chiang Mai Retreat",
    location: "Chiang Mai, Thailand",
    dates: "2024-08-10 to 2024-08-15",
    price: 15000,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Phuket Beach Holiday",
    location: "Phuket, Thailand",
    dates: "2024-09-01 to 2024-09-07",
    price: 20000,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
  },
];

export default function MyTrip() {
  return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-rose-50">
        <div className="max-w-7xl mx-auto py-20 px-6">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
              <span className="text-red-500">📍</span>
              Travel Collection
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
              My Amazing Trips
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover breathtaking destinations and create unforgettable memories with our curated travel experiences
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
                      animationDuration: '0.6s',
                      animationFillMode: 'forwards',
                      animationName: 'fadeInUp'
                    }}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-t-3xl">
                    <img
                        src={trip.image}
                        alt={trip.name}
                        className="h-56 w-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Floating Price Badge */}
                    <div className="absolute top-4 right-4 bg-red-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      ฿{trip.price.toLocaleString()}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors duration-300">
                      {trip.name}
                    </h2>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-gray-600">
                        <span className="text-red-400 text-lg">📍</span>
                        <span className="text-base">{trip.location}</span>
                      </div>

                      <div className="flex items-center gap-3 text-gray-600">
                        <span className="text-red-400 text-lg">📅</span>
                        <span className="text-sm">{trip.dates}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button className="w-full group/btn relative overflow-hidden bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl">
                      <div className="flex items-center justify-center gap-2 relative z-10">
                        <span className="text-lg">👁️</span>
                        <span>View Details</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    </button>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-2 h-16 bg-gradient-to-b from-red-400 to-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            ))}
          </div>

          {/* Bottom Decoration */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-2 text-gray-400">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-red-200"></div>
              <span className="text-sm">More adventures await</span>
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-red-200"></div>
            </div>
          </div>
        </div>
      </div>
  );
}