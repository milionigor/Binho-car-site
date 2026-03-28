import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaWhatsapp,
  FaArrowLeft,
  FaGasPump,
  FaCalendarAlt,
  FaRoad,
} from "react-icons/fa";
import { carrosEstoque } from "../dados"; // Importando nossos carros

export default function DetalhesCarro() {
  const { id } = useParams();

  // Procurar o carro específico na nossa lista pelo ID
  const carro = carrosEstoque.find((c) => c.id === parseInt(id));

  // Estado para trocar a foto principal
  const [fotoPrincipal, setFotoPrincipal] = useState(carro?.img);

  if (!carro)
    return <div className="pt-40 text-center">Carro não encontrado!</div>;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-poppins">
      <Navbar />

      <main className="flex-grow pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
        <Link
          to="/"
          className="flex items-center gap-2 text-dark font-bold mb-8 hover:text-vermelho-italia transition-colors w-fit uppercase text-sm tracking-widest"
        >
          <FaArrowLeft /> Voltar para o estoque
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Lado Esquerdo: Galeria de Fotos */}
          <div className="space-y-4">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[500px]">
              <img
                src={fotoPrincipal}
                className="w-full h-full object-cover animate-fade-in"
                alt={carro.nome}
              />
            </div>

            <div className="grid grid-cols-4 gap-4">
              {carro.fotosExtras.map((foto, index) => (
                <button
                  key={index}
                  onClick={() => setFotoPrincipal(foto)}
                  className={`h-24 rounded-xl overflow-hidden border-2 transition-all ${fotoPrincipal === foto ? "border-vermelho-italia" : "border-transparent opacity-60"}`}
                >
                  <img src={foto} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Lado Direito: Informações e Compra */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
            <span className="bg-verde-italia text-white px-4 py-1 rounded-full text-xs font-black uppercase mb-4 inline-block">
              {carro.tag}
            </span>
            <h1 className="text-4xl font-black text-dark mb-2 uppercase tracking-tighter">
              {carro.nome}
            </h1>
            <p className="text-3xl font-bold text-vermelho-italia mb-8">
              R$ {carro.preco}
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-gray-100">
              <div className="text-center">
                <FaCalendarAlt
                  className="mx-auto text-vermelho-italia mb-2"
                  size={20}
                />
                <p className="text-xs text-gray-400 uppercase font-bold">Ano</p>
                <p className="font-bold text-dark">{carro.ano}</p>
              </div>
              <div className="text-center">
                <FaRoad
                  className="mx-auto text-vermelho-italia mb-2"
                  size={20}
                />
                <p className="text-xs text-gray-400 uppercase font-bold">KM</p>
                <p className="font-bold text-dark">{carro.km}</p>
              </div>
              <div className="text-center">
                <FaGasPump
                  className="mx-auto text-vermelho-italia mb-2"
                  size={20}
                />
                <p className="text-xs text-gray-400 uppercase font-bold">
                  Combustível
                </p>
                <p className="font-bold text-dark">{carro.combustivel}</p>
              </div>
            </div>

            <div className="mb-10 text-gray-600 leading-relaxed italic">
              <h4 className="text-dark font-bold uppercase text-sm mb-2 not-italic">
                Descrição do Binho:
              </h4>
              "{carro.descricao}"
            </div>

            <a
              href={`https://wa.me/5519999999999?text=Olá Binho! Vi no site o ${carro.nome} de R$ ${carro.preco} e gostaria de saber mais.`}
              target="_blank"
              className="w-full bg-verde-italia text-white text-center font-black py-5 rounded-2xl hover:bg-green-600 transition-all flex items-center justify-center gap-3 shadow-xl"
            >
              <FaWhatsapp size={24} /> MARCAR VISITA AGORA
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
