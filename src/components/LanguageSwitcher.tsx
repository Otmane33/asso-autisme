import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const toggleLanguage = () => {
    const newLang = language === "fr" ? "ar" : "fr";
    changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="text-white bg-primary px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
    >
      {language === "fr" ? "العربية" : "Français"}
    </button>
  );
};

export default LanguageSwitcher;
