import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import MobileContextProvider from "./context/MobileContextProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import { UIProvider } from "./context/UIProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MobileContextProvider>
        <UIProvider>
          <App />
        </UIProvider>
      </MobileContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
