import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaWhatsapp,
  FaArrowLeft,
  FaGasPump,
  FaCalendarAlt,
  FaRoad,
  FaPlayCircle,
} from "react-icons/fa";
import { carrosEstoque } from "../dados";

// Importando os estilos do Swiper para o carrossel de fotos
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function DetalhesCarro() {
  const { id } = useParams();
  const carro = carrosEstoque.find((c) => c.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!carro) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-bold">Carro não encontrado!</p>
      </div>
    );
  }

  // Lógica para organizar fotos e vídeo
  const midias = [];
  if (carro.imagens && carro.imagens.length > 0) {
    midias.push({ tipo: "imagem", url: carro.imagens[0] });

    if (carro.videoMp4) {
      midias.push({ tipo: "video", url: carro.videoMp4 });
    }

    carro.imagens.slice(1).forEach((img) => {
      midias.push({ tipo: "imagem", url: img });
    });
  } else if (carro.videoMp4) {
    midias.push({ tipo: "video", url: carro.videoMp4 });
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-poppins">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
        <Link
          to="/"
          className="flex items-center gap-2 text-dark font-bold mb-8 hover:text-vermelho-italia transition-all w-fit uppercase text-xs tracking-widest bg-white px-4 py-2 rounded-full shadow-sm"
        >
          <FaArrowLeft /> Voltar para o estoque
        </Link>

        {/* ✅ CSS INJETADO PARA SETAS FORTES E VERDES */}
        <style>{`
          /* Seta Direita */
          .swiper-button-next::after {
            content: "" !important;
            border: solid #2ecc71;
            border-width: 0 6px 6px 0;
            display: inline-block;
            padding: 8px;
            transform: rotate(-45deg);
          }
          
          /* Seta Esquerda */
          .swiper-button-prev::after {
            content: "" !important;
            border: solid #2ecc71;
            border-width: 0 6px 6px 0;
            display: inline-block;
            padding: 8px;
            transform: rotate(135deg);
          }

          /* Fundo Branco da Seta para destaque */
          .swiper-button-next, .swiper-button-prev {
            background-color: rgba(255, 255, 255, 0.85) !important;
            width: 50px !important;
            height: 50px !important;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 6px rgba(0,0,0,0.2);
            opacity: 1 !important;
            transition: all 0.2s;
          }

          .swiper-button-next:hover, .swiper-button-prev:hover {
            background-color: white !important;
            transform: scale(1.1);
          }

          /* Paginação (Bolinhas) Vermelha embaixo */
          .swiper-pagination-bullet-active {
            background-color: #e74c3c !important;
          }
        `}</style>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            
            {carro.videoMp4 && (
              <div className="bg-vermelho-italia text-white text-center py-3 px-4 rounded-xl font-black uppercase text-xs md:text-sm animate-pulse flex items-center justify-center gap-2 shadow-lg tracking-widest">
                <FaPlayCircle size={20} /> Este anúncio possui vídeo!
              </div>
            )}

            <div className="rounded-[40px] overflow-hidden shadow-2xl h-[400px] md:h-[550px] bg-white border-4 border-gray-100 relative">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={true}
                pagination={{ clickable: true }}
                className="w-full h-full"
              >
                {midias.map((midia, index) => (
                  <SwiperSlide key={index}>
                    {midia.tipo === "imagem" ? (
                      <div className="w-full h-full flex items-center justify-center p-2 bg-white">
                        <img
                          src={midia.url}
                          className="w-full h-full object-contain"
                          alt={`${carro.nome} - Mídia ${index + 1}`}
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-black relative">
                        <video
                          src={midia.url}
                          controls
                          controlsList="nodownload"
                          preload="metadata"
                          className="w-full h-full object-contain z-10"
                        />
                      </div>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            
            <p className="text-center text-xs text-gray-400 italic">
              Use as setas ou arraste para os lados para ver mais.
            </p>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-xl border border-gray-100 relative">
            <div className="absolute top-0 right-0 w-32 h-1 flex">
              <div className="flex-1 bg-verde-italia"></div>
              <div className="flex-1 bg-white"></div>
              <div className="flex-1 bg-vermelho-italia"></div>
            </div>

            <span className="bg-verde-italia text-white px-4 py-1 rounded-full text-[10px] font-black uppercase mb-4 inline-block">
              {carro.tag}
            </span>
            <h1 className="text-4xl font-black text-dark mb-2 uppercase tracking-tighter italic">
              {carro.nome}
            </h1>
            <p className="text-4xl font-black text-vermelho-italia mb-8">
              R$ {carro.preco}
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-gray-100">
              <div className="text-center">
                <FaCalendarAlt
                  className="mx-auto text-vermelho-italia mb-2"
                  size={20}
                />
                <p className="font-bold text-dark text-sm">{carro.ano}</p>
              </div>
              <div className="text-center border-x border-gray-100">
                <FaRoad
                  className="mx-auto text-vermelho-italia mb-2"
                  size={20}
                />
                <p className="font-bold text-dark text-sm">{carro.km}</p>
              </div>
              <div className="text-center">
                <FaGasPump
                  className="mx-auto text-vermelho-italia mb-2"
                  size={20}
                />
                <p className="font-bold text-dark text-sm">
                  {carro.combustivel}
                </p>
              </div>
            </div>

            <div className="mb-10 p-6 bg-gray-50 rounded-2xl italic text-gray-600 border-l-4 border-verde-italia">
              "{carro.descricao}"
            </div>

            <a
  href={`https://wa.me/5519992644705?text=Olá Binho Car! Estava vendo os carros em estoque no seu site e gostei deste veículo: %0A- Veículo: ${carro.nome} %0A- Ano: ${carro.ano} %0A- KM: ${carro.km} %0A- Valor: R$ ${carro.preco}`}
  target="_blank"
              rel="noreferrer"
              className="w-full bg-verde-italia text-white text-center font-black py-5 rounded-2xl hover:bg-green-600 transition-all flex items-center justify-center gap-3 shadow-xl uppercase group"
            >
              <FaWhatsapp
                size={24}
                className="group-hover:scale-125 transition-transform"
              />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}