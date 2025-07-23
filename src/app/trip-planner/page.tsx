import React from "react";

export default function TripPlanner() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-8 rounded shadow bg-white dark:bg-gray-900">
        <h1 className="text-2xl font-bold text-center mb-6">Trip Planner</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="start" className="block text-sm font-medium text-gray-700 dark:text-gray-200">สถานที่เริ่มต้น (Starting Location)</label>
            <input id="start" name="start" type="text" required className="mt-1 block w-full rounded border-gray-300 dark:border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100" />
          </div>
          <div>
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700 dark:text-gray-200">จุดหมาย (Destination)</label>
            <input id="destination" name="destination" type="text" required className="mt-1 block w-full rounded border-gray-300 dark:border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100" />
          </div>
          <div>
            <label htmlFor="days" className="block text-sm font-medium text-gray-700 dark:text-gray-200">จำนวนวัน (Number of Days)</label>
            <input id="days" name="days" type="number" min="1" required className="mt-1 block w-full rounded border-gray-300 dark:border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100" />
          </div>
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-200">งบประมาณ (Budget)</label>
            <input id="budget" name="budget" type="number" min="0" required className="mt-1 block w-full rounded border-gray-300 dark:border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100" />
          </div>
          <div>
            <label htmlFor="interests" className="block text-sm font-medium text-gray-700 dark:text-gray-200">ความสนใจ (Interests)</label>
            <input id="interests" name="interests" type="text" placeholder="เช่น ธรรมชาติ, อาหาร, ประวัติศาสตร์" className="mt-1 block w-full rounded border-gray-300 dark:border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100" />
          </div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">สร้างแผนการเดินทาง</button>
        </form>
      </div>
    </div>
  );
} 