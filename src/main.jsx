import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom"; // Trocamos para HashRouter
import App from "./App.jsx";
import DetalhesCarro from "./pages/DetalhesCarro";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Com HashRouter, não precisamos mais do basename! */}
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/carro/:id" element={<DetalhesCarro />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
