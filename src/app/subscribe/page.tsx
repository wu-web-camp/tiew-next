import Link from "next/link";

export default function SubscribePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            อัปเกรดบริการของคุณ
          </h1>
          <p className="text-lg text-gray-600">
            เลือกแผนที่เหมาะสมกับความต้องการของคุณ
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm">
            <button className="px-6 py-2 rounded-md bg-[#A54141] text-white font-medium">
              ส่วนบุคคล
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Plus Plan */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">FREE</h2>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                <span className="text-lg font-normal text-gray-600">ฟรี</span>
              </div>
              <p className="text-gray-600 text-sm">
                เหมาะสำหรับนักเดินทางมือใหม่หรือผู้ที่วางแผนทริปเล็ก ๆ
              </p>
            </div>

            <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium mb-6">
              บริการปัจจุบันของคุณ
            </button>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">
                  เข้าถึงฟีเจอร์พื้นฐานทั้งหมด
                </span>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">
                  วางแผนการเดินทางพื้นฐานได้
                </span>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">
                  เพิ่มสถานที่ กำหนดเส้นทาง และบันทึกกิจกรรมในแผนได้อย่างง่ายดาย
                </span>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">
                  สร้างแผนทริปได้ 2 ครั้งต่อสัปดาห์
                </span>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">
                  ใช้งาน เสียงนำเที่ยวมาตรฐาน และ เสียงอธิบายสถานที่เบื้องต้น
                </span>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">
                  เข้าถึงฟีเจอร์วางแผนด้วย AI ในระดับเบื้องต้น
                </span>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">
                  ใช้งาน ผู้ช่วยวางแผน GPT และ ฟีเจอร์ค้นหาสถานที่
                  ได้ในระดับเริ่มต้น
                </span>
              </div>
            </div>

            <div className="text-xs text-gray-500 space-y-2">
              <p>จัดการบริการสมาชิกของฉันในแอป TiewNext สำหรับ iOS, Android</p>
              <p>ฉันต้องการความช่วยเหลือเกี่ยวกับการเรียกเก็บเงิน</p>
            </div>
          </div>
          {/* Plus Plan */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">PRO</h2>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                300 บาท
                <span className="text-lg font-normal text-gray-600">
                  /เดือน
                </span>
              </div>
              <p className="text-gray-600 text-sm">
                เหมาะสำหรับนักท่องเที่ยวจริงจังที่ต้องการความยืดหยุ่นและข้อมูลลึก
              </p>
            </div>

            <button className="w-full bg-[#A54141] hover:bg-[#8B3636] text-white py-3 px-4 rounded-lg font-medium mb-6 transition-colors">
              รับ PRO
            </button>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">ทุกอย่างในระดับ Free</span>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">
                  วางแผนทริปได้ 5 ครั้ง/สัปดาห์
                </span>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">
                  แนะนำสถานที่โดย AI พร้อมวิเคราะห์กิจกรรมที่เหมาะกับคุณ
                </span>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">
                  ใช้งาน เสียงนำเที่ยว และ เสียงเล่าเรื่องสถานที่
                  ได้ชัดเจนและลึกซึ้งขึ้น
                </span>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">
                  เข้าถึงฟีเจอร์เชิงลึก เช่น AI วิเคราะห์เส้นทางที่ดีที่สุด
                </span>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">
                  สร้างและปรับแต่งแผนทริปของคุณได้อย่างอิสระ
                </span>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">
                  สร้างวิดีโอทริปด้วย Sora ได้มากขึ้น พร้อมเทมเพลตเพิ่มเติม
                </span>
              </div>
            </div>

            <div className="text-xs text-gray-500 space-y-2">
              <p>จัดการบริการสมาชิกของฉันในแอป TiewNext สำหรับ iOS, Android</p>
              <p>ฉันต้องการความช่วยเหลือเกี่ยวกับการเรียกเก็บเงิน</p>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-xl shadow-lg border-2 border-[#A54141] p-8 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-[#A54141] text-white px-4 py-1 rounded-full text-sm font-medium">
                แนะนำ
              </span>
            </div>

            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">MAX</h2>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                600 บาท
                <span className="text-lg font-normal text-gray-600">
                  /เดือน
                </span>
              </div>
              <p className="text-gray-600 text-sm">
                ใช้งาน ทุกฟีเจอร์ของแผน PRO
              </p>
            </div>
            <button className="w-full bg-[#A54141] hover:bg-[#8B3636] text-white py-3 px-4 rounded-lg font-medium mb-6 transition-colors">
              รับ MAX
            </button>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">
                  วางแผนทริปและใช้ผู้ช่วย AI ได้แบบ ไม่จำกัดจำนวนครั้ง
                </span>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">
                  ใช้งาน เสียงนำเที่ยวแบบสมจริง และไม่จำกัดระยะเวลา
                </span>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">
                  ได้รับคำแนะนำจากระบบวิเคราะห์ลึก: เส้นทาง ประหยัดงบ
                  และประสบการณ์แปลกใหม่
                </span>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">
                  เข้าถึงโหมดวางแผน &ldquo;Q3 Pro&rdquo; สำหรับทริประดับซับซ้อน
                  เช่น เที่ยวหลายประเทศ
                </span>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">
                  เข้าถึงผู้ช่วย TiewNext Agent ได้ตลอดการวางแผน
                </span>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">
                  สร้างวิดีโอรีวิวทริปด้วย Sora แบบไม่จำกัด + เอฟเฟกต์พรีเมียม
                </span>
              </div>
            </div>

            <div className="text-xs text-gray-500 space-y-2">
              <p>ฉันต้องการความช่วยเหลือเกี่ยวกับการเรียกเก็บเงิน</p>
              <p>ไม่จำกัดโดยอยู่ภายใต้มาตรการป้องกันการใช้งานในทางที่ผิด</p>
              <p>เรียนรู้เพิ่มเติม</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-6 h-6 bg-gray-300 rounded-full mr-3"></div>
            <span className="text-gray-600">
              ต้องการเพิ่มขีดความสามารถให้กับธุรกิจคุณใช้ไหม
            </span>
          </div>
          <Link
            href="/enterprise"
            className="text-[#A54141] hover:text-[#8B3636] font-medium transition-colors"
          >
            ดู TiewNext Enterprise
          </Link>
        </div>
      </div>
    </div>
  );
}
