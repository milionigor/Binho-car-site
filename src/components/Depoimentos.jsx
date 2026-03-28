import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaCheckCircle } from "react-icons/fa";

// Importando os estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";

const clientes = [
  {
    id: 1,
    nome: "Marcos Silva",
    cidade: "Vinhedo",
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    id: 2,
    nome: "Ana Paula",
    cidade: "Louveira",
    foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
  },
  {
    id: 3,
    nome: "Ricardo Gomes",
    cidade: "Valinhos",
    foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
  },
  {
    id: 4,
    nome: "Carla Souza",
    cidade: "Vinhedo",
    foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
  },
  {
    id: 5,
    nome: "Lucas Lima",
    cidade: "Campinas",
    foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
  },
  {
    id: 6,
    nome: "Fernanda M.",
    cidade: "Jundiaí",
    foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
  },
  {
    id: 7,
    nome: "João Pedro",
    cidade: "Vinhedo",
    foto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
  },
  {
    id: 8,
    nome: "Bia Arantes",
    cidade: "Itatiba",
    foto: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=800&q=80",
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
                {/* 📸 A FOTO */}
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
              href="https://wa.me/5519999999999"
              target="_blank"
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
