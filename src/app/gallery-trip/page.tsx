import React from "react";

export default function GalleryTrip() {
  const destinations = [
    {
      id: 1,
      name: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=2000",
      orientation: "horizontal" // 4:3
    },
    {
      id: 2,
      name: "Paris, France",
      image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      orientation: "vertical" // 3:4
    },
    {
      id: 3,
      name: "Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800",
      orientation: "square" // 1:1
    },
    {
      id: 4,
      name: "New York, USA",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800",
      orientation: "vertical" // 3:4
    },
    {
      id: 5,
      name: "Seoul, South Korea",
      image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800",
      orientation: "horizontal" // 4:3
    },
    {
      id: 6,
      name: "London, England",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800",
      orientation: "tall" // 2:3
    },
    {
      id: 7,
      name: "Rome, Italy",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1096&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      orientation: "horizontal" // 4:3
    },
    {
      id: 8,
      name: "Barcelona, Spain",
      image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800",
      orientation: "square" // 1:1
    },
    {
      id: 9,
      name: "Dubai, UAE",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
      orientation: "vertical" // 3:4
    }
  ];

  const getMinHeight = (orientation: string) => {
    switch (orientation) {
      case "horizontal":
        return "min-h-[250px]";
      case "vertical":
        return "min-h-[350px]";
      case "tall":
        return "min-h-[400px]";
      case "square":
        return "min-h-[300px]";
      default:
        return "min-h-[250px]";
    }
  };

  const getGridSpan = (orientation: string) => {
    switch (orientation) {
      case "tall":
        return "md:row-span-2";
      case "vertical":
        return "md:row-span-2";
      default:
        return "";
    }
  };

  return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
        {/* Header */}
        <div className="text-center py-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Gallery
          </h1>
          <p className="text-xl text-gray-600">
            A journey is best measured in friends, not in miles
          </p>
        </div>

        {/* Galleryy Grid ddd*/}
        <div className="max-w-7xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {destinations.map((destination) => (
                <div
                    key={destination.id}
                    className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${getGridSpan(destination.orientation)} ${getMinHeight(destination.orientation)}`}
                >
                  <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlayyyy*/}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {destination.name}
                      </h3>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
}
