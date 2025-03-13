import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-primary to-primary/95 text-white py-16 shadow-inner">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div className="bg-primary/30 p-6 rounded-xl backdrop-blur-sm shadow-lg">
            <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">
              {language === "fr" ? "Qui sommes-nous" : "عن الجمعية"}
            </h3>
            <p className="text-white/90 mb-4 leading-relaxed">
              {language === "fr"
                ? "Association pour l'Accompagnement et l'Intégration des Enfants Autistes"
                : "جمعية تأهيل وإدماج أطفال التوحد"}
            </p>
          </div>

          {/* Quick Links */}
          <div className="bg-primary/30 p-6 rounded-xl backdrop-blur-sm shadow-lg">
            <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">
              {language === "fr" ? "Liens rapides" : "روابط سريعة"}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-white/90 hover:text-secondary transition-colors flex items-center"
                >
                  <span className="mr-2 rtl:ml-2">➤</span>
                  {language === "fr" ? "Accueil" : "الرئيسية"}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/90 hover:text-secondary transition-colors flex items-center"
                >
                  <span className="mr-2 rtl:ml-2">➤</span>
                  {language === "fr" ? "Qui sommes-nous" : "من نحن"}
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-white/90 hover:text-secondary transition-colors flex items-center"
                >
                  <span className="mr-2 rtl:ml-2">➤</span>
                  {language === "fr" ? "Événements" : "الأنشطة"}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/90 hover:text-secondary transition-colors flex items-center"
                >
                  <span className="mr-2 rtl:ml-2">➤</span>
                  {language === "fr" ? "Contact" : "اتصل بنا"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="bg-primary/30 p-6 rounded-xl backdrop-blur-sm shadow-lg">
            <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">
              {language === "fr" ? "Contact" : "معلومات الاتصال"}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+212661706665"
                  className="text-white/90 hover:text-secondary transition-colors flex items-center"
                >
                  <span className="mr-2 rtl:ml-2">➤</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +212 661-706665
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@assooufok.com"
                  className="text-white/90 hover:text-secondary transition-colors flex items-center"
                >
                  <span className="mr-2 rtl:ml-2">➤</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  contact@assooufok.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="mr-2 rtl:ml-2">➤</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-white">
                  {t("contact.info.addressValue")}
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="bg-primary/30 p-6 rounded-xl backdrop-blur-sm shadow-lg">
            <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">
              {language === "fr" ? "Réseaux sociaux" : "التواصل الاجتماعي"}
            </h3>
            <div className="flex items-center justify-start gap-8">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 bg-white text-primary hover:bg-secondary hover:text-white rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 bg-white text-primary hover:bg-secondary hover:text-white rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-gray-400">
              <p>
                © {currentYear}{" "}
                {language === "fr"
                  ? "Association pour l'Accompagnement et l'Intégration des Enfants Autistes. Tous droits réservés."
                  : "جمعية تأهيل وإدماج أطفال التوحد. جميع الحقوق محفوظة."}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-start md:justify-end text-sm">
              <Link
                to="/mentions-legales"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {language === "fr" ? "Mentions légales" : "الإشعار القانوني"}
              </Link>
              <Link
                to="/politique-confidentialite"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {language === "fr"
                  ? "Politique de confidentialité"
                  : "سياسة الخصوصية"}
              </Link>
              <Link
                to="/conditions-utilisation"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {language === "fr"
                  ? "Conditions d'utilisation"
                  : "شروط الاستخدام"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
