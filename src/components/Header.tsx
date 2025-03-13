import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { LanguageContext } from "../context/LanguageContext";

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { isRTL } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.actions"), path: "/actions" },
    { name: t("nav.events"), path: "/events" },
    { name: t("nav.getInvolved"), path: "/get-involved" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="container-custom py-5">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center transition-transform duration-300 hover:scale-105"
          >
            <img
              src="/images/Logo.webp"
              alt="Logo Association"
              className="h-16 w-auto"
            />
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? "text-primary font-bold after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-full after:h-1 after:bg-secondary after:rounded-full"
                    : "text-primary opacity-70 hover:opacity-100"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <LanguageSwitcher />
          </nav>

          {/* Hamburger menu */}
          <div className="md:hidden flex items-center">
            <LanguageSwitcher />
            <button
              onClick={toggleMenu}
              className="ml-4 p-2 bg-primary text-white rounded-full hover:bg-secondary focus:outline-none transition-all duration-300 shadow-md"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-300 px-2 py-2 rounded-md ${
                    location.pathname === item.path
                      ? "text-white font-bold bg-primary"
                      : "text-primary opacity-70 hover:bg-gray-100"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
