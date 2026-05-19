import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Coluna 1: Sobre com a Logo totalmente Vermelha */}
        <div>
          <h3 className="text-2xl font-black mb-6 italic tracking-tighter text-[#e74c3c]">
            BINHOCAR
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Sua loja de carros populares em Vinhedo - SP. Transparência,
            confiança e o melhor preço da região.
          </p>
        </div>

        {/* Coluna 2: Contato e Endereço */}
        <div>
          <h4 className="text-xl font-bold mb-6 border-l-4 border-[#e74c3c] pl-3 font-poppins">
            Onde Estamos
          </h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#e74c3c]" />
              Av. Pres. Castelo Branco, 2000 - Jardim Sao Matheus, Vinhedo - SP,
              13284-408
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#2ecc71]" />
              (19)99264-4705
            </li>
          </ul>
        </div>

        {/* Coluna 3: Redes Sociais */}
        <div>
          <h4 className="text-xl font-bold mb-6 border-l-4 border-[#e74c3c] pl-3 font-poppins">
            Siga-nos
          </h4>
          <div className="flex gap-4">
            {/* ✅ INSTAGRAM */}
            <a
              href="https://www.instagram.com/binhocarveiculos/"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-[#e74c3c] transition-all"
            >
              <FaInstagram size={20} />
            </a>
            {/* ✅ FACEBOOK */}
            <a
              href="https://www.facebook.com/profile.php?id=61586308212811"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-[#e74c3c] transition-all"
            >
              <FaFacebook size={20} />
            </a>
            {/* ✅ WHATSAPP */}
            <a
              href="https://wa.me/5519992644705?text=Olá%20Binho%20Car%20Veículos!%20Vim%20pelo%20site%20da%20loja%20e%20gostaria%20de%20mais%20informações%20sobre%20os%20veículos%20disponíveis.%20Poderia%20me%20passar%20mais%20detalhes,%20por%20gentileza"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-[#2ecc71] transition-all"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Binho Car. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
