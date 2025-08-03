'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-semibold text-[#A54141] mb-4">ติดต่อเรา</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="ชื่อ-นามสกุล"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-sm focus:ring-2 focus:ring-[#A54141] focus:border-transparent"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="อีเมล"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-sm focus:ring-2 focus:ring-[#A54141] focus:border-transparent"
                required
              />
              <textarea
                name="message"
                placeholder="ข้อความ"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-sm focus:ring-2 focus:ring-[#A54141] focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#A54141] text-white py-2 px-4 rounded text-sm hover:bg-[#8a3535] transition-colors"
              >
                ส่งข้อความ
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-[#A54141] mb-4">ข้อมูลติดต่อ</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-[#A54141]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm text-gray-700">02-123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-[#A54141]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-gray-700">info@example.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-4 h-4 text-[#A54141] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-gray-700">123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110</span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-xl font-semibold text-[#A54141] mb-4">แผนที่</h3>
            <div className="rounded-lg overflow-hidden h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5!2d100.5!3d13.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQyJzAwLjAiTiAxMDDCsDMwJzAwLjAiRQ!5e0!3m2!1sth!2sth!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="แผนที่สำนักงาน"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Live Chat Icon */}
        <div className="fixed bottom-8 right-8 z-50">
          <button className="bg-[#A54141] text-white p-3 rounded-full shadow-lg hover:bg-[#8a3535] transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
} 