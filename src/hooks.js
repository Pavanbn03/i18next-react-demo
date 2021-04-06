import React from "react";
import { withTranslation, Trans } from "react-i18next";
import { useTranslation } from "react-i18next";
const Hooks = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h2>{t("Welcome to React")}</h2>
        <button onClick={() => changeLanguage("de")}>de</button>
        <button onClick={() => changeLanguage("en")}>en</button>
      </div>
      <div className="App-intro">
        <h3>{t("description")}</h3>
        <Trans>
          Code <code>react</code>
        </Trans>
      </div>
    </div>
  );
};

// extended main view with translate hoc
export default Hooks;
