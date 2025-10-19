import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@components/LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <div className="header-content">
        <p>{t("siteTitle")}</p>
        <LanguageSwitcher />

        {/* <button onClick={openDialog} id="about-open">
            About
        </button> */}
      </div>
    </header>
  );
};

export default Header;
