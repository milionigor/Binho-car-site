import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Depoimentos from "./components/Depoimentos"; // Passo 2: Importando os depoimentos
import {
  FaWhatsapp,
  FaGasPump,
  FaCalendarAlt,
  FaRoad,
  FaSearch,
} from "react-icons/fa";
import { carrosEstoque } from "./dados";

function App() {
  // 🔍 Lógica da Barra de Busca
  const [busca, setBusca] = useState("");

  // Filtramos os carros conforme o que o usuário digita no nome ou na tag
  const carrosFiltrados = carrosEstoque.filter(
    (carro) =>
      carro.nome.toLowerCase().includes(busca.toLowerCase()) ||
      carro.tag.toLowerCase().includes(busca.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-poppins scroll-smooth">
      <Navbar />

      {/* 🏎️ SEÇÃO 1: BANNER PRINCIPAL */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 px-6 bg-dark overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight uppercase tracking-tighter">
            Seu novo carro está na <br />
            <span className="text-vermelho-italia">Binho</span>{" "}
            <span className="text-verde-italia">Car</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl font-light">
            As melhores ofertas de Vinhedo e região com procedência garantida e
            taxas exclusivas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#estoque"
              className="bg-vermelho-italia text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl text-center"
            >
              Ver Estoque
            </a>
            <a
              href="https://wa.me/5519999999999"
              target="_blank"
              rel="noreferrer"
              className="bg-verde-italia text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-xl"
            >
              <FaWhatsapp size={24} /> Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 🚗 SEÇÃO 2: ESTOQUE COM BUSCA */}
      <section id="estoque" className="py-20 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-dark mb-4 uppercase italic">
            Nosso Estoque
          </h2>
          <div className="w-24 h-1.5 bg-vermelho-italia rounded-full mb-10"></div>

          {/* 🔍 BARRA DE BUSCA PREMIUM */}
          <div className="relative w-full max-w-2xl group">
            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-vermelho-italia transition-colors" />
            <input
              type="text"
              placeholder="Digite a marca ou modelo (ex: BMW, Polo, SUV...)"
              className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white shadow-lg border-2 border-transparent focus:border-vermelho-italia outline-none text-lg transition-all"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
        </div>

        {/* LISTA DE CARROS FILTRADA */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {carrosFiltrados.length > 0 ? (
            carrosFiltrados.map((carro) => (
              <div
                key={carro.id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={carro.img}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={carro.nome}
                  />
                  <div className="absolute top-4 left-4 bg-verde-italia text-white px-4 py-1 rounded-full text-[10px] font-black shadow-lg uppercase tracking-widest">
                    {carro.tag}
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-dark mb-4 uppercase tracking-tighter">
                    {carro.nome}
                  </h3>

                  <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-8 text-gray-500 font-medium text-xs">
                    <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
                      <FaCalendarAlt className="text-vermelho-italia" />{" "}
                      {carro.ano}
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
                      <FaRoad className="text-vermelho-italia" /> {carro.km}
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg col-span-2">
                      <FaGasPump className="text-vermelho-italia" />{" "}
                      {carro.combustivel}
                    </div>
                  </div>

                  <div className="mt-auto flex flex-col gap-3">
                    <div className="text-3xl font-black text-dark">
                      R$ {carro.preco}
                    </div>

                    <Link
                      to={`/carro/${carro.id}`}
                      className="w-full bg-gray-100 text-dark font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors text-center uppercase text-sm"
                    >
                      Fotos e Detalhes
                    </Link>

                    <a
                      href={`https://wa.me/5519999999999?text=Olá Binho! Vi no site e tenho interesse no ${carro.nome}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full bg-dark text-white font-bold py-4 rounded-xl hover:bg-verde-italia transition-colors flex items-center justify-center gap-2 text-center uppercase"
                    >
                      <FaWhatsapp size={20} /> Tenho Interesse
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-2xl text-gray-400 italic">
                Nenhum carro encontrado com esse nome... 😕
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ⭐ SEÇÃO 3: DEPOIMENTOS DE CLIENTES */}
      <Depoimentos />

      <Footer />

      <a
        href="https://wa.me/5519999999999"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-verde-italia text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 animate-bounce"
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
}

export default App;
