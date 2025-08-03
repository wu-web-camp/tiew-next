import Link from "next/link";
import HeroActionButtons from "../components/HeroActionButtons";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-[#F5F0F0] py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              วางแผน
              <span className="text-[#A54141]"> ทริป </span>
              ได้ง่ายๆ
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              ค้นพบจุดหมายปลายทางใหม่ สร้างแผนการเดินทางที่สมบูรณ์แบบ 
              และเก็บความทรงจำที่ไม่มีวันลืมกับ Tiew Next
            </p>
            
            {/* Hero Action Buttons */}
            <HeroActionButtons className="justify-center mb-12" />

            {/* Features Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F5F0F0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#A54141]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">วางแผนง่าย</h3>
                <p className="text-gray-600">สร้างแผนการเดินทางได้อย่างรวดเร็วและง่ายดาย</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F5F0F0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#A54141]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">ค้นหาสถานที่</h3>
                <p className="text-gray-600">ค้นพบสถานที่ท่องเที่ยวที่น่าสนใจมากมาย</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F5F0F0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#A54141]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">ประหยัดเวลา</h3>
                <p className="text-gray-600">จัดการเวลาและตารางการเดินทางได้อย่างมีประสิทธิภาพ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#A54141] to-[#8B3636] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            พร้อมเริ่มต้นการผจญภัยแล้วหรือยัง?
          </h2>
          <p className="text-[#F5F0F0] mb-8 text-lg">
            สมัครสมาชิกฟรีวันนี้และเริ่มต้นวางแผนทริปในฝันของคุณ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/trip-planner"
              className="bg-white text-[#A54141] hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-md"
            >
              เริ่มวางแผนทริป
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#A54141] px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200">
              ดูตัวอย่าง
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ติดต่อเรา</h2>
            <p className="text-gray-600 text-lg">เราพร้อมให้บริการและตอบคำถามของคุณ</p>
          </div>
          <Contact />
        </div>
      </section>
    </div>
  );
}
