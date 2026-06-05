import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaCheckCircle } from "react-icons/fa";

// 📸 IMPORTANDO AS FOTOS REAIS DOS ATIVOS (ASSETS)
import cliente1 from "../assets/cliente1.png";
import cliente2 from "../assets/cliente2.png";
import cliente3 from "../assets/cliente3.png";
import cliente4 from "../assets/cliente4.png";
import cliente5 from "../assets/cliente5.png";
import cliente6 from "../assets/cliente6.png";
import cliente7 from "../assets/cliente7.png";
import cliente8 from "../assets/cliente8.png";

// Importando os estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";

const clientes = [
  {
    id: 1,
    nome: "Nivaldo",
    cidade: "Vinhedo",
    foto: cliente1,
  },
  {
    id: 2,
    nome: "Isaías",
    cidade: "Vinhedo",
    foto: cliente2,
  },
  {
    id: 3,
    nome: "Diego",
    cidade: "Vinhedo",
    foto: cliente3,
  },
  {
    id: 4,
    nome: "Ricardo",
    cidade: "Vinhedo",
    foto: cliente4,
  },
  {
    id: 5,
    nome: "Danilo",
    cidade: "Vinhedo",
    foto: cliente5,
  },
  {
    id: 6,
    nome: "Márcio",
    cidade: "Vinhedo",
    foto: cliente6,
  },
  {
    id: 7,
    nome: "Ricardo",
    cidade: "Vinhedo",
    foto: cliente7,
  },
  {
    id: 8,
    nome: "Cristina",
    cidade: "Vinhedo",
    foto: cliente8,
  },
];

export default function Depoimentos() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-dark mb-4 uppercase tracking-tighter italic">
            #FAMÍLIABINHOCAR
          </h2>
          <p className="text-gray-500 text-xl font-light">
            Sorrisos reais de quem já garantiu o melhor negócio de Vinhedo.
          </p>
        </div>

        {/* 🎢 O CARROSSEL ANIMADO */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-16"
        >
          {clientes.map((cliente) => (
            <SwiperSlide key={cliente.id}>
              <div className="group relative h-[450px] rounded-[40px] overflow-hidden shadow-xl border-4 border-gray-50 transition-all duration-500">
                {/* 📸 A FOTO REAL */}
                <img
                  src={cliente.foto}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={cliente.nome}
                />

                {/* Gradiente para leitura */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                {/* Nome e Cidade */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-left text-white">
                  <p className="flex items-center gap-2 text-2xl font-black uppercase italic tracking-tighter">
                    {cliente.nome}{" "}
                    <FaCheckCircle className="text-verde-italia text-xl" />
                  </p>
                  <p className="text-sm font-bold text-vermelho-italia tracking-widest uppercase opacity-90">
                    {cliente.cidade} - SP
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Banner de Chamada */}
        <div className="mt-12 bg-verde-italia p-1 rounded-[40px] shadow-2xl overflow-hidden group">
          <div className="bg-dark p-10 rounded-[38px] flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-left">
              <h3 className="text-white text-3xl font-black uppercase italic tracking-tighter mb-2">
                Você é o nosso próximo convidado!
              </h3>
              <p className="text-gray-400 text-lg">
                O café está pronto e as chaves estão na mesa.
              </p>
            </div>
            <a
              href="https://wa.me/5519992644705?text=Olá%20Binho%20Car%20Veículos!%20Gostaria%20de%20marcar%20uma%20visita%20para%20tomar%20um%20café%20e%20conhecer%20os%20carros!"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-dark px-10 py-5 rounded-2xl font-black text-lg hover:bg-vermelho-italia hover:text-white transition-all uppercase shadow-lg"
            >
              Marcar Minha Visita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
