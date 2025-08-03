'use client';

import { useState } from "react";

const ButtonLanguage = () => {
const [language, setLanguage] = useState('th'); // Default to Thai
  return (
    <button className="hover:text-[#A54141] transition-colors" onClick={() => setLanguage(language === 'th' ? 'en' : 'th')}>
      {language === 'th' ? 'ภาษาไทย' : 'English'}
    </button>
  );
};

export default ButtonLanguage;
