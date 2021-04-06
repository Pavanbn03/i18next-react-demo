import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom";
import i18n from "./i18n";
import App from "./App";
import { I18nextProvider } from "react-i18next";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Suspense fallback={<div>loading....</div>}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Suspense>
  </StrictMode>,
  rootElement
);
