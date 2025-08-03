'use client';

import { useAtom } from "jotai";
import { languageAtom } from "../../../store/language"; // Adjust the import path as necessary
const IntroductionPage = () => {
  const [language] = useAtom(languageAtom);
  if (language === "th") {
    return <><div>
      <h1 className="text-2xl font-bold">ยินดีต้อนรับเข้าสู่ Tiewnext</h1>
      <div className="space-y-4 mt-4">
        <p>
          ยินดีต้อนรับสู่อนาคตแห่งการวางแผนการเดินทาง
          การฝันถึงการผจญภัยครั้งต่อไปของคุณควรเป็นเรื่องที่น่าตื่นเต้น
          ไม่ใช่ความเครียด
          เราได้เปลี่ยนจากแท็บที่มากมายและสเปรดชีตที่ยุ่งเหยิงให้กลายเป็นแพลตฟอร์มอัจฉริยะเพียงหนึ่งเดียว
          แอปของเราช่วยให้คุณค้นพบจุดหมายปลายทางที่ไม่เหมือนใคร
          สร้างแผนการเดินทางแบบเห็นภาพได้อย่างง่ายดาย
          และทำงานร่วมกับเพื่อนและครอบครัวได้แบบเรียลไทม์
          ด้วยระบบงบประมาณแบบบูรณาการและการเข้าถึงแบบออฟไลน์เต็มรูปแบบ
          คุณจึงสามารถสำรวจได้อย่างมั่นใจ เราดูแลรายละเอียดต่างๆ
          เพื่อให้คุณมุ่งเน้นไปที่การสร้างความทรงจำที่ไม่มีวันลืม
          ใช้เวลาน้อยลงในการวางแผนและมีเวลามากขึ้นในการสัมผัสประสบการณ์
          การผจญภัยครั้งยิ่งใหญ่ครั้งต่อไปของคุณอยู่ห่างออกไปเพียงไม่กี่คลิก
        </p>
      </div>
    </div></>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Wellcome to Tiewnext</h1>
      <div className="space-y-4 mt-4">
        <p>
          Welcome to the future of travel planning. Dreaming of your next
          adventure should be exciting, not stressful. We&apos;ve replaced the
          chaos of endless tabs and messy spreadsheets with a single,
          intelligent platform. Our app empowers you to discover unique
          destinations, effortlessly build visual itineraries, and collaborate
          with friends and family in real-time. With integrated budgeting and
          full offline access, you can explore with confidence. We handle the
          details, so you can focus on creating unforgettable memories. Spend
          less time planning and more time experiencing. Your next great
          adventure is just a few clicks away.
        </p>
        
      </div>
    </div>
  );
};

export default IntroductionPage;
