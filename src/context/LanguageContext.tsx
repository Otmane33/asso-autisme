import { createContext, useState, useEffect, ReactNode } from "react";
import { useTranslation } from "react-i18next";

type LanguageContextType = {
  language: string;
  changeLanguage: (lang: string) => void;
  isRTL: boolean;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: "fr",
  changeLanguage: () => {},
  isRTL: false,
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "fr");
  const [isRTL, setIsRTL] = useState(i18n.language === "ar");

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    setLanguage(i18n.language);
    setIsRTL(i18n.language === "ar");

    // Ajouter l'attribut dir au document
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";

    // Ajouter une classe pour le style RTL
    if (i18n.language === "ar") {
      document.documentElement.classList.add("rtl");
    } else {
      document.documentElement.classList.remove("rtl");
    }
  }, [i18n.language]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
