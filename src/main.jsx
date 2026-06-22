import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Toaster } from "sonner";
import App from "./App.jsx";
import { AuthProvider } from "@/context/AuthContext";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <StrictMode>
        <Toaster richColors position="bottom-right" />
        <App />
      </StrictMode>
    </BrowserRouter>
  </AuthProvider>,
);
