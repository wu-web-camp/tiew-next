"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useTripPlanner } from "@/hooks/useTripPlanner";

export default function TripPlanner() {
  const router = useRouter();
  const { mutate, data } = useTripPlanner();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const location = formData.get("destination") as string;
    const type = formData.get("interests") as string || "general";
    const lang = "th"; // Default to Thai as per the hook

    mutate.mutate({ location, type, lang });
  };

  // Navigate to results page when data is available
  React.useEffect(() => {
    if (data && data.success) {
      // Store data in sessionStorage instead of URL parameters
      sessionStorage.setItem('tripPlannerData', JSON.stringify(data));
      router.push('/trip-planner/results');
    }
  }, [data, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="max-w-md w-full space-y-8 p-10 rounded-2xl shadow-lg bg-white/90 border border-[#A54141]/20">
        <h1 className="text-2xl font-light text-[#A54141] text-center mb-8 tracking-tight">Plan your next trip</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="destination" className="block text-sm font-medium text-[#A54141] mb-1">Destination</label>
            <input
              id="destination"
              name="destination"
              type="text"
              required
              className="mt-1 block w-full rounded-lg border border-[#A54141]/20 bg-[#A54141]/5 px-4 py-2 text-gray-700 focus:ring-2 focus:ring-[#A54141]/20 focus:border-[#A54141]/40 outline-none transition"
            />
          </div>
          <div>
            <label htmlFor="interests" className="block text-sm font-medium text-[#A54141] mb-1">Interests</label>
            <input
              id="interests"
              name="interests"
              type="text"
              placeholder="e.g. nature, food, history"
              className="mt-1 block w-full rounded-lg border border-[#A54141]/20 bg-[#A54141]/5 px-4 py-2 text-gray-700 focus:ring-2 focus:ring-[#A54141]/20 focus:border-[#A54141]/40 outline-none transition"
            />
          </div>
          <button
            type="submit"
            disabled={mutate.isPending}
            className="w-full flex justify-center py-2 px-4 rounded-lg bg-[#A54141] text-white font-medium hover:bg-[#A54141]/80 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {mutate.isPending ? "Creating Trip Plan..." : "Create Trip Plan"}
          </button>
        </form>

        {/* Loading State */}
        {mutate.isPending && (
          <div className="mt-6 p-4 bg-[#A54141]/10 rounded-lg">
            <div className="text-center text-[#A54141]">Loading your trip plan...</div>
          </div>
        )}

        {/* Error State */}
        {mutate.isError && (
          <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
            <div className="text-red-600">Error: {mutate.error.message}</div>
          </div>
        )}
      </div>
    </div>
  );
} 
