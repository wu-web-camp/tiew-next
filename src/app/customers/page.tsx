export default function CustomersPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          จัดการลูกค้า
        </h1>
        <p className="text-xl text-gray-600">
          ดูข้อมูลลูกค้าและจัดการข้อมูลการติดต่อ
        </p>
      </div>

      {/* Customer Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">ลูกค้าทั้งหมด</p>
              <p className="text-2xl font-bold text-gray-900">1,234</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">ลูกค้าใหม่</p>
              <p className="text-2xl font-bold text-gray-900">56</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">รายได้รวม</p>
              <p className="text-2xl font-bold text-gray-900">฿2.5M</p>
            </div>
          </div>
        </div>
      </div>

      {/* Customer List */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">รายชื่อลูกค้า</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {/* Sample Customer Items */}
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#A54141] rounded-full flex items-center justify-center text-white font-semibold">
                  ส
                </div>
                <div className="ml-4">
                  <p className="font-medium text-gray-900">สมชาย ใจดี</p>
                  <p className="text-sm text-gray-600">somchai@email.com</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">ทริปที่จอง: 3</p>
                <p className="text-sm text-[#A54141] font-medium">ลูกค้าประจำ</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#A54141] rounded-full flex items-center justify-center text-white font-semibold">
                  น
                </div>
                <div className="ml-4">
                  <p className="font-medium text-gray-900">นิดา สวยงาม</p>
                  <p className="text-sm text-gray-600">nida@email.com</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">ทริปที่จอง: 1</p>
                <p className="text-sm text-green-600 font-medium">ลูกค้าใหม่</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#A54141] rounded-full flex items-center justify-center text-white font-semibold">
                  ม
                </div>
                <div className="ml-4">
                  <p className="font-medium text-gray-900">มานะ ตั้งใจ</p>
                  <p className="text-sm text-gray-600">mana@email.com</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">ทริปที่จอง: 5</p>
                <p className="text-sm text-[#A54141] font-medium">ลูกค้าประจำ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 