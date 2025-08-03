"use client";

import React, { useState } from "react";
import Image from "next/image";

const tripHistory = [
  {
    id: 1,
    tripName: "Bangkok Adventure",
    location: "Bangkok, Thailand",
    bookedDate: "2024-06-15",
    travelDates: "2024-07-01 to 2024-07-05",
    price: 12000,
    status: "completed",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    review:
      "Amazing experience! The temples were breathtaking and the food was incredible.",
  },
  {
    id: 2,
    tripName: "Chiang Mai Retreat",
    location: "Chiang Mai, Thailand",
    bookedDate: "2024-07-20",
    travelDates: "2024-08-10 to 2024-08-15",
    price: 15000,
    status: "upcoming",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    rating: null,
    review: null,
  },
  {
    id: 3,
    tripName: "Phuket Beach Holiday",
    location: "Phuket, Thailand",
    bookedDate: "2024-05-10",
    travelDates: "2024-06-01 to 2024-06-07",
    price: 20000,
    status: "completed",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
    rating: 4,
    review: "Beautiful beaches and great weather. The resort was fantastic!",
  },
  {
    id: 4,
    tripName: "Krabi Island Hopping",
    location: "Krabi, Thailand",
    bookedDate: "2024-04-02",
    travelDates: "2024-04-15 to 2024-04-20",
    price: 18000,
    status: "cancelled",
    image:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=400&q=80",
    rating: null,
    review: null,
  },
  {
    id: 5,
    tripName: "Pattaya City Break",
    location: "Pattaya, Thailand",
    bookedDate: "2024-03-12",
    travelDates: "2024-03-25 to 2024-03-28",
    price: 8000,
    status: "completed",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
    rating: 3,
    review:
      "Good for a short getaway. The nightlife was fun but quite crowded.",
  },
];

const statusConfig: Record<
  string,
  { label: string; color: string; icon: string }
> = {
  completed: {
    label: "เสร็จสิ้น",
    color: "bg-green-100 text-green-700 border-green-200",
    icon: "✅",
  },
  upcoming: {
    label: "กำลังจะมาถึง",
    color: "bg-blue-100 text-blue-700 border-blue-200",
    icon: "🚀",
  },
  cancelled: {
    label: "ยกเลิก",
    color: "bg-red-100 text-red-700 border-red-200",
    icon: "❌",
  },
};

export default function TripHistory() {
  const [filter, setFilter] = useState("all");

  const filteredHistory = tripHistory.filter((trip) => {
    if (filter === "all") return true;
    return trip.status === filter;
  });

  const renderStars = (rating: number) => {
    if (!rating) return null;
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-lg ${
              star <= rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ⭐
          </span>
        ))}
      </div>
    );
  };

  const getTotalSpent = () => {
    return tripHistory
      .filter((trip) => trip.status === "completed")
      .reduce((total, trip) => total + trip.price, 0);
  };

  const getCompletedTrips = () => {
    return tripHistory.filter((trip) => trip.status === "completed").length;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto py-20 px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
            <span className="text-orange-600">📚</span>
            Travel History
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent mb-4">
            ประวัติการเดินทาง
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            ดูประวัติการจองทริปทั้งหมดของคุณ
            พร้อมรีวิวและคะแนนจากการเดินทางที่ผ่านมา
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">ทริปที่เสร็จสิ้น</p>
                <p className="text-3xl font-bold text-gray-800">
                  {getCompletedTrips()}
                </p>
              </div>
              <span className="text-4xl">🏆</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-amber-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">ยอดใช้จ่ายทั้งหมด</p>
                <p className="text-3xl font-bold text-gray-800">
                  ฿{getTotalSpent().toLocaleString()}
                </p>
              </div>
              <span className="text-4xl">💰</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">ทริปทั้งหมด</p>
                <p className="text-3xl font-bold text-gray-800">
                  {tripHistory.length}
                </p>
              </div>
              <span className="text-4xl">🌍</span>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              filter === "all"
                ? "bg-orange-600 text-white shadow-lg"
                : "bg-white text-gray-600 hover:bg-orange-50 border border-gray-200"
            }`}
          >
            ทั้งหมด ({tripHistory.length})
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              filter === "completed"
                ? "bg-green-500 text-white shadow-lg"
                : "bg-white text-gray-600 hover:bg-green-50 border border-gray-200"
            }`}
          >
            เสร็จสิ้น (
            {tripHistory.filter((t) => t.status === "completed").length})
          </button>
          <button
            onClick={() => setFilter("upcoming")}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              filter === "upcoming"
                ? "bg-blue-500 text-white shadow-lg"
                : "bg-white text-gray-600 hover:bg-blue-50 border border-gray-200"
            }`}
          >
            กำลังจะมาถึง (
            {tripHistory.filter((t) => t.status === "upcoming").length})
          </button>
          <button
            onClick={() => setFilter("cancelled")}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              filter === "cancelled"
                ? "bg-red-500 text-white shadow-lg"
                : "bg-white text-gray-600 hover:bg-orange-50 border border-gray-200"
            }`}
          >
            ยกเลิก ({tripHistory.filter((t) => t.status === "cancelled").length}
            )
          </button>
        </div>

        {/* History Cards */}
        <div className="space-y-6">
          {filteredHistory.map((trip, index) => (
            <div
              key={trip.id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="lg:w-1/3 relative overflow-hidden">
                  <Image
                    src={trip.image}
                    alt={trip.tripName}
                    width={400}
                    height={256}
                    className="h-64 lg:h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium border ${
                        statusConfig[trip.status].color
                      }`}
                    >
                      {statusConfig[trip.status].icon}{" "}
                      {statusConfig[trip.status].label}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-2/3 p-8">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                        {trip.tripName}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <span className="text-orange-500">📍</span>
                        <span>{trip.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-orange-600 mb-1">
                        ฿{trip.price.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">วันที่จอง</p>
                      <div className="flex items-center gap-2">
                        <span className="text-orange-500">📅</span>
                        <span className="text-gray-700">
                          {new Date(trip.bookedDate).toLocaleDateString(
                            "th-TH"
                          )}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">
                        วันที่เดินทาง
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-orange-500">✈️</span>
                        <span className="text-gray-700">
                          {trip.travelDates}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Rating and Review Section */}
                  {trip.status === "completed" && (
                    <div className="border-t border-gray-100 pt-6">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-sm font-medium text-gray-600">
                          การให้คะแนน:
                        </span>
                        {trip.rating && renderStars(trip.rating)}
                        <span className="text-sm text-gray-500">
                          ({trip.rating || 0}/5)
                        </span>
                      </div>
                      {trip.review && (
                        <div className="bg-gray-50 rounded-xl p-4">
                          <p className="text-sm text-gray-600 leading-relaxed italic">
                            &ldquo;{trip.review}&rdquo;
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    <button className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl transition-colors duration-300 text-sm font-medium">
                      ดูรายละเอียด
                    </button>
                    {trip.status === "completed" && (
                      <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors duration-300 text-sm font-medium">
                        จองอีกครั้ง
                      </button>
                    )}
                    {trip.status === "upcoming" && (
                      <button className="px-6 py-2 bg-yellow-100 hover:bg-yellow-200 text-yellow-700 rounded-xl transition-colors duration-300 text-sm font-medium">
                        แก้ไขการจอง
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredHistory.length === 0 && (
          <div className="text-center py-16">
            <span className="text-8xl mb-4 block">😔</span>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">
              ไม่พบประวัติการเดินทาง
            </h3>
            <p className="text-gray-500">
              ลองเปลี่ยนตัวกรองหรือเริ่มต้นการเดินทางใหม่กับเรา
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
