"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    profilePicture: null as File | null,
  });

  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear message when user starts typing
    if (message) setMessage(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      profilePicture: file
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      setMessage({ type: 'error', text: 'รหัสผ่านไม่ตรงกัน กรุณาตรวจสอบอีกครั้ง' });
      setIsSubmitting(false);
      return;
    }

    // Validate password length
    if (formData.password.length < 6) {
      setMessage({ type: 'error', text: 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร' });
      setIsSubmitting(false);
      return;
    }

    try {
      // Create user data object (excluding profilePicture for localStorage)
      const userData = {
        id: Date.now().toString(), // Simple ID generation
        username: formData.username,
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber,
        password: formData.password, // In real app, this should be hashed
        createdAt: new Date().toISOString(),
        profilePictureUrl: formData.profilePicture ? URL.createObjectURL(formData.profilePicture) : null
      };

      // Get existing users from localStorage
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Check if username or email already exists
      const userExists = existingUsers.find((user: any) => 
        user.username === formData.username || user.email === formData.email
      );

      if (userExists) {
        setMessage({ type: 'error', text: 'ชื่อผู้ใช้หรืออีเมลนี้มีอยู่ในระบบแล้ว' });
        setIsSubmitting(false);
        return;
      }

      // Add new user to array
      existingUsers.push(userData);
      
      // Save back to localStorage
      localStorage.setItem('users', JSON.stringify(existingUsers));
      
      // Set current user session
      localStorage.setItem('currentUser', JSON.stringify(userData));
      
      setMessage({ type: 'success', text: 'สมัครสมาชิกสำเร็จ! กำลังนำคุณไปยังหน้าหลัก...' });
      
      // Redirect to home page after 2 seconds
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);

    } catch (error) {
      setMessage({ type: 'error', text: 'เกิดข้อผิดพลาดในการสมัครสมาชิก กรุณาลองใหม่อีกครั้ง' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Frame */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-[#A54141] px-6 py-8 text-center">
            <h1 className="text-3xl font-bold text-white font-thai">สมัครสมาชิก</h1>
          </div>
          
          {/* Form */}
          <div className="px-6 py-8">
            {/* Message Display */}
            {message && (
              <div className={`mb-6 p-4 rounded-lg font-thai ${
                message.type === 'success' 
                  ? 'bg-green-100 border border-green-400 text-green-700' 
                  : 'bg-red-100 border border-red-400 text-red-700'
              }`}>
                {message.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Profile Picture */}
              <div>
                <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700 mb-2 font-thai">
                  รูปโปรไฟล์
                </label>
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center border-2 border-dashed border-gray-300">
                    {formData.profilePicture ? (
                      <img 
                        src={URL.createObjectURL(formData.profilePicture)} 
                        alt="Profile preview" 
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    )}
                  </div>
                  <input
                    type="file"
                    id="profilePicture"
                    name="profilePicture"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors font-thai"
                  />
                </div>
              </div>

              {/* Username */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2 font-thai">
                  ชื่อผู้ใช้
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors font-thai"
                  placeholder="กรอกชื่อผู้ใช้ของคุณ"
                  required
                />
              </div>

              {/* First Name and Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2 font-thai">
                    ชื่อ
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors font-thai"
                    placeholder="กรอกชื่อ"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2 font-thai">
                    สกุล
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors font-thai"
                    placeholder="กรอกสกุล"
                    required
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2 font-thai">
                  เบอร์โทรศัพท์
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors font-thai"
                  placeholder="กรอกเบอร์โทรศัพท์"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-thai">
                  อีเมล
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors font-thai"
                  placeholder="กรอกอีเมลของคุณ"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2 font-thai">
                  รหัสผ่าน
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors font-thai"
                  placeholder="กรอกรหัสผ่านของคุณ (อย่างน้อย 6 ตัวอักษร)"
                  required
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2 font-thai">
                  ยืนยันรหัสผ่าน
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors font-thai"
                  placeholder="ยืนยันรหัสผ่านของคุณ"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 text-white font-semibold rounded-lg transition-all duration-200 font-thai ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-red-600 to-[#A54141] hover:from-red-700 hover:to-[#8A3535] active:shadow-lg active:shadow-red-300/50'
                }`}
              >
                {isSubmitting ? 'กำลังสมัคร...' : 'สมัคร'}
              </button>
            </form>

            {/* Back to Home Link */}
            <div className="mt-6 text-center">
              <Link 
                href="/" 
                className="text-gray-600 hover:text-red-500 transition-colors text-sm font-thai"
              >
                ← กลับหน้าหลัก
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 