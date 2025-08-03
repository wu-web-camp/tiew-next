"use client"


export default function EmergencyDetail() {
    

    const callNumber = (number: string) => {
        window.open(`tel:${number}`, '_blank');
    };

    return (
      <div className="min-h-screen" style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "linear-gradient(135deg, #ffffff 0%, #ff4757 50%, #ffffff 100%)",
        color: "#333"
      }}>
        <div className="max-w-6xl mx-auto p-5">
          {/* Header */}
          <div className="text-center mb-10 text-white">
            <h1 className="text-4xl font-bold mb-2" style={{
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
            }}>
              🚨 เบอร์ฉุกเฉิน
            </h1>
            <p className="text-xl opacity-90">
              ค้นหาเบอร์โทรศัพท์ฉุกเฉินอย่างรวดเร็ว
            </p>
          </div>
  
          {/* Cards Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
            
            {/* Police Stations Card */}
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-l-4 border-red-500">
              <h3 className="text-red-500 text-xl font-semibold mb-5 flex items-center gap-2">
                🏛️ สถานีตำรวจหลักจังหวัด
              </h3>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-100 hover:bg-gray-50 hover:rounded-lg hover:px-2 hover:-mx-2 transition-all duration-200">
                <span className="font-medium text-gray-700">เชียงใหม่ - สภ.เมืองเชียงใหม่</span>
                <span 
                  className="font-bold text-red-500 text-lg cursor-pointer px-4 py-2 bg-red-50 rounded-full border-2 border-transparent hover:bg-red-500 hover:text-white hover:border-red-500 hover:scale-105 transition-all duration-300"
                  onClick={() => callNumber('053-271-211')}
                >
                  053-271-211
                </span>
              </div>
  
              <div className="flex justify-between items-center py-3 border-b border-gray-100 hover:bg-gray-50 hover:rounded-lg hover:px-2 hover:-mx-2 transition-all duration-200">
                <span className="font-medium text-gray-700">ภูเก็ต - สภ.เมืองภูเก็ต</span>
                <span 
                  className="font-bold text-red-500 text-lg cursor-pointer px-4 py-2 bg-red-50 rounded-full border-2 border-transparent hover:bg-red-500 hover:text-white hover:border-red-500 hover:scale-105 transition-all duration-300"
                  onClick={() => callNumber('076-211-036')}
                >
                  076-211-036
                </span>
              </div>
  
              <div className="flex justify-between items-center py-3 border-b border-gray-100 hover:bg-gray-50 hover:rounded-lg hover:px-2 hover:-mx-2 transition-all duration-200">
                <span className="font-medium text-gray-700">กระบี่ - สภ.เมืองกระบี่</span>
                <span 
                  className="font-bold text-red-500 text-lg cursor-pointer px-4 py-2 bg-red-50 rounded-full border-2 border-transparent hover:bg-red-500 hover:text-white hover:border-red-500 hover:scale-105 transition-all duration-300"
                  onClick={() => callNumber('075-611-111')}
                >
                  075-611-111
                </span>
              </div>
  
              <div className="flex justify-between items-center py-3 border-b border-gray-100 hover:bg-gray-50 hover:rounded-lg hover:px-2 hover:-mx-2 transition-all duration-200">
                <span className="font-medium text-gray-700">สุโขทัย - สภ.เมืองสุโขทัย</span>
                <span 
                  className="font-bold text-red-500 text-lg cursor-pointer px-4 py-2 bg-red-50 rounded-full border-2 border-transparent hover:bg-red-500 hover:text-white hover:border-red-500 hover:scale-105 transition-all duration-300"
                  onClick={() => callNumber('055-611-111')}
                >
                  055-611-111
                </span>
              </div>
  
              <div className="flex justify-between items-center py-3 hover:bg-gray-50 hover:rounded-lg hover:px-2 hover:-mx-2 transition-all duration-200">
                <span className="font-medium text-gray-700">นครราชสีมา - สภ.เมืองนครราชสีมา</span>
                <span 
                  className="font-bold text-red-500 text-lg cursor-pointer px-4 py-2 bg-red-50 rounded-full border-2 border-transparent hover:bg-red-500 hover:text-white hover:border-red-500 hover:scale-105 transition-all duration-300"
                  onClick={() => callNumber('044-213-111')}
                >
                  044-213-111
                </span>
              </div>
            </div>
  
            {/* Emergency Services Card */}
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-l-4 border-red-500">
              <h3 className="text-red-500 text-xl font-semibold mb-5 flex items-center gap-2">
                🚨 บริการฉุกเฉินสำคัญ
              </h3>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-100 hover:bg-gray-50 hover:rounded-lg hover:px-2 hover:-mx-2 transition-all duration-200">
                <span className="font-medium text-gray-700">ตำรวจท่องเที่ยว</span>
                <span 
                  className="font-bold text-red-500 text-lg cursor-pointer px-4 py-2 bg-red-50 rounded-full border-2 border-transparent hover:bg-red-500 hover:text-white hover:border-red-500 hover:scale-105 transition-all duration-300"
                  onClick={() => callNumber('1155')}
                >
                  1155
                </span>
              </div>
  
              <div className="flex justify-between items-center py-3 border-b border-gray-100 hover:bg-gray-50 hover:rounded-lg hover:px-2 hover:-mx-2 transition-all duration-200">
                <span className="font-medium text-gray-700">ตำรวจทางหลวง</span>
                <span 
                  className="font-bold text-red-500 text-lg cursor-pointer px-4 py-2 bg-red-50 rounded-full border-2 border-transparent hover:bg-red-500 hover:text-white hover:border-red-500 hover:scale-105 transition-all duration-300"
                  onClick={() => callNumber('1193')}
                >
                  1193
                </span>
              </div>
  
              <div className="flex justify-between items-center py-3 border-b border-gray-100 hover:bg-gray-50 hover:rounded-lg hover:px-2 hover:-mx-2 transition-all duration-200">
                <span className="font-medium text-gray-700">หน่วยแพทย์ฉุกเฉิน (ทั่วประเทศ)</span>
                <span 
                  className="font-bold text-red-500 text-lg cursor-pointer px-4 py-2 bg-red-50 rounded-full border-2 border-transparent hover:bg-red-500 hover:text-white hover:border-red-500 hover:scale-105 transition-all duration-300"
                  onClick={() => callNumber('1669')}
                >
                  1669
                </span>
              </div>
  
              <div className="flex justify-between items-center py-3 border-b border-gray-100 hover:bg-gray-50 hover:rounded-lg hover:px-2 hover:-mx-2 transition-all duration-200">
                <span className="font-medium text-gray-700">แจ้งเหตุไฟไหม้/ดับเพลิง</span>
                <span 
                  className="font-bold text-red-500 text-lg cursor-pointer px-4 py-2 bg-red-50 rounded-full border-2 border-transparent hover:bg-red-500 hover:text-white hover:border-red-500 hover:scale-105 transition-all duration-300"
                  onClick={() => callNumber('199')}
                >
                  199
                </span>
              </div>
  
              <div className="flex justify-between items-center py-3 hover:bg-gray-50 hover:rounded-lg hover:px-2 hover:-mx-2 transition-all duration-200">
                <span className="font-medium text-gray-700">ศูนย์เตือนภัยพิบัติแห่งชาติ</span>
                <span 
                  className="font-bold text-red-500 text-lg cursor-pointer px-4 py-2 bg-red-50 rounded-full border-2 border-transparent hover:bg-red-500 hover:text-white hover:border-red-500 hover:scale-105 transition-all duration-300"
                  onClick={() => callNumber('192')}
                >
                  192
                </span>
              </div>
            </div>
  
            {/* Specialized Services Card */}
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-l-4 border-red-500">
              <h3 className="text-red-500 text-xl font-semibold mb-5 flex items-center gap-2">
                🏥 บริการเฉพาะทาง
              </h3>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-100 hover:bg-gray-50 hover:rounded-lg hover:px-2 hover:-mx-2 transition-all duration-200">
                <span className="font-medium text-gray-700">หน่วยแพทย์กู้ชีวิต วชิรพยาบาล</span>
                <span 
                  className="font-bold text-red-500 text-lg cursor-pointer px-4 py-2 bg-red-50 rounded-full border-2 border-transparent hover:bg-red-500 hover:text-white hover:border-red-500 hover:scale-105 transition-all duration-300"
                  onClick={() => callNumber('1554')}
                >
                  1554
                </span>
              </div>
  
              <div className="flex justify-between items-center py-3 border-b border-gray-100 hover:bg-gray-50 hover:rounded-lg hover:px-2 hover:-mx-2 transition-all duration-200">
                <span className="font-medium text-gray-700">แจ้งเหตุอุบัติเหตุทางน้ำ</span>
                <span 
                  className="font-bold text-red-500 text-lg cursor-pointer px-4 py-2 bg-red-50 rounded-full border-2 border-transparent hover:bg-red-500 hover:text-white hover:border-red-500 hover:scale-105 transition-all duration-300"
                  onClick={() => callNumber('1196')}
                >
                  1196
                </span>
              </div>
  
              <div className="flex justify-between items-center py-3 border-b border-gray-100 hover:bg-gray-50 hover:rounded-lg hover:px-2 hover:-mx-2 transition-all duration-200">
                <span className="font-medium text-gray-700">แจ้งคนหาย</span>
                <span 
                  className="font-bold text-red-500 text-lg cursor-pointer px-4 py-2 bg-red-50 rounded-full border-2 border-transparent hover:bg-red-500 hover:text-white hover:border-red-500 hover:scale-105 transition-all duration-300"
                  onClick={() => callNumber('1300')}
                >
                  1300
                </span>
              </div>
  
              <div className="flex justify-between items-center py-3 border-b border-gray-100 hover:bg-gray-50 hover:rounded-lg hover:px-2 hover:-mx-2 transition-all duration-200">
                <span className="font-medium text-gray-700">วิทยุร่วมด้วยช่วยกัน</span>
                <span 
                  className="font-bold text-red-500 text-lg cursor-pointer px-4 py-2 bg-red-50 rounded-full border-2 border-transparent hover:bg-red-500 hover:text-white hover:border-red-500 hover:scale-105 transition-all duration-300"
                  onClick={() => callNumber('1677')}
                >
                  1677
                </span>
              </div>
  
              <div className="flex justify-between items-center py-3 hover:bg-gray-50 hover:rounded-lg hover:px-2 hover:-mx-2 transition-all duration-200">
                <span className="font-medium text-gray-700">ศูนย์ช่วยเหลือนักท่องเที่ยว (TAC)</span>
                <span 
                  className="font-bold text-red-500 text-lg cursor-pointer px-4 py-2 bg-red-50 rounded-full border-2 border-transparent hover:bg-red-500 hover:text-white hover:border-red-500 hover:scale-105 transition-all duration-300"
                  onClick={() => callNumber('02-134-4077')}
                >
                  02-134-4077
                </span>
              </div>
            </div>
          </div>
        </div>

  

        {/* Event Listeners */}
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('keydown', function(e) {
              if (e.key === 'Escape') {
                document.getElementById('emergencyModal').style.display = 'none';
              }
            });
          `
        }} />
      </div>
    );
  }