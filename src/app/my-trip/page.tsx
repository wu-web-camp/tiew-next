import React from "react";
import Image from "next/image";

const trips = [
  {
    id: 1,
    name: "Bangkok Adventure",
    location: "Bangkok, Thailand",
    dates: "2024-07-01 to 2024-07-05",
    price: 12000,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Chiang Mai Retreat",
    location: "Chiang Mai, Thailand",
    dates: "2024-08-10 to 2024-08-15",
    price: 15000,
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Phuket Beach Holiday",
    location: "Phuket, Thailand",
    dates: "2024-09-01 to 2024-09-07",
    price: 20000,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
  },
];

export default function MyTrip() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-light text-[#A54141] mb-12 text-center tracking-tight">
        My Trips
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {trips.map((trip) => (
          <div
            key={trip.id}
            className="bg-white/90 border border-[#A54141]/20 rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
          >
            <Image
              src={trip.image}
              alt={trip.name}
              width={400}
              height={192}
              className="h-48 w-full object-cover rounded-t-2xl"
            />
            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-lg font-semibold text-[#A54141] mb-1">
                {trip.name}
              </h2>
              <div className="text-gray-400 mb-1">{trip.location}</div>
              <div className="text-xs text-gray-400 mb-3">{trip.dates}</div>
              <div className="text-lg font-bold text-[#A54141] mb-6">
                ฿{trip.price.toLocaleString()}
              </div>
              <button className="mt-auto w-full py-2 px-4 rounded-lg bg-[#A54141] text-white font-medium hover:bg-[#A54141]/80 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
