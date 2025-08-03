interface HeroActionButtonsProps {
  className?: string;
}

export default function HeroActionButtons({ className = "" }: HeroActionButtonsProps) {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      {/* Primary CTA - Sign Up */}
      <button className="bg-[#A54141] hover:bg-[#8B3636] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg">
        สมัครสมาชิกฟรี
      </button>

      {/* Secondary CTA - Contact */}
      <button className="border-2 border-[#A54141] text-[#A54141] hover:bg-[#A54141] hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200">
        ติดต่อเรา
      </button>

      {/* Tertiary CTA - Login */}
      <button className="text-[#A54141] hover:text-[#8B3636] px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-200 hover:bg-[#F5F0F0]">
        เข้าสู่ระบบ →
      </button>
    </div>
  );
} 