export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 text-gray-700 py-12 font-sarabun">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Column 1: ความช่วยเหลือ */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">ข้อมูลฉุกเฉิน</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  คำถามที่พบบ่อยเกี่ยวกับโคโรน่าไวรัส (COVID-19)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  จัดการทริปของท่าน
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  ติดต่อบริการลูกค้าสัมพันธ์
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  ศูนย์รวมข้อมูลด้านความปลอดภัย
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  เบอร์โทรฉุกเฉิน
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: ค้นพบข้อมูล */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">ค้นพบข้อมูล</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  โปรแกรมสมนาคุณ Genius
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  ข้อเสนอสำหรับช่วงวันหยุดและวันพิเศษ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  บทความด้านการเดินทาง
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Tiew-Next.com สำหรับธุรกิจ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Traveller Review Awards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  รถยนต์เช่า
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  ค้นหาเที่ยวบิน
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  จองร้านอาหาร
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Tiew-Next.com สำหรับ Travel Agents
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: ข้อกำหนดและการตั้งค่า */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">
              ข้อกำหนดและการตั้งค่า
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  ความเป็นส่วนตัวและคุกกี้
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  ข้อกำหนดและเงื่อนไข
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  แถลงการณ์เกี่ยวกับการเข้าถึง
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  ศูนย์ช่วยแก้ปัญหาสำหรับคู่ค้า
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  แถลงการณ์ด้านการค้าแรงงานทาสยุคใหม่
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  แถลงการณ์ด้านสิทธิมนุษยชน
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: คู่ค้า */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">คู่ค้า</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  เข้าสู่ระบบเอกซ์ทราเน็ต
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  ศูนย์ช่วยเหลือที่พักคู่ค้า
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  ลงทะเบียนที่พักของท่าน
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  ร่วมเป็นแอฟฟิลิเอตของเรา
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: เกี่ยวกับเรา */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">เกี่ยวกับเรา</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  เกี่ยวกับ Tiew-Next
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  เว็บไซต์ของเราทํางานอย่างไร
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  ความยั่งยืน
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  ศูนย์ข้อมูลข่าวสาร
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  สมัครงาน
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  ฝ่ายนักลงทุนสัมพันธ์
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  ติดต่อบริษัท
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Currency Selector */}
        <div className="border-t border-gray-200 pt-6 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-b from-red-500 via-white to-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
              🇹🇭
            </div>
            <span className="text-sm font-medium">THB</span>
          </div>
        </div>

        {/* Bottom Section - Copyright and Logos */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Copyright Text */}
            <div className="text-sm text-gray-600 text-center lg:text-left">
              <p>
                Tiew-Next.com บริษัทในเครือ Tiew-Next Holdings Inc.
                ผู้นำระดับโลกด้านการจองออนไลน์สำหรับการเดินทางและบริการอื่น ๆ
                ที่เกี่ยวข้อง ลิขสิทธิ์ถูกต้อง © 1996-2025 Tiew-Next.com™
                สงวนลิขสิทธิ์
              </p>
            </div>

            {/* Tiew-Next */}
            <div className="flex items-center gap-6">
              <div className="text-blue-600 font-bold text-lg">
                Tiew-Next logo
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
