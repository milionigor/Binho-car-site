import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import DetalhesCarro from "./pages/DetalhesCarro";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 🚀 O segredo para o GitHub Pages não ficar branco é o basename abaixo: */}
    <BrowserRouter basename="/Binho-car-site">
      <Routes>
        {/* Rota da Página Inicial */}
        <Route path="/" element={<App />} />

        {/* Rota de Detalhes do Carro */}
        <Route path="/carro/:id" element={<DetalhesCarro />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
