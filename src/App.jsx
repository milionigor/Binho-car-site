import { useState } from "react";

import { Link, useNavigate, useLocation } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import Depoimentos from "./components/Depoimentos";

import Mapa from "./components/Mapa";

// ✅ IMPORTANDO A SUA FOTO NOVA DO BANNER (Caminho corrigido para a sua pasta!)

import Bannerprincipal from "./assets/Banner principal/bannerprincipal.png";

// Importando os estilos do Swipeg

import "swiper/css";

import "swiper/css/navigation";

import "swiper/css/pagination";

import {
  FaWhatsapp,
  FaSearch,
  FaCalendarAlt,
  FaGasPump,
  FaRoute,
  FaCalendarDay,
} from "react-icons/fa";

import { carrosEstoque } from "./dados";

function App() {
  const [busca, setBusca] = useState("");

  const navigate = useNavigate();

  const location = useLocation();

  const handleVerEstoque = (e) => {
    e.preventDefault();

    const idSeção = "estoque";

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const elemento = document.getElementById(idSeção);

        if (elemento) elemento.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const elemento = document.getElementById(idSeção);

      if (elemento) elemento.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Separação de Destaques e Estoque Geral

  const destaques = carrosEstoque.slice(0, 3);

  const estoqueFiltrado = carrosEstoque.filter(
    (carro) =>
      carro.nome.toLowerCase().includes(busca.toLowerCase()) ||
      carro.tag.toLowerCase().includes(busca.toLowerCase()),
  );

  return (
    <div
      id="topo"
      className="min-h-screen bg-gray-50 flex flex-col font-poppins scroll-smooth"
    >
      <Navbar />

      {/* 🏎️ SEÇÃO 1: BANNER PRINCIPAL */}

      <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 px-6 bg-dark overflow-hidden">
        {/* ✅ AQUI ESTÁ A MÁGICA: Puxando a sua foto nova com opacidade para dar leitura no texto */}

        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center w-full h-full object-cover"
          style={{ backgroundImage: `url(${Bannerprincipal})` }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight uppercase tracking-tighter italic">
            Seu carro novo está aqui <br />
            <span className="text-vermelho-italia">Binho Car Veículos</span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl font-light italic">
            As melhores ofertas de Vinhedo e região com procedência garantida.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#estoque"
              onClick={handleVerEstoque}
              className="bg-vermelho-italia text-white px-10 py-4 rounded-xl font-black text-lg hover:scale-105 transition-transform shadow-xl text-center uppercase tracking-widest"
            >
              Ver Estoque
            </a>
          </div>
        </div>
      </section>

      {/* 🔥 CARROS EM DESTAQUE (CARROSSEL) */}

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-2xl md:text-4xl font-black text-dark uppercase italic">
                Destaques da Semana
              </h2>

              <div className="w-20 h-1.5 bg-verde-italia mt-2"></div>
            </div>
          </div>

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000 }}
            navigation={true}
            pagination={{ clickable: true }}
            className="rounded-[40px] shadow-2xl border-4 border-gray-100 swiper-com-setas"
          >
            {destaques.map((carro) => (
              <SwiperSlide key={carro.id}>
                <div className="bg-dark text-white flex flex-col md:flex-row min-h-[450px]">
                  <div className="md:w-3/5 h-[300px] md:h-auto overflow-hidden bg-white flex items-center justify-center p-0 rounded-t-[40px] md:rounded-l-[40px] md:rounded-t-none">
                    <img
                      src={carro.imagens[0]}
                      alt={carro.nome}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="md:w-2/5 p-8 md:p-10 flex flex-col justify-center">
                    <span className="text-verde-italia font-black uppercase tracking-widest text-xs mb-2">
                      {carro.tag}
                    </span>

                    <h3 className="text-3xl md:text-4xl font-black uppercase italic mb-2 tracking-tighter">
                      {carro.nome}
                    </h3>

                    <p className="text-3xl text-vermelho-italia font-black mb-6">
                      R$ {carro.preco}
                    </p>

                    <div className="flex flex-col gap-3">
                      <Link
                        to={`/carro/${carro.id}`}
                        className="w-full bg-white text-dark font-black py-4 rounded-xl text-center uppercase text-sm tracking-tighter hover:bg-gray-200 transition-all"
                      >
                        Fotos e Detalhes
                      </Link>

                      <a
                        href={`https://wa.me/5519992644705?text=Olá Binho Car! Vi nos destaques do site e quero saber mais sobre o carro: %0A- Veículo: ${carro.nome} %0A- Ano: ${carro.ano} %0A- KM: ${carro.km} %0A- Valor: R$ ${carro.preco}`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full bg-verde-italia text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 uppercase text-sm tracking-tighter hover:bg-green-600 transition-all"
                      >
                        <FaWhatsapp size={20} /> Tenho Interesse
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 🚗 RESTANTE DO ESTOQUE (GRADE) */}

      <section id="estoque" className="py-20 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-dark mb-4 uppercase italic">
            Nosso Estoque
          </h2>

          <div className="w-24 h-2 bg-gradient-to-r from-verde-italia to-vermelho-italia rounded-full mb-10"></div>

          <div className="relative w-full max-w-2xl group">
            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-vermelho-italia transition-colors" />

            <input
              type="text"
              placeholder="Digite a marca ou modelo..."
              className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white shadow-lg border-2 border-transparent focus:border-verde-italia outline-none transition-all"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {estoqueFiltrado.map((carro) => (
            <div
              key={carro.id}
              className="bg-white rounded-[40px] shadow-xl overflow-hidden group hover:shadow-2xl transition-all border border-gray-100 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-white flex items-center justify-center p-0 rounded-t-[40px]">
                <img
                  src={carro.imagens[0]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt={carro.nome}
                />

                <div className="absolute top-5 left-5 bg-verde-italia text-white px-4 py-1 rounded-full text-[10px] font-black shadow-lg uppercase z-10">
                  {carro.tag}
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-black text-dark mb-4 uppercase italic tracking-tighter">
                  {carro.nome}
                </h3>

                <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-8 text-gray-500 font-bold text-xs">
                  <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-2xl">
                    <FaCalendarDay className="text-vermelho-italia" />{" "}
                    {carro.ano}
                  </div>

                  <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-2xl">
                    <FaRoute className="text-vermelho-italia" /> {carro.km}
                  </div>

                  <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-2xl col-span-2">
                    <FaGasPump className="text-vermelho-italia" />{" "}
                    {carro.combustivel}
                  </div>
                </div>

                <div className="mt-auto flex flex-col gap-3">
                  <div className="text-4xl font-black text-dark tracking-tighter mb-2">
                    R$ {carro.preco}
                  </div>

                  <Link
                    to={`/carro/${carro.id}`}
                    className="w-full bg-gray-100 text-dark font-black py-4 rounded-xl hover:bg-gray-200 transition-colors text-center uppercase text-xs tracking-widest shadow-inner"
                  >
                    Fotos e Detalhes
                  </Link>

                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-dark text-white font-black py-4 rounded-xl hover:bg-verde-italia transition-all flex items-center justify-center gap-2 text-center uppercase text-sm"
                  >
                    <FaWhatsapp size={20} /> Tenho Interesse
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div id="depoimentos">
        <Depoimentos />
      </div>

      <section
        id="sobre"
        className="py-20 bg-dark text-white overflow-hidden relative"
      >
        <div className="absolute top-0 left-0 w-full h-1 flex">
          <div className="flex-1 bg-verde-italia"></div>

          <div className="flex-1 bg-white"></div>

          <div className="flex-1 bg-vermelho-italia"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase italic">
              Mais de 20 anos de <br />
              <span className="text-verde-italia">Tradição</span>
            </h2>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed italic">
              A Binho Car Veículos nasceu em Vinhedo para realizar sonhos com
              transparência total.
            </p>
          </div>

          <div className="md:w-1/2 relative">
            <div className="rounded-3xl overflow-hidden border-4 border-gray-800 shadow-2xl aspect-video bg-black relative">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                poster="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80"
              >
                <source src="./drone-binhocar.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      <Mapa />

      <Footer />

      <a
        href="https://wa.me/5519992644705?text=Olá%20Binho%20Car%20Veículos!%20Vim%20pelo%20site%20da%20loja%20e%20gostaria%20de%20mais%20informações%20sobre%20os%20veículos%20disponíveis.%20Poderia%20me%20passar%20mais%20detalhes,%20por%20gentileza"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 bg-verde-italia text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 animate-bounce"
      >
        <FaWhatsapp size={35} />
      </a>
    </div>
  );
}

export default App;
