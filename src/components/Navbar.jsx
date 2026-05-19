import { useState } from "react";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logoBinhoCar from "../assets/logo-binhocar.png";

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const fecharMenu = () => setMenuAberto(false);

  // 🚀 FUNÇÃO MÁGICA ATUALIZADA: Resolve o problema de navegação entre páginas
  const handleNavegacao = (idSeção, e) => {
    e.preventDefault();
    fecharMenu();

    if (location.pathname !== "/") {
      // Se NÃO estiver na Home (ex: está em Detalhes), primeiro volta pra Home
      navigate("/");
      // Espera um milésimo para a página carregar e rola até a seção
      setTimeout(() => {
        const elemento = document.getElementById(idSeção);
        if (elemento) {
          elemento.scrollIntoView({ behavior: "smooth" });
        } else if (idSeção === "topo") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
    } else {
      // Se já ESTIVER na Home, apenas faz o scroll suave normal
      const elemento = document.getElementById(idSeção);
      if (elemento) {
        elemento.scrollIntoView({ behavior: "smooth" });
      } else if (idSeção === "topo") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const linksMenu = [
    { nome: "Home", id: "topo" },
    { nome: "Estoque", id: "estoque" },
    { nome: "Família Binho Car", id: "depoimentos" },
    { nome: "Sobre Nós", id: "sobre" },
  ];

  return (
    <nav className="bg-dark/95 backdrop-blur-sm shadow-2xl fixed w-full z-50 font-poppins border-b-2 border-vermelho-italia">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between h-24 items-center">
          {/* Logo com navegação inteligente */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            onClick={(e) => handleNavegacao("topo", e)}
          >
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
                href={`#${link.id}`}
                onClick={(e) => handleNavegacao(link.id, e)}
                className="text-white font-bold hover:text-vermelho-italia transition-colors uppercase text-sm tracking-widest cursor-pointer"
              >
                {link.nome}
              </a>
            ))}

            <a
              href="https://wa.me/5519992644705?text=Olá%20Binho%20Car%20Veículos!%20Vim%20pelo%20site%20da%20loja%20e%20gostaria%20de%20mais%20informações%20sobre%20os%20veículos%20disponíveis.%20Poderia%20me%20passar%20mais%20detalhes,%20por%20gentileza"
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

      {/* Menu Lateral Mobile */}
      <div
        className={`fixed top-24 left-0 w-full h-screen bg-dark md:hidden transition-transform duration-300 ease-in-out z-40 p-8 ${
          menuAberto ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8 text-center pt-10">
          {linksMenu.map((link) => (
            <a
              key={link.nome}
              href={`#${link.id}`}
              onClick={(e) => handleNavegacao(link.id, e)}
              className="text-white font-black text-2xl hover:text-vermelho-italia transition-colors uppercase italic tracking-tighter py-3 border-b-2 border-gray-800"
            >
              {link.nome}
            </a>
          ))}

          <a
            href="https://wa.me/5519992644705?text=Olá%20Binho%20Car%20Veículos!%20Vim%20pelo%20site%20da%20loja%20e%20gostaria%20de%20mais%20informações%20sobre%20os%20veículos%20disponíveis.%20Poderia%20me%20passar%20mais%20detalhes,%20por%20gentileza"
            target="_blank"
            onClick={fecharMenu}
            className="w-full mt-6 bg-verde-italia text-white px-8 py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-green-600 transition-all shadow-lg font-black uppercase text-lg"
          >
            <FaWhatsapp size={22} /> Falar com o Binho
          </a>
        </div>
      </div>
    </nav>
  );
}
