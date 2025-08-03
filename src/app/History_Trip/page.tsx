"use client";

import React, { useState } from "react";

const tripHistory = [
    {
        id: 1,
        tripName: "Bangkok Temple Tour",
        location: "Bangkok, Thailand",
        bookedDate: "2024-06-15",
        travelDates: "2024-07-01 to 2024-07-05",
        price: 12000,
        status: "completed",
        image: "https://images.unsplash.com/photo-1563492065273-da72a14139cd?auto=format&fit=crop&w=400&q=80",
        rating: 5,
        review: "วัดพระแก้วสวยมาก แต่คนเยอะมากจริงๆ ต้องไปเช้าๆ"
    },
    {
        id: 2,
        tripName: "Floating Market Experience",
        location: "Ratchaburi, Thailand",
        bookedDate: "2024-07-20",
        travelDates: "2024-08-10 to 2024-08-15",
        price: 8500,
        status: "completed",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
        rating: 4,
        review: "ตลาดน้ำดำเนินสะดวกบรรยากาศดี แต่ต้องไปเช้าถึงจะได้ที่จอดรถ"
    },
    {
        id: 3,
        tripName: "Erawan Waterfall Adventure",
        location: "Kanchanaburi, Thailand",
        bookedDate: "2024-05-10",
        travelDates: "2024-06-01 to 2024-06-07",
        price: 15000,
        status: "completed",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80",
        rating: 5,
        review: "น้ำตกเอราวัณสวยมาก น้ำสีฟ้าใสจริงๆ แต่คนเยอะมากช่วงหยุดยาว"
    },
    {
        id: 4,
        tripName: "Railay Beach Paradise",
        location: "Krabi, Thailand",
        bookedDate: "2024-04-02",
        travelDates: "2024-04-15 to 2024-04-20",
        price: 22000,
        status: "completed",
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=400&q=80",
        rating: 4,
        review: "หาดไร่เลย์สวยจริงๆ แต่คนเยอะมาก โดยเฉพาะช่วงพระอาทิตย์ตก"
    },
    {
        id: 5,
        tripName: "Khao Yai National Park",
        location: "Nakhon Ratchasima, Thailand",
        bookedDate: "2024-03-12",
        travelDates: "2024-03-25 to 2024-03-28",
        price: 11000,
        status: "completed",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80",
        rating: 4,
        review: "เขาใหญ่อากาศดี ธรรมชาติสวย แต่คนแน่นมากช่วงหน้าหนาว"
    }
];

const statusConfig = {
    completed: {
        label: "เสร็จสิ้น",
        color: "bg-green-100 text-green-700 border-green-200",
        icon: "✅"
    },
    upcoming: {
        label: "กำลังจะมาถึง",
        color: "bg-blue-100 text-blue-700 border-blue-200",
        icon: "🚀"
    },
    cancelled: {
        label: "ยกเลิก",
        color: "bg-red-100 text-red-700 border-red-200",
        icon: "❌"
    }
};

