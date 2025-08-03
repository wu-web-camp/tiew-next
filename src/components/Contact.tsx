'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

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
                <Phone className="w-4 h-4 text-[#A54141]" />
                <span className="text-sm text-gray-700">02-123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#A54141]" />
                <span className="text-sm text-gray-700">info@example.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#A54141] mt-1" />
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
            <MessageCircle className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
} 