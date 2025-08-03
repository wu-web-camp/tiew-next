"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

interface MobileMenuProps {
  hasNewPromotions: boolean;
  onNotificationClick: () => void;
}

export default function MobileMenu({ hasNewPromotions, onNotificationClick }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 hover:text-[#A54141] p-2 rounded-md"
        aria-label="Toggle menu"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-26 left-0 right-0 bg-white shadow-lg border-b border-gray-200 z-50">
          <div className="px-4 py-6 space-y-4">
            {/* Contact Info */}
            <div className="border-b border-gray-100 pb-4">
              <div className="text-sm text-gray-600 space-y-2">
                <div className="flex items-center">
                  <span className="mr-2">📞</span>
                  <span>02-123-4567</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">📧</span>
                  <span>support@tiewnext.com</span>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-3">
              <Link
                href="/"
                className="block text-gray-700 hover:text-[#A54141] px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                หน้าแรก
              </Link>
              <Link
                href="/trip-planner"
                className="block text-gray-700 hover:text-[#A54141] px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                วางแผนทริป
              </Link>
              <Link
                href="/my-trip"
                className="block text-gray-700 hover:text-[#A54141] px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                ทริปของฉัน
              </Link>
              
              {/* Additional Info Dropdown */}
              <div className="space-y-2">
                <div className="text-gray-700 px-3 py-2 text-base font-medium">ข้อมูลเพิ่มเติม</div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/about"
                    className="block text-gray-600 hover:text-[#A54141] px-3 py-2 rounded-md text-sm transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    เกี่ยวกับเรา
                  </Link>
                  <Link
                    href="/contact"
                    className="block text-gray-600 hover:text-[#A54141] px-3 py-2 rounded-md text-sm transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    ติดต่อเรา
                  </Link>
                  <Link
                    href="/help"
                    className="block text-gray-600 hover:text-[#A54141] px-3 py-2 rounded-md text-sm transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    ศูนย์ช่วยเหลือ
                  </Link>
                </div>
              </div>
            </nav>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              {/* Notification Bell - Mobile */}
              <button 
                onClick={() => {
                  onNotificationClick();
                  setIsOpen(false);
                }}
                className="w-full text-left text-gray-700 hover:text-[#A54141] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center justify-between"
              >
                <span>การแจ้งเตือน</span>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                  </svg>
                  {hasNewPromotions && (
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  )}
                </div>
              </button>
              
              <button className="w-full text-left text-gray-700 hover:text-[#A54141] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                เข้าสู่ระบบ
              </button>
              <button className="w-full bg-[#A54141] hover:bg-[#8B3636] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 shadow-sm">
                สมัครสมาชิก
              </button>
              
              {/* Theme Button - Mobile */}
              <ThemeToggle showText={true} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 