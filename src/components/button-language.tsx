'use client';

import { useAtom } from "jotai";
import { languageAtom } from "../store/language"; // Adjust the import path as necessary

const ButtonLanguage = () => {
const [language, setLanguage] = useAtom(languageAtom);
  return (
    <button className="hover:text-[#A54141] transition-colors" onClick={() => setLanguage(language === 'th' ? 'en' : 'th')}>
      {language === 'th' ? 'ภาษาไทย' : 'English'}
    </button>
  );
};

export default ButtonLanguage;
