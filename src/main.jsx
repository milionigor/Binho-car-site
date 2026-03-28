import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import DetalhesCarro from "./pages/DetalhesCarro"; // 1. Importamos a nova página
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Rota da Página Inicial */}
        <Route path="/" element={<App />} />

        {/* 2. Ativamos a rota de detalhes removendo os comentários */}
        <Route path="/carro/:id" element={<DetalhesCarro />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