export default function TripHistory() {
    const [filter, setFilter] = useState("all");
    const [selectedTrip, setSelectedTrip] = useState(null);

    const filteredHistory = tripHistory.filter(trip => {
        if (filter === "all") return true;
        return trip.status === filter;
    });

    const renderStars = (rating) => {
        if (!rating) return null;
        return (
            <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        className={`text-lg ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
                    >
            ⭐
          </span>
                ))}
            </div>
        );
    };

    const getTotalSpent = () => {
        return tripHistory
            .filter(trip => trip.status === "completed")
            .reduce((total, trip) => total + trip.price, 0);
    };

    const getCompletedTrips = () => {
        return tripHistory.filter(trip => trip.status === "completed").length;
    };

    const handleViewDetails = (trip) => {
        setSelectedTrip(trip);
    };

    const handleBackToList = () => {
        setSelectedTrip(null);
    };

    // If a trip is selected, show the detail component
    if (selectedTrip) {
        return <TripDetail trip={selectedTrip} onBack={handleBackToList} />;
    }

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
                        ประวัติ 5 สถานที่ยอดนิยมที่คนเยอะ
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        ดูประวัติการจองสถานที่ยอดนิยมที่คนเยอะ พร้อมรีวิวและประสบการณ์จริง
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-orange-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">ทริปที่เสร็จสิ้น</p>
                                <p className="text-3xl font-bold text-gray-800">{getCompletedTrips()}</p>
                            </div>
                            <span className="text-4xl">🏆</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-amber-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">ยอดใช้จ่ายทั้งหมด</p>
                                <p className="text-3xl font-bold text-gray-800">฿{getTotalSpent().toLocaleString()}</p>
                            </div>
                            <span className="text-4xl">💰</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-yellow-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">ทริปทั้งหมด</p>
                                <p className="text-3xl font-bold text-gray-800">{tripHistory.length}</p>
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
                        เสร็จสิ้น ({tripHistory.filter(t => t.status === "completed").length})
                    </button>
                    <button
                        onClick={() => setFilter("upcoming")}
                        className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                            filter === "upcoming"
                                ? "bg-blue-500 text-white shadow-lg"
                                : "bg-white text-gray-600 hover:bg-blue-50 border border-gray-200"
                        }`}
                    >
                        กำลังจะมาถึง ({tripHistory.filter(t => t.status === "upcoming").length})
                    </button>
                    <button
                        onClick={() => setFilter("cancelled")}
                        className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                            filter === "cancelled"
                                ? "bg-red-500 text-white shadow-lg"
                                : "bg-white text-gray-600 hover:bg-orange-50 border border-gray-200"
                        }`}
                    >
                        ยกเลิก ({tripHistory.filter(t => t.status === "cancelled").length})
                    </button>
                </div>

                {/* History Cards */}
                <div className="space-y-6">
                    {filteredHistory.map((trip, index) => (
                        <div
                            key={trip.id}
                            className="group bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
                            style={{
                                animationDelay: `${index * 0.1}s`
                            }}
                        >
                            <div className="flex flex-col lg:flex-row">
                                {/* Image Section */}
                                <div className="lg:w-1/3 relative overflow-hidden">
                                    <img
                                        src={trip.image}
                                        alt={trip.tripName}
                                        className="h-64 lg:h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${statusConfig[trip.status].color}`}>
                      {statusConfig[trip.status].icon} {statusConfig[trip.status].label}
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
                                                <span className="text-gray-700">{new Date(trip.bookedDate).toLocaleDateString('th-TH')}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1">วันที่เดินทาง</p>
                                            <div className="flex items-center gap-2">
                                                <span className="text-orange-500">✈️</span>
                                                <span className="text-gray-700">{trip.travelDates}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Rating and Review Section */}
                                    {trip.status === "completed" && (
                                        <div className="border-t border-gray-100 pt-6">
                                            <div className="flex items-center gap-4 mb-3">
                                                <span className="text-sm font-medium text-gray-600">การให้คะแนน:</span>
                                                {renderStars(trip.rating)}
                                                <span className="text-sm text-gray-500">({trip.rating}/5)</span>
                                            </div>
                                            {trip.review && (
                                                <div className="bg-gray-50 rounded-xl p-4">
                                                    <p className="text-sm text-gray-600 leading-relaxed italic">
                                                        "{trip.review}"
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Action Buttons */}
                                    <div className="flex flex-wrap gap-3 mt-6">
                                        <button
                                            onClick={() => handleViewDetails(trip)}
                                            className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl transition-colors duration-300 text-sm font-medium"
                                        >
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
                        <h3 className="text-2xl font-bold text-gray-600 mb-2">ไม่พบประวัติการเดินทาง</h3>
                        <p className="text-gray-500">ลองเปลี่ยนตัวกรองหรือเริ่มต้นการเดินทางใหม่กับเรา</p>
                    </div>
                )}
            </div>
        </div>
    );
}

