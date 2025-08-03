"use client";

import React from "react";
import Link from "next/link";

interface TimelineEntry {
    day: number;
    time: string;
    location: string;
    description: string;
}

interface TripItineraryResponse {
    overview: string;
    accommodations: string;
    dining: string;
    transportation: string;
    bestTimeToVisit: string;
    budgetEstimation: string;
    culturalTips: string;
    packingList: string;
    safetyTips: string;
    timeline: TimelineEntry[];
}

interface TripPlannerResponse {
    success: boolean;
    data?: {
        result: string;
        timeline?: TimelineEntry[];
        structuredData?: TripItineraryResponse;
        location?: string;
        type?: string;
        lang?: string;
        prompt_generated?: string;
    };
    error?: string;
    message?: string;
}

export default function TripResults() {
    const [data, setData] = React.useState<TripPlannerResponse | null>(null);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        // Read data from sessionStorage
        try {
            const storedData = sessionStorage.getItem('tripPlannerData');
            if (storedData) {
                const parsedData = JSON.parse(storedData);
                setData(parsedData);
            }
        } catch (error) {
            console.error("Error parsing stored data:", error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <div className="max-w-2xl w-full space-y-8 p-10 rounded-2xl shadow-lg bg-white/90 border border-blue-100">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#A54141] mx-auto mb-4"></div>
                        <h1 className="text-2xl font-light text-[#A54141] mb-4">Loading Results...</h1>
                    </div>
                </div>
            </div>
        );
    }

    if (!data || !data.success) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <div className="max-w-2xl w-full space-y-8 p-10 rounded-2xl shadow-lg bg-white/90 border border-blue-100">
                    <div className="text-center">
                        <h1 className="text-2xl font-light text-red-500 mb-4">No Results Found</h1>
                        <p className="text-gray-600 mb-6">Unable to load trip results. Please try again.</p>
                        <Link
                            href="/trip-planner"
                            className="inline-flex items-center px-6 py-3 rounded-lg bg-[#A54141] text-white font-medium hover:bg-[#A54141]/80 transition"
                        >
                            ← Back to Trip Planner
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-3xl font-light text-[#A54141] tracking-tight">
                        Your Trip to {data.data?.location || "Destination"}
                    </h1>
                    <p className="text-gray-600">
                        {data.data?.type && `Type: ${data.data.type}`}
                    </p>
                    <Link
                        href="/trip-planner"
                        className="inline-flex items-center px-4 py-2 rounded-lg bg-[#A54141] text-white font-medium hover:bg-[#A54141]/80 transition"
                    >
                        ← Plan Another Trip
                    </Link>
                </div>

                {/* Overview */}
                {data.data?.structuredData?.overview && (
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#A54141]/20">
                        <h2 className="text-2xl font-medium text-[#A54141] mb-4">Trip Overview</h2>
                        <p className="text-gray-700 leading-relaxed">{data.data.structuredData.overview}</p>
                    </div>
                )}

                {/* Timeline */}
                {data.data?.timeline && data.data.timeline.length > 0 && (
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#A54141]/20">
                        <h2 className="text-2xl font-medium text-[#A54141] mb-6">Your Itinerary</h2>
                        <div className="space-y-4">
                            {data.data.timeline.map((item, index) => (
                                <div key={index} className="flex gap-4 p-4 bg-[#A54141]/10 rounded-lg border border-[#A54141]/20">
                                    <div className="flex-shrink-0 w-20 text-center">
                                        <div className="font-bold text-[#A54141]">Day {item.day}</div>
                                        <div className="text-sm text-[#A54141]/80">{item.time}</div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-medium text-gray-800 mb-1">{item.location}</div>
                                        <p className="text-gray-600 text-sm">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Trip Details Grid */}
                {data.data?.structuredData && (
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Budget */}
                        {data.data.structuredData.budgetEstimation && (
                            <div className="bg-white rounded-2xl shadow-lg p-6 border border-yellow-100">
                                <h3 className="text-xl font-medium text-yellow-700 mb-3">💰 Budget Estimation</h3>
                                <p className="text-gray-700">{data.data.structuredData.budgetEstimation}</p>
                            </div>
                        )}

                        {/* Accommodations */}
                        {data.data.structuredData.accommodations && (
                            <div className="bg-white rounded-2xl shadow-lg p-6 border border-purple-100">
                                <h3 className="text-xl font-medium text-purple-700 mb-3">🏨 Accommodations</h3>
                                <p className="text-gray-700">{data.data.structuredData.accommodations}</p>
                            </div>
                        )}

                        {/* Dining */}
                        {data.data.structuredData.dining && (
                            <div className="bg-white rounded-2xl shadow-lg p-6 border border-orange-100">
                                <h3 className="text-xl font-medium text-orange-700 mb-3">🍽️ Dining</h3>
                                <p className="text-gray-700">{data.data.structuredData.dining}</p>
                            </div>
                        )}

                        {/* Transportation */}
                        {data.data.structuredData.transportation && (
                            <div className="bg-white rounded-2xl shadow-lg p-6 border border-indigo-100">
                                <h3 className="text-xl font-medium text-indigo-700 mb-3">🚗 Transportation</h3>
                                <p className="text-gray-700">{data.data.structuredData.transportation}</p>
                            </div>
                        )}

                        {/* Best Time to Visit */}
                        {data.data.structuredData.bestTimeToVisit && (
                            <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100">
                                <h3 className="text-xl font-medium text-green-700 mb-3">📅 Best Time to Visit</h3>
                                <p className="text-gray-700">{data.data.structuredData.bestTimeToVisit}</p>
                            </div>
                        )}

                        {/* Cultural Tips */}
                        {data.data.structuredData.culturalTips && (
                            <div className="bg-white rounded-2xl shadow-lg p-6 border border-red-100">
                                <h3 className="text-xl font-medium text-red-700 mb-3">🎭 Cultural Tips</h3>
                                <p className="text-gray-700">{data.data.structuredData.culturalTips}</p>
                            </div>
                        )}
                    </div>
                )}

                {/* Additional Information */}
                {data.data?.structuredData && (
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Packing List */}
                        {data.data.structuredData.packingList && (
                            <div className="bg-white rounded-2xl shadow-lg p-6 border border-teal-100">
                                <h3 className="text-xl font-medium text-teal-700 mb-3">🎒 Packing List</h3>
                                <p className="text-gray-700">{data.data.structuredData.packingList}</p>
                            </div>
                        )}

                        {/* Safety Tips */}
                        {data.data.structuredData.safetyTips && (
                            <div className="bg-white rounded-2xl shadow-lg p-6 border border-amber-100">
                                <h3 className="text-xl font-medium text-amber-700 mb-3">🛡️ Safety Tips</h3>
                                <p className="text-gray-700">{data.data.structuredData.safetyTips}</p>
                            </div>
                        )}
                    </div>
                )}

                {/* Footer */}
                <div className="text-center py-8">
                    <Link
                        href="/trip-planner"
                        className="inline-flex items-center px-6 py-3 rounded-lg bg-[#A54141] text-white font-medium hover:bg-[#A54141]/80 transition"
                    >
                        ← Plan Another Trip
                    </Link>
                </div>
            </div>
        </div>
    );
} 