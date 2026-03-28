import { useState } from "react";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

// 1. IMPORTAR O LOGO REAL AQUI
import logoBinhoCar from "../assets/logo-binhocar.png"; // Verifique se o nome do arquivo está correto

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const fecharMenu = () => setMenuAberto(false);

  const linksMenu = [
    { nome: "Home", url: "/" },
    { nome: "Estoque", url: "/#estoque" },
    { nome: "Sobre Nós", url: "/#sobre" },
  ];

  return (
    // 2. MUDAMOS O FUNDO PARA PRETO (bg-dark) E O TEXTO PARA BRANCO (text-white)
    <nav className="bg-dark/95 backdrop-blur-sm shadow-2xl fixed w-full z-50 font-poppins border-b-2 border-vermelho-italia">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between h-24 items-center">
          {/* 🚗 LOGO REAL DA LOJA (Clicável) */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            onClick={fecharMenu}
          >
            {/* Tag img com altura ajustada (h-16 = 64px) */}
            <img
              src={logoBinhoCar}
              alt="Logo Binho Car Vinhedo"
              className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {linksMenu.map((link) => (
              <a
                key={link.nome}
                href={link.url}
                // Texto agora é branco puro com hover no vermelho
                className="text-white font-bold hover:text-vermelho-italia transition-colors uppercase text-sm tracking-widest"
              >
                {link.nome}
              </a>
            ))}

            <a
              href="https://wa.me/5519999999999"
              target="_blank"
              rel="noreferrer"
              className="bg-verde-italia text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-green-600 transition-all shadow-lg font-black uppercase text-sm tracking-wider"
            >
              <FaWhatsapp size={18} /> Contato
            </a>
          </div>

          {/* Botão Hambúrguer (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuAberto(!menuAberto)}
              // Botão agora é claro contra o fundo preto
              className="text-white p-2 rounded-lg bg-gray-800 focus:outline-none transition-colors"
            >
              {menuAberto ? (
                <FaTimes size={24} className="text-vermelho-italia" />
              ) : (
                <FaBars size={24} className="text-verde-italia" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Lateral Mobile (Fundo também fica preto) */}
      <div
        className={`fixed top-24 left-0 w-full h-screen bg-dark md:hidden transition-transform duration-300 ease-in-out z-40 p-8 ${menuAberto ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col gap-8 text-center pt-10">
          {linksMenu.map((link) => (
            <a
              key={link.nome}
              href={link.url}
              onClick={fecharMenu}
              // Texto branco no mobile
              className="text-white font-black text-2xl hover:text-vermelho-italia transition-colors uppercase italic tracking-tighter py-3 border-b-2 border-gray-800"
            >
              {link.nome}
            </a>
          ))}

          <a
            href="https://wa.me/5519999999999"
            target="_blank"
            onClick={fecharMenu}
            className="w-full mt-6 bg-verde-italia text-white px-8 py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-green-600 transition-all shadow-xl font-black uppercase text-lg"
          >
            <FaWhatsapp size={22} /> Falar com o Binho
          </a>
        </div>
      </div>
    </nav>
  );
}
