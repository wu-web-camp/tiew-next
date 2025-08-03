import React from "react";

export default function TripPlanner() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-10 rounded-2xl shadow-lg bg-white/90 border border-blue-100">
        <h1 className="text-2xl font-light text-blue-500 text-center mb-8 tracking-tight">Plan your next tri onpen pr</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="start" className="block text-sm font-medium text-blue-400 mb-1">Starting Location</label>
            <input id="start" name="start" type="text" required className="mt-1 block w-full rounded-lg border border-blue-100 bg-blue-50/50 px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-200 focus:border-blue-300 outline-none transition" />
          </div>
          <div>
            <label htmlFor="destination" className="block text-sm font-medium text-blue-400 mb-1">Destination</label>
            <input id="destination" name="destination" type="text" required className="mt-1 block w-full rounded-lg border border-blue-100 bg-blue-50/50 px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-200 focus:border-blue-300 outline-none transition" />
          </div>
          <div>
            <label htmlFor="days" className="block text-sm font-medium text-blue-400 mb-1">Number of Days</label>
            <input id="days" name="days" type="number" min="1" required className="mt-1 block w-full rounded-lg border border-blue-100 bg-blue-50/50 px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-200 focus:border-blue-300 outline-none transition" />
          </div>
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-blue-400 mb-1">Budget</label>
            <input id="budget" name="budget" type="number" min="0" required className="mt-1 block w-full rounded-lg border border-blue-100 bg-blue-50/50 px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-200 focus:border-blue-300 outline-none transition" />
          </div>
          <div>
            <label htmlFor="interests" className="block text-sm font-medium text-blue-400 mb-1">Interests</label>
            <input id="interests" name="interests" type="text" placeholder="e.g. nature, food, history" className="mt-1 block w-full rounded-lg border border-blue-100 bg-blue-50/50 px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-200 focus:border-blue-300 outline-none transition" />
          </div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 rounded-lg bg-blue-400/90 text-white font-medium hover:bg-blue-500 transition">Create Trip Plan</button>
        </form>
      </div>
    </div>
  );
} 