// Trip Detail Component
function TripDetail({ trip, onBack }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeTab, setActiveTab] = useState("overview");

    // Detail data for each trip
    const tripDetails = {
        1: { // Bangkok Temple Tour
            images: [
                "https://images.unsplash.com/photo-1563492065273-da72a14139cd?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1568901839939-d73fa4b6c98a?auto=format&fit=crop&w=800&q=80"
            ],
            description: "สัมผัสความศักดิ์สิทธิ์ของวัดพระแก้วและพระบรมมหาราชวัง ชมสถาปัตยกรรมไทยล้านนา และเรียนรู้ประวัติศาสตร์ไทยโบราณ",
            highlights: [
                "เยี่ยมชมวัดพระแก้วและพระบรมมหาราชวัง",
                "ชมพระพุทธมรกต อันศักดิ์สิทธิ์",
                "เรียนรู้ประวัติศาสตร์และวัฒนธรรมไทย",
                "ถ่ายรูปกับสถาปัตยกรรมไทยโบราณ",
                "ช้อปปิ้งของที่ระลึกบริเวณวัด",
                "ลิ้มรสขนมไทยแท้ๆ ริมถนนหน้าพระลาน"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "วันแรก - วัดพระแก้วและพระบรมมหาราชวัง",
                    activities: [
                        "เช้า: รวมพล ณ ป้อมสามเสน",
                        "09:00: เดินทางสู่วัดพระแก้ว",
                        "10:00: ชมพระพุทธมรกตและพระที่นั่งต่างๆ",
                        "เที่ยง: รับประทานอาหารกลางวัน ณ ร้านอาหารใกล้วัด",
                        "บ่าย: เยี่ยมชมพระบรมมหาราชวัง",
                        "16:00: ช้อปปิ้งของที่ระลึก",
                        "17:00: เดินทางกลับ"
                    ]
                }
            ],
            includes: [
                "รถรับ-ส่ง แอร์ปรับอากาศ",
                "ค่าเข้าชมวัดพระแก้วและพระบรมมหาราชวัง",
                "ไกด์ท้องถิ่นมืออาชีพ",
                "อาหารกลางวัน 1 มื้อ",
                "น้ำดื่มตลอดทริป",
                "ประกันการเดินทาง"
            ],
            hotel: {
                name: "โรงแรมริเวอร์ไซด์ กรุงเทพ",
                rating: 4.5,
                address: "257 ถนนเจริญกรุง เขตบางรัก กรุงเทพฯ 10500",
                facilities: ["WiFi ฟรี", "สระว่ายน้ำ", "ฟิตเนส", "ร้านอาหาร", "บาร์"]
            }
        },
        2: { // Floating Market Experience
            images: [
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1563492065273-da72a14139cd?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1568901839939-d73fa4b6c98a?auto=format&fit=crop&w=800&q=80"
            ],
            description: "สัมผัสประสบการณ์ตลาดน้ำดำเนินสะดวก ล่องเรือชมวิถีชีวิตริมคลอง ลิ้มรสผลไม้สดและขนมไทยแท้",
            highlights: [
                "ล่องเรือชมตลาดน้ำดำเนินสะดวก",
                "ซื้อผลไม้สดจากเรือแม่ค้า",
                "ลิ้มรสขนมไทยโบราณ",
                "ชมวิถีชีวิตริมคลอง",
                "ถ่ายรูปกับบรรยากาศตลาดน้ำ",
                "เรียนรู้วัฒนธรรมไทยด้านการค้าขาย"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "วันแรก - ตลาดน้ำดำเนินสะดวก",
                    activities: [
                        "เช้า: รวมพล ณ จุดนัดหมาย กรุงเทพฯ",
                        "08:00: เดินทางสู่จังหวัดราชบุรี",
                        "10:00: มาถึงตลาดน้ำดำเนินสะดวก",
                        "10:30: ล่องเรือชมตลาดน้ำ",
                        "เที่ยง: รับประทานอาหารกลางวัน ณ ร้านอาหารริมน้ำ",
                        "บ่าย: ช้อปปิ้งของฝากและผลไม้",
                        "15:00: เดินทางกลับกรุงเทพฯ"
                    ]
                }
            ],
            includes: [
                "รถรับ-ส่ง แอร์ปรับอากาศ",
                "ค่าเรือชมตลาดน้ำ",
                "ไกด์ท้องถิ่นมืออาชีพ",
                "อาหารกลางวัน 1 มื้อ",
                "ผลไม้สดตามฤดูกาล",
                "ประกันการเดินทาง"
            ],
            hotel: {
                name: "โรงแรมริเวอร์แคว รีสอร์ท",
                rating: 4.0,
                address: "123 หมู่ 5 ตำบลดำเนินสะดวก อำเภอดำเนินสะดวก ราชบุรี 70130",
                facilities: ["WiFi ฟรี", "สระว่ายน้ำ", "ร้านอาหาร", "ริมแม่น้ำ", "สวนสวย"]
            }
        },
        3: { // Erawan Waterfall Adventure
            images: [
                "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1568901839939-d73fa4b6c98a?auto=format&fit=crop&w=800&q=80"
            ],
            description: "ผจญภัยในป่าเขาใหญ่ ล่องแก่งแม่น้ำแคว เดินป่าชมน้ำตกเอราวัณ 7 ชั้น และแช่น้ำในบ่อน้ำใสสีฟ้าธรรมชาติ",
            highlights: [
                "เดินป่าชมน้ำตกเอราวัณ 7 ชั้น",
                "แช่น้ำในบ่อน้ำใสสีฟ้าธรรมชาติ",
                "ถ่ายรูปกับธรรมชาติสวยงาม",
                "เดินศึกษาธรรมชาติในอุทยานแห่งชาติ",
                "ชมสัตว์ป่าและนกนานาชนิด",
                "ปิกนิกท่ามกลางธรรมชาติ"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "วันแรก - น้ำตกเอราวัณ",
                    activities: [
                        "เช้า: รวมพล ณ จุดนัดหมาย กรุงเทพฯ",
                        "07:00: เดินทางสู่จังหวัดกาญจนบุรี",
                        "09:30: มาถึงอุทยานแห่งชาติเอราวัณ",
                        "10:00: เริ่มเดินป่าชมน้ำตกเอราวัณ",
                        "เที่ยง: รับประทานอาหารกลางวัน ณ ร้านอาหารในอุทยาน",
                        "บ่าย: แช่น้ำและผ่อนคลายในธรรมชาติ",
                        "16:00: เดินทางกลับกรุงเทพฯ"
                    ]
                }
            ],
            includes: [
                "รถรับ-ส่ง แอร์ปรับอากาศ",
                "ค่าเข้าอุทยานแห่งชาติเอราวัณ",
                "ไกด์ท้องถิ่นมืออาชีพ",
                "อาหารกลางวัน 1 มื้อ",
                "อุปกรณ์ปฐมพยาบาล",
                "ประกันการเดินทาง"
            ],
            hotel: {
                name: "เอราวัณ เนเจอร์ รีสอร์ท",
                rating: 4.3,
                address: "999 หมู่ 8 ตำบลท่าเรือ อำเภอศรีสวัสดิ์ กาญจนบุรี 71250",
                facilities: ["WiFi ฟรี", "สระว่ายน้ำ", "ร้านอาหาร", "วิวภูเขา", "สวนป่า"]
            }
        },
        4: { // Railay Beach Paradise
            images: [
                "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80"
            ],
            description: "พักผ่อนบนหาดไร่เลย์สุดสวย ชมหินปูนสูงตระหง่าน ดำน้ำดูปะการัง และชมพระอาทิตย์ตกสุดโรแมนติก",
            highlights: [
                "พักผ่อนบนหาดไร่เลย์อันงดงาม",
                "ปีนเขาชมวิวสุดฟิน",
                "ดำน้ำดูปะการังหลากสี",
                "ชมพระอาทิตย์ตกสุดโรแมนติก",
                "ล่องเรือหางยาวชมเกาะแก่ง",
                "ถ่ายรูปกับหินปูนสูงตระหง่าน"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "วันแรก - เดินทางและพักผ่อน",
                    activities: [
                        "เช้า: เดินทางถึงจังหวัดกระบี่",
                        "10:00: ล่องเรือหางยาวสู่หาดไร่เลย์",
                        "11:00: เช็คอินที่พัก",
                        "เที่ยง: รับประทานอาหารกลางวัน ณ ร้านอาหารริมหาด",
                        "บ่าย: พักผ่อนบนหาดไร่เลย์",
                        "เย็น: ชมพระอาทิตย์ตกและรับประทานอาหารเย็น"
                    ]
                },
                {
                    day: 2,
                    title: "วันที่สอง - กิจกรรมทางน้ำ",
                    activities: [
                        "เช้า: อาหารเช้าที่โรงแรม",
                        "09:00: ดำน้ำดูปะการัง",
                        "เที่ยง: รับประทานอาหารกลางวัน บนเกาะ",
                        "บ่าย: ปีนเขาชมวิว (สำหรับผู้ที่สนใจ)",
                        "เย็น: พักผ่อนและอาหารเย็น"
                    ]
                }
            ],
            includes: [
                "ที่พักริมหาด 2 คืน",
                "อาหารเช้าทุกวัน",
                "เรือหางยาวรับ-ส่ง",
                "อุปกรณ์ดำน้ำ",
                "ไกด์ท้องถิ่นมืออาชีพ",
                "ประกันการเดินทาง"
            ],
            hotel: {
                name: "ไร่เลย์ บีช รีสอร์ท",
                rating: 4.8,
                address: "214 หมู่ 2 ตำบลอ่าวนาง อำเภอเมือง กระบี่ 81000",
                facilities: ["WiFi ฟรี", "สระว่ายน้ำ", "ร้านอาหาร", "สปา", "วิวทะเล"]
            }
        },
        5: { // Khao Yai National Park
            images: [
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1568901839939-d73fa4b6c98a?auto=format&fit=crop&w=800&q=80"
            ],
            description: "สัมผัสธรรมชาติป่าเขาใหญ่ ชมน้ำตกเหวนรก เดินป่าดูสัตว์ป่า และพักผ่อนในอากาศเย็นสบาย",
            highlights: [
                "เดินป่าดูสัตว์ป่าในเขาใหญ่",
                "ชมน้ำตกเหวนรกสุดตระการตา",
                "ปิกนิกท่ามกลางธรรมชาติ",
                "ถ่ายรูปกับทิวทัศน์ภูเขา",
                "ชมดาวบนท้องฟ้าใส",
                "สูดอากาศเย็นสบายในป่า"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "วันแรก - เขาใหญ่และน้ำตก",
                    activities: [
                        "เช้า: รวมพล ณ จุดนัดหมาย กรุงเทพฯ",
                        "08:00: เดินทางสู่อุทยานแห่งชาติเขาใหญ่",
                        "10:00: เดินป่าชมธรรมชาติ",
                        "เที่ยง: รับประทานอาหารกลางวัน ณ ร้านอาหารในอุทยาน",
                        "บ่าย: ชมน้ำตกเหวนรก",
                        "เย็น: พักผ่อนและรับประทานอาหารเย็น"
                    ]
                }
            ],
            includes: [
                "รถรับ-ส่ง แอร์ปรับอากาศ",
                "ค่าเข้าอุทยานแห่งชาติเขาใหญ่",
                "ไกด์ท้องถิ่นมืออาชีพ",
                "อาหารกลางวันและเย็น",
                "อุปกรณ์เดินป่า",
                "ประกันการเดินทาง"
            ],
            hotel: {
                name: "เขาใหญ่ การ์เด้น รีสอร์ท",
                rating: 4.2,
                address: "52 หมู่ 1 ตำบลมุสี อำเภอปากช่อง นครราชสีมา 30130",
                facilities: ["WiFi ฟรี", "สระว่ายน้ำ", "ร้านอาหาร", "วิวภูเขา", "อากาศเย็น"]
            }
        }
    };

    const currentTrip = tripDetails[trip.id] || tripDetails[1];

    const renderStars = (rating) => {
        return (
            <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        className={`text-lg ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
                    >
                        ⭐
                    </span>
                ))}
            </div>
        );
    };

    const tabs = [
        { id: "overview", label: "ภาพรวม", icon: "📋" },
        { id: "itinerary", label: "รายการท่องเที่ยว", icon: "📅" },
        { id: "accommodation", label: "ที่พัก", icon: "🏨" },
        { id: "reviews", label: "รีวิว", icon: "💬" }
    ];

    const reviews = [
        {
            id: 1,
            name: "สมชาย ใจดี",
            rating: 5,
            date: "2024-07-10",
            comment: "ทริปที่ยอดเยี่ยมมาก! ไกด์ดีมาก อาหารอร่อย สถานที่สวยงาม แนะนำเลยครับ"
        },
        {
            id: 2,
            name: "อนงค์ รักเที่ยว",
            rating: 4,
            date: "2024-07-08",
            comment: "โปรแกรมดีค่ะ แต่อยากให้เพิ่มเวลาในการถ่ายรูปมากกว่านี้"
        },
        {
            id: 3,
            name: "ธนพล เที่ยวไทย",
            rating: 5,
            date: "2024-07-06",
            comment: "ครั้งแรกที่มาที่นี่ ทีมงานดูแลดีมาก ได้ความรู้เยอะ คุ้มค่าเงินครับ"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
            <div className="max-w-7xl mx-auto py-8 px-6">
                {/* Back Button */}
                <button
                    onClick={onBack}
                    className="mb-6 flex items-center gap-2 text-orange-700 hover:text-orange-800 transition-colors group"
                >
                    <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
                    <span className="font-medium">กลับไปหน้าหลัก</span>
                </button>

                {/* Image Gallery */}
                <div className="mb-8">
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl mb-4">
                        <img
                            src={currentTrip.images[currentImageIndex]}
                            alt={`${trip.tripName} - Image ${currentImageIndex + 1}`}
                            className="w-full h-96 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                        {/* Image Navigation */}
                        <button
                            onClick={() => setCurrentImageIndex(prev => prev > 0 ? prev - 1 : currentTrip.images.length - 1)}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 transition-all duration-300"
                        >
                            ←
                        </button>
                        <button
                            onClick={() => setCurrentImageIndex(prev => prev < currentTrip.images.length - 1 ? prev + 1 : 0)}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 transition-all duration-300"
                        >
                            →
                        </button>

                        {/* Image Counter */}
                        <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                            {currentImageIndex + 1} / {currentTrip.images.length}
                        </div>
                    </div>

                    {/* Thumbnail Gallery */}
                    <div className="flex gap-2 overflow-x-auto pb-2">
                        {currentTrip.images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`flex-shrink-0 rounded-xl overflow-hidden border-4 transition-all duration-300 ${
                                    index === currentImageIndex ? "border-orange-600" : "border-transparent"
                                }`}
                            >
                                <img src={image} alt={`Thumbnail ${index + 1}`} className="w-20 h-20 object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Header Info */}
                <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                                <h1 className="text-4xl font-bold text-gray-800">{trip.tripName}</h1>
                                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                                    ✅ เสร็จสิ้น
                                </span>
                            </div>

                            <div className="flex items-center gap-4 text-gray-600 mb-4">
                                <div className="flex items-center gap-2">
                                    <span className="text-orange-500">📍</span>
                                    <span className="text-lg">{trip.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-orange-500">📅</span>
                                    <span>{trip.travelDates}</span>
                                </div>
                            </div>

                            <p className="text-gray-600 text-lg leading-relaxed">{currentTrip.description}</p>
                        </div>

                        <div className="lg:text-right">
                            <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-2xl p-6">
                                <div className="text-sm opacity-90 mb-1">ราคาที่จ่าย</div>
                                <div className="text-3xl font-bold mb-2">฿{trip.price.toLocaleString()}</div>
                                <div className="flex items-center gap-2 text-sm opacity-90">
                                    {renderStars(trip.rating)}
                                    <span>({trip.rating}/5)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs Navigation */}
                <div className="bg-white rounded-2xl shadow-lg mb-8 overflow-hidden">
                    <div className="flex flex-wrap border-b border-gray-200">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-6 py-4 font-medium transition-all duration-300 ${
                                    activeTab === tab.id
                                        ? "bg-orange-600 text-white border-b-2 border-orange-600"
                                        : "text-gray-600 hover:text-orange-600 hover:bg-orange-50"
                                }`}
                            >
                                <span>{tab.icon}</span>
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </div>

                    <div className="p-8">
                        {/* Overview Tab */}
                        {activeTab === "overview" && (
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">ไฮไลท์ของทริป</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {currentTrip.highlights.map((highlight, index) => (
                                            <div key={index} className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl">
                                                <span className="text-orange-500 text-lg mt-1">✨</span>
                                                <span className="text-gray-700">{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                            <span className="text-green-500">✅</span> รวมในราคา
                                        </h3>
                                        <ul className="space-y-2">
                                            {currentTrip.includes.map((item, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <span className="text-green-500 mt-1">✓</span>
                                                    <span className="text-gray-700">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Itinerary Tab */}
                        {activeTab === "itinerary" && (
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">รายการการเดินทาง</h3>
                                {currentTrip.itinerary.map((day, index) => (
                                    <div key={day.day} className="border-l-4 border-orange-400 pl-6 pb-8">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                                                {day.day}
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-800">{day.title}</h4>
                                        </div>
                                        <ul className="space-y-2 ml-13">
                                            {day.activities.map((activity, actIndex) => (
                                                <li key={actIndex} className="flex items-start gap-3">
                                                    <span className="text-orange-500 mt-1">•</span>
                                                    <span className="text-gray-700">{activity}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Accommodation Tab */}
                        {activeTab === "accommodation" && (
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">ข้อมูลที่พัก</h3>
                                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6">
                                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-3">
                                                <h4 className="text-2xl font-bold text-gray-800">{currentTrip.hotel.name}</h4>
                                                <div className="flex items-center gap-1">
                                                    {renderStars(Math.floor(currentTrip.hotel.rating))}
                                                    <span className="text-gray-600 ml-1">({currentTrip.hotel.rating})</span>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-2 mb-4">
                                                <span className="text-orange-500 mt-1">📍</span>
                                                <span className="text-gray-700">{currentTrip.hotel.address}</span>
                                            </div>

                                            <div>
                                                <h5 className="font-semibold text-gray-800 mb-3">สิ่งอำนวยความสะดวก</h5>
                                                <div className="flex flex-wrap gap-2">
                                                    {currentTrip.hotel.facilities.map((facility, index) => (
                                                        <span key={index} className="px-3 py-1 bg-white text-orange-700 rounded-full text-sm border border-orange-200">
                                                            {facility}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Reviews Tab */}
                        {activeTab === "reviews" && (
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">รีวิวจากนักท่องเที่ยว</h3>
                                <div className="space-y-6">
                                    {reviews.map((review) => (
                                        <div key={review.id} className="bg-gray-50 rounded-2xl p-6">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                                                        {review.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <h5 className="font-semibold text-gray-800">{review.name}</h5>
                                                        <div className="flex items-center gap-2">
                                                            {renderStars(review.rating)}
                                                            <span className="text-sm text-gray-500">{review.date}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-gray-700 leading-relaxed italic">"{review.comment}"</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                            จองทริปนี้อีกครั้ง
                        </button>
                        <button className="px-8 py-4 bg-white border-2 border-orange-600 text-orange-600 hover:bg-orange-50 rounded-2xl font-semibold transition-all duration-300">
                            แชร์ให้เพื่อน
                        </button>
                        <button className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-2xl font-semibold transition-all duration-300">
                            บันทึกเป็นรายการโปรด
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}