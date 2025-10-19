import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const change = (lng) => {
    i18n.changeLanguage(lng);
    try {
      localStorage.setItem("i18nextLng", lng);
    } catch (e) {
      // ignore
    }
  };

  return (
    <div className="language-switcher">
      <button
        onClick={() => change("en")}
        aria-label="English"
        className={currentLang === "en" ? "active" : "inactive"}
      >
        EN
      </button>
      <button
        onClick={() => change("ru")}
        aria-label="Russian"
        className={currentLang === "ru" ? "active" : "inactive"}
      >
        RU
      </button>
    </div>
  );
};

export default LanguageSwitcher;
