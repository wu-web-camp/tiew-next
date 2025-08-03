import Contact from '@/components/Contact';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#A54141] mb-4">ติดต่อเรา</h1>
          <p className="text-gray-600 text-lg">เราพร้อมให้บริการและตอบคำถามของคุณ</p>
        </div>
        <Contact />
      </div>
    </div>
  );
} 