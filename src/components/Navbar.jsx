import { FaCar, FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo da Loja */}
          <div className="flex items-center gap-2">
            <FaCar className="text-vermelho-italia text-3xl" />
            <span className="text-2xl font-bold text-dark tracking-tighter">
              BINHO<span className="text-verde-italia">CAR</span>
            </span>
          </div>

          {/* Menu de Navegação - Escondido no Celular, Visível no Computador (md:) */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a
              href="#"
              className="hover:text-vermelho-italia transition-colors"
            >
              Home
            </a>
            <a
              href="#estoque"
              className="hover:text-vermelho-italia transition-colors"
            >
              Estoque
            </a>
            <a
              href="#"
              className="hover:text-vermelho-italia transition-colors"
            >
              Sobre Nós
            </a>

            {/* Botão de Contato com as cores da Itália */}
            <a
              href="https://wa.me/5519999999999"
              target="_blank"
              rel="noreferrer"
              className="bg-verde-italia text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-green-600 transition-all shadow-lg font-bold"
            >
              <FaWhatsapp /> Contato
            </a>
          </div>

          {/* Ícone de menu para Celular (Simples por enquanto) */}
          <div className="md:hidden text-dark font-bold">Menu ☰</div>
        </div>
      </div>
    </nav>
  );
}
