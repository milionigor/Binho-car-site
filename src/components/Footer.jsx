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
        {/* Coluna 1: Sobre */}
        <div>
          <h3 className="text-2xl font-bold mb-6 italic">
            BINHO<span className="text-[#2ecc71]">CAR</span>
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
              Vinhedo - SP, Brasil
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#2ecc71]" />
              (19) 99999-9999
            </li>
          </ul>
        </div>

        {/* Coluna 3: Redes Sociais */}
        <div>
          <h4 className="text-xl font-bold mb-6 border-l-4 border-[#e74c3c] pl-3 font-poppins">
            Siga-nos
          </h4>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-[#e74c3c] transition-all"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-[#e74c3c] transition-all"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
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
