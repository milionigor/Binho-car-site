import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import DetalhesCarro from "./pages/DetalhesCarro";
import ScrollToTop from "./components/ScrollToTop"; // 1. Importe o componente novo
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop /> {/* 2. Coloque ele aqui, antes das Routes */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/carro/:id" element={<DetalhesCarro />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
