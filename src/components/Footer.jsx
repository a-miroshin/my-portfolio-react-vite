import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@components/LanguageSwitcher";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <small>{t("footer_text")}</small>
    </footer>
  );
};

export default Footer;
