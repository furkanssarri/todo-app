import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import MobileContextProvider from "./context/MobileContextProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MobileContextProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </MobileContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
