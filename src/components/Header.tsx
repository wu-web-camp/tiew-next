'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const router = useRouter();
  const [hasNewPromotions, setHasNewPromotions] = useState(true); // Start with true to show notification
  const [showNotificationPopup, setShowNotificationPopup] = useState(false);

  const handleNotificationClick = () => {
    setHasNewPromotions(false); // Clear notification when clicked
    router.push('/promotion'); // Redirect to promotion page
  };

  const notifications = [
    {
      id: 1,
      title: 'โปรโมชั่นใหม่!',
      message: 'ลดสูงสุด 30% สำหรับโรงแรมในประเทศไทย',
      time: '2 นาทีที่แล้ว',
      isNew: true
    },
    {
      id: 2,
      title: 'แจ้งเตือนการเดินทาง',
      message: 'ทริปของคุณใกล้ถึงแล้ว อย่าลืมตรวจสอบรายละเอียด',
      time: '1 ชั่วโมงที่แล้ว',
      isNew: false
    }
  ];

  return (

    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto">
        {/* Top Bar */}
        <div className="bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-10 text-xs text-gray-600">
              <div className="flex items-center space-x-6">
                <span>📞 02-123-4567</span>
                <span>📧 support@tiewnext.com</span>
              </div>
              <div className="hidden sm:flex items-center space-x-4">
                <button className="hover:text-[#A54141] transition-colors">ช่วยเหลือ</button>
                <button className="hover:text-[#A54141] transition-colors">ภาษาไทย</button>
              </div>
            </div>
          </div>

        </div>

        {/* Main Header */}
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-[#A54141] to-[#8B3636] rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-gray-900">Tiew</span>
                  <span className="text-gray-500 ml-1">Next</span>
                </div>
              </Link>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden lg:flex space-x-8">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-[#A54141] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group"
              >
                หน้าแรก
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A54141] transition-all duration-200 group-hover:w-full"></div>
              </Link>
              <Link 
                href="/trip-planner" 
                className="text-gray-700 hover:text-[#A54141] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group"
              >
                วางแผนทริป
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A54141] transition-all duration-200 group-hover:w-full"></div>
              </Link>
              <Link 
                href="/client" 
                className="text-gray-700 hover:text-[#A54141] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group"
              >
                ลูกค้า
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A54141] transition-all duration-200 group-hover:w-full"></div>
              </Link>
              <Link 
                href="/my-trip" 
                className="text-gray-700 hover:text-[#A54141] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group"
              >
                ทริปของฉัน
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A54141] transition-all duration-200 group-hover:w-full"></div>
              </Link>
              <Link 
                href="/promotion" 
                className="text-gray-700 hover:text-[#A54141] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group"
              >
                โปรโมชั่น
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A54141] transition-all duration-200 group-hover:w-full"></div>
              </Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-[#A54141] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center">
                  ข้อมูลเพิ่มเติม
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F5F0F0] hover:text-[#A54141]">
                      เกี่ยวกับเรา
                    </Link>
                    <Link href="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F5F0F0] hover:text-[#A54141]">
                      ติดต่อเรา
                    </Link>
                    <Link href="/help" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F5F0F0] hover:text-[#A54141]">
                      ศูนย์ช่วยเหลือ
                    </Link>
                  </div>
                </div>
              </div>
            </nav>

            {/* Action Buttons - Desktop */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Notification Bell */}
              <div className="relative">
                <button 
                  onMouseEnter={() => setShowNotificationPopup(true)}
                  onMouseLeave={() => setShowNotificationPopup(false)}
                  onClick={handleNotificationClick}
                  className="relative text-gray-700 hover:text-[#A54141] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                  </svg>
                  {/* Red dot for new promotions */}
                  {hasNewPromotions && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                  )}
                </button>

                {/* Notification Popup */}
                {showNotificationPopup && (
                  <div className="absolute top-full right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-gray-900">การแจ้งเตือน</h3>
                        <button 
                          onClick={() => setShowNotificationPopup(false)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      
                      <div className="space-y-3 max-h-64 overflow-y-auto">
                        {notifications.map((notification) => (
                          <div 
                            key={notification.id}
                            className={`p-3 rounded-lg border-l-4 ${
                              notification.isNew 
                                ? 'bg-blue-50 border-blue-400' 
                                : 'bg-gray-50 border-gray-300'
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4 className="font-medium text-gray-900 text-sm">
                                  {notification.title}
                                  {notification.isNew && (
                                    <span className="ml-2 inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                                  )}
                                </h4>
                                <p className="text-gray-600 text-xs mt-1">{notification.message}</p>
                                <p className="text-gray-400 text-xs mt-1">{notification.time}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <button 
                          onClick={() => {
                            setShowNotificationPopup(false);
                            handleNotificationClick();
                          }}
                          className="w-full text-center text-[#A54141] hover:text-[#8B3535] text-sm font-medium py-2 rounded-md transition-colors duration-200"
                        >
                          ดูการแจ้งเตือนทั้งหมด
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <button className="text-gray-700 hover:text-[#A54141] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                เข้าสู่ระบบ
              </button>
              <button className="bg-[#A54141] hover:bg-[#8B3636] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 shadow-sm">
                สมัครสมาชิก
              </button>
              
              {/* Theme Button */}
              <ThemeToggle />
            </div>

            {/* Mobile Menu */}
            <MobileMenu 
              hasNewPromotions={hasNewPromotions} 
              onNotificationClick={handleNotificationClick} 
            />
          </div>
        </div>
      </div>
    </header>
  );
}
