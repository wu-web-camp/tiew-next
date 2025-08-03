"use client";

import Link from "next/link";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

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
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group ${
                  isActive("/") 
                    ? "text-[#A54141] bg-[#F5F0F0]" 
                    : "text-gray-700 hover:text-[#A54141] hover:bg-[#F5F0F0]"
                }`}
              >
                หน้าแรก
                <div className={`absolute bottom-0 left-0 h-0.5 bg-[#A54141] transition-all duration-200 ${
                  isActive("/") ? "w-full" : "w-0 group-hover:w-full"
                }`}></div>
              </Link>
              <Link 
                href="/trip-planner" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group ${
                  isActive("/trip-planner") 
                    ? "text-[#A54141] bg-[#F5F0F0]" 
                    : "text-gray-700 hover:text-[#A54141] hover:bg-[#F5F0F0]"
                }`}
              >
                วางแผนทริป
                <div className={`absolute bottom-0 left-0 h-0.5 bg-[#A54141] transition-all duration-200 ${
                  isActive("/trip-planner") ? "w-full" : "w-0 group-hover:w-full"
                }`}></div>
              </Link>
              <Link 
                href="/customers" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group ${
                  isActive("/customers") 
                    ? "text-[#A54141] bg-[#F5F0F0]" 
                    : "text-gray-700 hover:text-[#A54141] hover:bg-[#F5F0F0]"
                }`}
              >
                ลูกค้า
                <div className={`absolute bottom-0 left-0 h-0.5 bg-[#A54141] transition-all duration-200 ${
                  isActive("/customers") ? "w-full" : "w-0 group-hover:w-full"
                }`}></div>
              </Link>
              <Link 
                href="/my-trip" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group ${
                  isActive("/my-trip") 
                    ? "text-[#A54141] bg-[#F5F0F0]" 
                    : "text-gray-700 hover:text-[#A54141] hover:bg-[#F5F0F0]"
                }`}
              >
                ทริปของฉัน
                <div className={`absolute bottom-0 left-0 h-0.5 bg-[#A54141] transition-all duration-200 ${
                  isActive("/my-trip") ? "w-full" : "w-0 group-hover:w-full"
                }`}></div>
              </Link>
              <div className="relative group">
                <button className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center ${
                  isActive("/about") || isActive("/contact") || isActive("/help")
                    ? "text-[#A54141] bg-[#F5F0F0]" 
                    : "text-gray-700 hover:text-[#A54141] hover:bg-[#F5F0F0]"
                }`}>
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
              <button className="text-gray-700 hover:text-[#A54141] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                เข้าสู่ระบบ
              </button>
              <Link
                href="/signup"
                className="bg-[#A54141] hover:bg-[#8B3636] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 shadow-sm"
              >
                สมัครสมาชิก
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
