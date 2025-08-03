import React from "react";

export default function GalleryTrip() {
  const destinations = [
    {
      id: 1,
      name: "หาดถ้ำพระนาง ",
      image: "https://www.ananda.co.th/blog/thegenc/wp-content/uploads/2024/03/%E0%B8%94%E0%B8%B5%E0%B9%84%E0%B8%8B%E0%B8%99%E0%B9%8C%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%B1%E0%B8%87%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD-2024-05-23T123322.980.png",
      orientation: "horizontal" // 4:3
    },
    {
      id: 2,
      name: "เกาะราชา",
      image: "https://www.ananda.co.th/blog/thegenc/wp-content/uploads/2024/03/%E0%B8%94%E0%B8%B5%E0%B9%84%E0%B8%8B%E0%B8%99%E0%B9%8C%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%B1%E0%B8%87%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD-2024-05-23T123623.816.png",
      orientation: "vertical" // 3:4
    },
    {
      id: 3,
      name: "หาดไร่เลย์",
      image: "https://www.ananda.co.th/blog/thegenc/wp-content/uploads/2024/03/934-x-550-px-15.png",
      orientation: "square" // 1:1
    },
    {
      id: 4,
      name: "ถ้ำมรกต เกาะมุก",
      image: "https://www.ananda.co.th/blog/thegenc/wp-content/uploads/2024/03/%E0%B8%94%E0%B8%B5%E0%B9%84%E0%B8%8B%E0%B8%99%E0%B9%8C%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%B1%E0%B8%87%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD-2024-05-23T124232.412.png",
      orientation: "vertical" // 3:4
    },
    {
      id: 5,
      name: "ไร่ชาฉุยฟง",
      image: "https://www.ananda.co.th/blog/thegenc/wp-content/uploads/2024/03/%E0%B8%94%E0%B8%B5%E0%B9%84%E0%B8%8B%E0%B8%99%E0%B9%8C%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%B1%E0%B8%87%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD-2024-05-23T124844.757.png",
      orientation: "horizontal" // 4:3
    },
    {
      id: 6,
      name: "สกายวอล์ค ทะเลหมอกอัยเยอร์เวง",
      image: "https://www.ananda.co.th/blog/thegenc/wp-content/uploads/2024/03/%E0%B8%94%E0%B8%B5%E0%B9%84%E0%B8%8B%E0%B8%99%E0%B9%8C%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%B1%E0%B8%87%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD-2024-05-23T125100.590.png",
      orientation: "tall" // 2:3
    },
    {
      id: 7,
      name: "ดอยอ่างขาง",
      image: "https://www.ananda.co.th/blog/thegenc/wp-content/uploads/2024/03/934-x-550-px-24.png",
      orientation: "horizontal" // 4:3
    },
    {
      id: 8,
      name: "สามพันโบก",
      image: "https://www.ananda.co.th/blog/thegenc/wp-content/uploads/2024/03/%E0%B8%94%E0%B8%B5%E0%B9%84%E0%B8%8B%E0%B8%99%E0%B9%8C%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%B1%E0%B8%87%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD-2024-05-23T125306.040.png",
      orientation: "square" // 1:1
    },
    {
      id: 9,
      name: "ภูชี้ฟ้า",
      image: "https://www.ananda.co.th/blog/thegenc/wp-content/uploads/2024/03/934-x-550-px-26.png",
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
