"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

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
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive("/")
                    ? "text-[#A54141] bg-[#F5F0F0]"
                    : "text-gray-700 hover:text-[#A54141] hover:bg-[#F5F0F0]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                หน้าแรก
              </Link>
              <Link
                href="/trip-planner"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive("/trip-planner")
                    ? "text-[#A54141] bg-[#F5F0F0]"
                    : "text-gray-700 hover:text-[#A54141] hover:bg-[#F5F0F0]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                วางแผนทริป
              </Link>
              <Link
                href="/customers"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive("/customers")
                    ? "text-[#A54141] bg-[#F5F0F0]"
                    : "text-gray-700 hover:text-[#A54141] hover:bg-[#F5F0F0]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                ลูกค้า
              </Link>
              <Link
                href="/my-trip"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive("/my-trip")
                    ? "text-[#A54141] bg-[#F5F0F0]"
                    : "text-gray-700 hover:text-[#A54141] hover:bg-[#F5F0F0]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                ทริปของฉัน
              </Link>
              
              {/* Additional Info Dropdown */}
              <div className="space-y-2">
                <div className={`px-3 py-2 text-base font-medium ${
                  isActive("/about") || isActive("/contact") || isActive("/help")
                    ? "text-[#A54141] bg-[#F5F0F0]"
                    : "text-gray-700"
                }`}>
                  ข้อมูลเพิ่มเติม
                </div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/about"
                    className={`block px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                      isActive("/about")
                        ? "text-[#A54141] bg-[#F5F0F0]"
                        : "text-gray-600 hover:text-[#A54141] hover:bg-[#F5F0F0]"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    เกี่ยวกับเรา
                  </Link>
                  <Link
                    href="/contact"
                    className={`block px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                      isActive("/contact")
                        ? "text-[#A54141] bg-[#F5F0F0]"
                        : "text-gray-600 hover:text-[#A54141] hover:bg-[#F5F0F0]"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    ติดต่อเรา
                  </Link>
                  <Link
                    href="/help"
                    className={`block px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                      isActive("/help")
                        ? "text-[#A54141] bg-[#F5F0F0]"
                        : "text-gray-600 hover:text-[#A54141] hover:bg-[#F5F0F0]"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    ศูนย์ช่วยเหลือ
                  </Link>
                </div>
              </div>
            </nav>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <button className="w-full text-left text-gray-700 hover:text-[#A54141] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                ติดต่อเรา
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