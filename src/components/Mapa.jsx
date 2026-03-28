import { FaMapMarkerAlt, FaRoute, FaClock } from "react-icons/fa";

export default function Mapa() {
  // Link oficial do Google Maps para a Binho Car em Vinhedo
  const mapaUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.316008630386!2d-46.98678722378828!3d-23.009782441014134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfcd3629a8e32d%3A0x168f01cb09f43359!2sBinho%20Car!5e0!3m2!1spt-BR!2sbr!4v1710520000000!5m2!1spt-BR!2sbr";

  return (
    <section id="localizacao" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Lado Esquerdo: Informações de Contato */}
          <div className="lg:w-1/3 text-left">
            <h2 className="text-4xl font-black text-dark mb-6 uppercase italic tracking-tighter">
              Venha tomar um café com o{" "}
              <span className="text-vermelho-italia">Binho</span>!
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

              <a
                href="https://maps.app.goo.gl/LeOoKTbNyJQRWTP0CcsBjxY"
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
