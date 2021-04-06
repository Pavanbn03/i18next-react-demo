import React, { Component } from "react";
import { withTranslation, Trans } from "react-i18next";
import Hooks from "./hooks";

class App extends Component {
  render() {
    const { t, i18n } = this.props;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

    return (
      <div className="App">
        <div className="App-header">
          Hooks:
          <Hooks />
          <br />
          Class:
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
  }
}

// extended main view with translate hoc
export default withTranslation()(App);
