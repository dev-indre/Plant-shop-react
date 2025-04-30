import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { PlantsProvider } from "./context/PlantsContext.jsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <PlantsProvider>
    <BrowserRouter basename="/Plant-shop-react">
      <App />
    </BrowserRouter>
  </PlantsProvider>
);
