"use client";
import React, { useState } from "react";

    const tripDetail = {
        id: 1,
        name: "Bangkok Adventure",
        location: "Bangkok, Thailand",
        dates: "2024-07-01 to 2024-07-05",
        price: 12000,
        originalPrice: 15000,
        discount: 20,
        status: "completed",
        images: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1563492065910-4bfb35b4b8d8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1568901839939-d73fa4b6c98a?auto=format&fit=crop&w=800&q=80"
        ],
        description: "สัมผัสเสน่ห์ของกรุงเทพมหานครที่ผสมผสานความทันสมัยและวัฒนธรรมดั้งเดิมเข้าด้วยกัน ท่องเที่ยววัดสวยงาม ลิ้มรสอาหารแสนอร่อย และช้อปปิ้งในตลาดนัดสุดฮิต",
        highlights: [
        "เยี่ยมชมวัดพระเเก้ว และพระบรมมหาราชวัง",
        "ล่องเรือชมคลองในย่านธนบุรี",
        "ช้อปปิ้งที่ตลาดนัดจตุจักร",
        "ลิ้มรสอาหารไทยต้นตำรับที่ข้าวสาร",
        "ชมการแสดงลิงโชว์ที่สวนลุมพินี",
        "นวดผ่อนคลายสปาไทยแท้"
        ],
        itinerary: [
    {
        day: 1,
        title: "วันแรก - มาถึงและท่องเที่ยวย่านสยาม",
        activities: [
        "เช้า: เดินทางมาถึงกรุงเทพฯ",
        "บ่าย: เช็คอินโรงแรม + ท่องเที่ยว Siam Paragon",
        "เย็น: ดินเนอร์ที่ร้านอาหารไทยต้นตำรับ"
        ]
    },
    {
        day: 2,
        title: "วันที่สอง - วัฒนธรรมและวัดวาอาราม",
        activities: [
        "เช้า: เยี่ยมชมวัดพระแก้วและพระบรมมหาราชวัง",
        "บ่าย: ล่องเรือชมคลองในย่านธนบุรี",
        "เย็น: ช้อปปิ้งที่ Asiatique Riverfront"
        ]
    },
    {
        day: 3,
        title: "วันที่สาม - ตลาดและอาหาร",
        activities: [
        "เช้า: ช้อปปิ้งที่ตลาดนัดจตุจักร",
        "บ่าย: Food Tour ย่านข้าวสาร",
        "เย็น: นวดแผนไทยที่สปา"
        ]
    },
    {
        day: 4,
        title: "วันที่สี่ - ธรรมชาติและการผ่อนคลาย",
        activities: [
        "เช้า: เดินชมสวนลุมพินี",
        "บ่าย: ช้อปปิ้งที่ Terminal 21",
        "เย็น: Rooftop Bar ชมวิวกรุงเทพฯ"
        ]
    },
    {
        day: 5,
        title: "วันสุดท้าย - ช้อปปิ้งและเดินทางกลับ",
        activities: [
        "เช้า: ช้อปปิ้งของฝากที่ MBK Center",
        "บ่าย: เช็คเอาท์และเดินทางกลับ"
        ]
    }
        ],
        includes: [
        "ที่พักโรงแรม 4 ดาว 4 คืน",
        "อาหารเช้า ทุกวัน",
        "รถรับ-ส่ง สนามบิน",
        "ไกด์ท้องถิ่นมืออาชีพ",
        "ค่าเข้าชมสถานที่ทั้งหมด",
        "ประกันการเดินทาง"
        ],
        excludes: [
        "ตั๋วเครื่องบิน",
        "อาหารกลางวันและเย็น",
        "ค่าใช้จ่ายส่วนตัว",
        "ทิปไกด์และคนขับรถ"
        ],
        hotel: {
        name: "Bangkok Grand Palace Hotel",
        rating: 4.5,
        address: "123 พระราชวัง ถนนหน้าพระลาน เขตพระนคร กรุงเทพฯ",
        facilities: ["WiFi ฟรี", "สระว่ายน้ำ", "ฟิตเนส", "สปา", "ร้านอาหาร"]
    },
        reviews: [
    {
        id: 1,
        name: "สมชาย ใจดี",
        rating: 5,
        date: "2024-07-10",
        comment: "ทริปที่ยอดเยี่ยมมาก! ไกด์ดีมาก อาหารอร่อย วัดสวยงาม แนะนำเลยครับ"
    },
    {
        id: 2,
        name: "อนงค์ รักเที่ยว",
        rating: 4,
        date: "2024-07-08",
        comment: "โปรแกรมดีค่ะ แต่อยากให้เพิ่มเวลาในการช้อปปิ้งมากกว่านี้"
    },
    {
        id: 3,
        name: "ธนพล เที่ยวไทย",
        rating: 5,
        date: "2024-07-06",
        comment: "ครั้งแรกที่มากรุงเทพ ทีมงานดูแลดีมาก ได้ความรู้เยอะ คุ้มค่าเงินครับ"
    }
        ]
    };

    export default function TripDetail() {
        const [currentImageIndex, setCurrentImageIndex] = useState(0);
        const [activeTab, setActiveTab] = useState("overview");

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

return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto py-8 px-6">
            {/* Back Button */}
            <button className="mb-6 flex items-center gap-2 text-orange-700 hover:text-orange-800 transition-colors">
                <span className="text-xl">←</span>
                <span className="font-medium">กลับไปหน้าหลัก</span>
            </button>

            {/* Image Gallery */}
            <div className="mb-8">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl mb-4">
                    <img
                        src={tripDetail.images[currentImageIndex]}
                        alt={`${tripDetail.name} - Image ${currentImageIndex + 1}`}
                        className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Image Navigation */}
                    <button
                        onClick={() => setCurrentImageIndex(prev => prev > 0 ? prev - 1 : tripDetail.images.length - 1)}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 transition-all duration-300"
                    >
                        ←
                    </button>
                    <button
                        onClick={() => setCurrentImageIndex(prev => prev < tripDetail.images.length - 1 ? prev + 1 : 0)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 transition-all duration-300"
                    >
                        →
                    </button>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                        {currentImageIndex + 1} / {tripDetail.images.length}
                    </div>
                </div>

                {/* Thumbnail Gallery */}
                <div className="flex gap-2 overflow-x-auto pb-2">
                    {tripDetail.images.map((image, index) => (
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
                            <h1 className="text-4xl font-bold text-gray-800">{tripDetail.name}</h1>
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  ✅ เสร็จสิ้น
                </span>
                        </div>

                        <div className="flex items-center gap-4 text-gray-600 mb-4">
                            <div className="flex items-center gap-2">
                                <span className="text-orange-500">📍</span>
                                <span className="text-lg">{tripDetail.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-orange-500">📅</span>
                                <span>{tripDetail.dates}</span>
                            </div>
                        </div>

                        <p className="text-gray-600 text-lg leading-relaxed">{tripDetail.description}</p>
                    </div>

                    <div className="lg:text-right">
                        <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-2xl p-6">
                            <div className="text-sm opacity-90 mb-1">ราคาพิเศษ</div>
                            <div className="text-3xl font-bold mb-2">฿{tripDetail.price.toLocaleString()}</div>
                            <div className="text-sm opacity-90">
                                <span className="line-through">฿{tripDetail.originalPrice.toLocaleString()}</span>
                                <span className="ml-2 bg-white/20 px-2 py-1 rounded-full">
                    -{tripDetail.discount}%
                  </span>
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
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">ไhighlights ของทริป</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {tripDetail.highlights.map((highlight, index) => (
                                        <div key={index} className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl">
                                            <span className="text-red-500 text-lg mt-1">✨</span>
                                            <span className="text-gray-700">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                        <span className="text-green-500">✅</span> รวมในราคา
                                    </h3>
                                    <ul className="space-y-2">
                                        {tripDetail.includes.map((item, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <span className="text-green-500 mt-1">✓</span>
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                        <span className="text-red-500">❌</span> ไม่รวมในราคา
                                    </h3>
                                    <ul className="space-y-2">
                                        {tripDetail.excludes.map((item, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <span className="text-red-500 mt-1">✗</span>
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
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">รายการการเดินทาง 5 วัน 4 คืน</h3>
                            {tripDetail.itinerary.map((day, index) => (
                                <div key={day.day} className="border-l-4 border-red-400 pl-6 pb-8">
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
                                            <h4 className="text-2xl font-bold text-gray-800">{tripDetail.hotel.name}</h4>
                                            <div className="flex items-center gap-1">
                                                {renderStars(Math.floor(tripDetail.hotel.rating))}
                                                <span className="text-gray-600 ml-1">({tripDetail.hotel.rating})</span>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-2 mb-4">
                                            <span className="text-orange-500 mt-1">📍</span>
                                            <span className="text-gray-700">{tripDetail.hotel.address}</span>
                                        </div>

                                        <div>
                                            <h5 className="font-semibold text-gray-800 mb-3">สิ่งอำนวยความสะดวก</h5>
                                            <div className="flex flex-wrap gap-2">
                                                {tripDetail.hotel.facilities.map((facility, index) => (
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
                                {tripDetail.reviews.map((review) => (
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