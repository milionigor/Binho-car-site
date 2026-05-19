import { FaMapMarkerAlt, FaRoute, FaClock } from "react-icons/fa";

export default function Mapa() {
  // Link oficial direto que exibe a Binho Car Veículos no Iframe
  const mapaUrl =
    "https://maps.google.com/maps?q=Binho+Car+Veiculos+Avenida+Presidente+Castelo+Branco+2000+Vinhedo&t=&z=16&ie=UTF8&iwloc=&output=embed";

  // Link universal e seguro que abre o app/navegador do cliente direto na rota da loja
  const rotaUrl =
    "https://www.google.com/maps/dir/?api=1&destination=Binho+Car+Veiculos+Avenida+Presidente+Castelo+Branco+2000+Vinhedo+SP";

  return (
    <section id="localizacao" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Lado Esquerdo: Informações de Contato */}
          <div className="lg:w-1/3 text-left">
            {/* ☕ Título Corrigido */}
            <h2 className="text-4xl font-black text-dark mb-6 uppercase italic tracking-tighter">
              Venha tomar um café conosco!
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-vermelho-italia p-3 rounded-lg text-white">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg uppercase text-dark">
                    Endereço
                  </h4>
                  <p className="text-gray-600">
                    Av. Pres. Castelo Branco, 2000
                    <br />
                    Jardim Sao Matheus, Vinhedo - SP
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-dark p-3 rounded-lg text-white">
                  <FaClock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg uppercase text-dark">
                    Horário de Atendimento
                  </h4>
                  <p className="text-gray-600">
                    Segunda a Sexta: 08:00 às 18:00
                    <br />
                    Sábado: 09:00 às 12:00
                  </p>
                </div>
              </div>

              {/* 🚗 Link de rota universal (Evita o erro Dynamic Link Not Found) */}
              <a
                href={rotaUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-verde-italia text-white px-8 py-4 rounded-xl font-black uppercase hover:scale-105 transition-transform shadow-lg"
              >
                <FaRoute size={20} /> Como Chegar
              </a>
            </div>
          </div>

          {/* Lado Direito: O Mapa propriamente dito */}
          <div className="lg:w-2/3 w-full h-[500px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
            <iframe
              src={mapaUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Binho Car"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
