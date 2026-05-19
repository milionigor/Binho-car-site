// ==========================================
// 1. IMPORTS
// ==========================================

// Jetta
import jettaFoto1 from "./assets/Jetta Tsi/fotoJetta1.png";
import jettaFoto2 from "./assets/Jetta Tsi/fotoJetta2.png";
import jettaFoto3 from "./assets/Jetta Tsi/fotoJetta3.png";
import jettaFoto4 from "./assets/Jetta Tsi/fotoJetta4.png";
import jettaFoto5 from "./assets/Jetta Tsi/fotoJetta5.png";
import videoJettaMp4 from "./assets/Jetta Tsi/Jettavideo.mp4";

// Jeep Renegade
import jeepFoto1 from "./assets/JEEP RENEGADE AZUL/fotojeeprenegade1.png";
import jeepFoto2 from "./assets/JEEP RENEGADE AZUL/fotojeeprenegade2.png";
import jeepFoto3 from "./assets/JEEP RENEGADE AZUL/fotojeeprenegade3.png";
import jeepFoto4 from "./assets/JEEP RENEGADE AZUL/fotojeeprenegade4.png";
import jeepFoto5 from "./assets/JEEP RENEGADE AZUL/fotojeeprenegade5.png";

// Mercedes
import mercedesFoto1 from "./assets/mercedes/fotomercedes1.png";
import mercedesFoto2 from "./assets/mercedes/fotomercedes2.png";
import mercedesFoto3 from "./assets/mercedes/fotomercedes3.png";
import mercedesFoto4 from "./assets/mercedes/fotomercedes4.png";
import mercedesFoto5 from "./assets/mercedes/fotomercedes5.png";
import videoMercedesMp4 from "./assets/mercedes/videoMercedes.mp4";

// ==========================================
// NOVOS CARROS (Nomes corrigidos conforme os prints das pastas)
// ==========================================

// Corolla
import corollaFoto1 from "./assets/Corolla/fotocorolla1.png";
import corollaFoto2 from "./assets/Corolla/fotocorolla2.png";
import corollaFoto3 from "./assets/Corolla/fotocorolla3.png";
import corollaFoto4 from "./assets/Corolla/fotocorolla4.png";
import corollaFoto5 from "./assets/Corolla/fotocorolla5.png";

// Onix Laranja
import onixLaranjaFoto1 from "./assets/Onix laranja/fotoonixlaranja1.png";
import onixLaranjaFoto2 from "./assets/Onix laranja/fotoonixlaranja2.png";
import onixLaranjaFoto3 from "./assets/Onix laranja/fotoonixlaranja3.png";
import onixLaranjaFoto4 from "./assets/Onix laranja/fotoonixlaranja4.png";
import onixLaranjaFoto5 from "./assets/Onix laranja/fotoonixlaranja5.png";

// Onix Branco
import onixBrancoFoto1 from "./assets/Onix branco/fotoonixbranco1.png";
import onixBrancoFoto2 from "./assets/Onix branco/fotoonixbranco2.png";
import onixBrancoFoto3 from "./assets/Onix branco/fotoonixbranco3.png";
import onixBrancoFoto4 from "./assets/Onix branco/fotoonixbranco4.png";
import onixBrancoFoto5 from "./assets/Onix branco/fotoonixbranco5.png";

// Saveiro
import saveiroFoto1 from "./assets/SAVEIRO/fotosaveiro1.png";
import saveiroFoto2 from "./assets/SAVEIRO/fotosaveiro2.png";
import saveiroFoto3 from "./assets/SAVEIRO/fotosaveiro3.png";
import saveiroFoto4 from "./assets/SAVEIRO/fotosaveiro4.png";
import saveiroFoto5 from "./assets/SAVEIRO/fotosaveiro5.png";

// HB20 Branco
import hb20BrancoFoto1 from "./assets/Hb20 branco/fotohb20branco1.png";
import hb20BrancoFoto2 from "./assets/Hb20 branco/fotohb20branco2.png";
import hb20BrancoFoto3 from "./assets/Hb20 branco/fotohb20branco3.png";
import hb20BrancoFoto4 from "./assets/Hb20 branco/fotohb20branco4.png";
import hb20BrancoFoto5 from "./assets/Hb20 branco/fotohb20branco5.png";

// Aircross
import aircrossFoto1 from "./assets/Aircross/fotoaircross1.png";
import aircrossFoto2 from "./assets/Aircross/fotoaircross2.png";
import aircrossFoto3 from "./assets/Aircross/fotoaircross3.png";
import aircrossFoto4 from "./assets/Aircross/fotoaircross4.png";
import aircrossFoto5 from "./assets/Aircross/fotoaircross5.png";

// Equinox
import equinoxFoto1 from "./assets/Equinox/fotoequinox1.png";
import equinoxFoto2 from "./assets/Equinox/fotoequinox2.png";
import equinoxFoto3 from "./assets/Equinox/fotoequinox3.png";
import equinoxFoto4 from "./assets/Equinox/fotoequinox4.png";
import equinoxFoto5 from "./assets/Equinox/fotoequinox5.png";

// Palio Vermelho
import palioVermelhoFoto1 from "./assets/PALIO VERMELHO/fotopalio1.png";
import palioVermelhoFoto2 from "./assets/PALIO VERMELHO/fotopalio2.png";
import palioVermelhoFoto3 from "./assets/PALIO VERMELHO/fotopalio3.png";
import palioVermelhoFoto4 from "./assets/PALIO VERMELHO/fotopalio4.png";
import palioVermelhoFoto5 from "./assets/PALIO VERMELHO/fotopalio5.png";

// ==========================================
// 2. LISTA DE CARROS (Estoque Oficial Binho Car)
// ==========================================
export const carrosEstoque = [
  {
    id: 1,
    nome: "JETTA 2.0 TSI Highline Auto",
    ano: "2015",
    km: "162.000 km",
    combustivel: "Gasolina",
    preco: "75.990",
    tag: "NOVIDADE",
    imagens: [jettaFoto1, jettaFoto2, jettaFoto3, jettaFoto4, jettaFoto5],
    descricao:
      "🔴 Jetta 2.0 TSI Highline Aut. 2015. Super conservado, completo com bancos em couro, multimídia, sensor de ré e pneus novos. Acompanha manual e chave cópia. Fazemos simulação de financiamento e aceitamos troca!",
    videoMp4: videoJettaMp4, // Tem vídeo
  },
  {
    id: 2,
    nome: "JEEP RENEGADE 1.8 Automático",
    ano: "2021",
    km: "90.000 km",
    combustivel: "Flex",
    preco: "84.990",
    tag: "MAIS VENDIDO",
    imagens: [jeepFoto1, jeepFoto2, jeepFoto3, jeepFoto4, jeepFoto5],
    descricao:
      "Jeep Renegade 1.8 Automático Flex 2021. Super conservado, completo e muito bem cuidado! Conta com câmbio automático, bancos em couro, multimídia com Bluetooth, volante multifuncional, piloto automático, Start/Stop, rodas de liga leve e farol de milha. Pneus e estepe novos, cautelar 100%, além de manual e chave cópia. Veículo revisado, com 90.000KM e pronto para uso. Fazemos simulação de financiamento e aceitamos troca!",
    videoMp4: null, // Sem vídeo
  },
  {
    id: 3,
    nome: "Mercedes C-200",
    ano: "2015",
    km: "171.000 km",
    combustivel: "Gasolina",
    preco: "114.990",
    tag: "PREMIUM",
    imagens: [
      mercedesFoto1,
      mercedesFoto2,
      mercedesFoto3,
      mercedesFoto4,
      mercedesFoto5,
    ],
    descricao:
      "Mercedes C-200 2015. Super conservada, completa e muito bem cuidada! Conta com teto solar, painel digital TFT, bancos em couro, multimídia com CarPlay e direção elétrica. Equipada também com faróis automáticos, sensor de estacionamento e rodas de liga leve. Excelente acabamento e pronta para quem busca conforto e sofisticação.",
    videoMp4: videoMercedesMp4, // Tem vídeo
  },
  {
    id: 4,
    nome: "Toyota Corolla Gli 1.8 ",
    ano: "2018",
    km: "134.000 km",
    combustivel: "Flex",
    preco: "86.990",
    tag: "ÚNICO DONO",
    imagens: [
      corollaFoto1,
      corollaFoto2,
      corollaFoto3,
      corollaFoto4,
      corollaFoto5,
    ],
    descricao:
      "Toyota Corolla GLi 1.8 Flex 2018. Único dono, super conservado e muito bem cuidado! Conta com câmbio automático, multimídia com Bluetooth, câmera de ré e excelente conforto para o dia a dia. Equipado também com pneus novos, além de manual e chave cópia. Veículo completo, reconhecido pela confiabilidade, economia e baixa manutenção, ideal para quem busca segurança, conforto e procedência. Fazemos simulação de financiamento e aceitamos troca!",
    videoMp4: null, // Deixando null temporariamente
  },
  {
    id: 5,
    nome: "Onix Activ 1.4 Automático",
    ano: "2019",
    km: "126.000 km",
    combustivel: "Flex",
    preco: "69.990",
    tag: "ECONÔMICO",
    imagens: [
      onixLaranjaFoto1,
      onixLaranjaFoto2,
      onixLaranjaFoto3,
      onixLaranjaFoto4,
      onixLaranjaFoto5,
    ],
    descricao:
      " Onix Activ 1.4 Automático Flex 2019. Super conservado, completo e muito bem cuidado! Conta com câmbio automático, ar-condicionado, direção elétrica, piloto automático, vidros e travas elétricas, além de volante multifuncional e multimídia MyLink com Bluetooth. Equipado também com Airbag/ABS, limpador e desembaçador traseiro, pneus e estepe novos, além de manual e chave cópia. Veículo com 126.000KM, excelente para quem busca conforto, economia e praticidade no dia a dia. Fazemos simulação de financiamento, entrada facilitada em até 24x no cartão e aceitamos troca!",
    videoMp4: null,
  },
  {
    id: 6,
    nome: "Chevrolet Onix Joy 1.0 ",
    ano: "2017",
    km: "143.000 km",
    combustivel: "Flex",
    preco: "45.999",
    tag: "ECONÔMICO",
    imagens: [
      onixBrancoFoto1,
      onixBrancoFoto2,
      onixBrancoFoto3,
      onixBrancoFoto4,
      onixBrancoFoto5,
    ],
    descricao:
      "Chevrolet Onix Joy 1.0 Flex 2017. Hatch econômico, confortável e muito bem cuidado, ideal para o dia a dia ou para a família! Conta com ar-condicionado, direção hidráulica, vidros e travas elétricas, som e desembaçador traseiro, oferecendo mais conforto e praticidade. Veículo completo, com 143.000KM e cautelar 100%, garantindo excelente procedência e segurança na compra. Ótima opção para quem busca economia, baixo custo de manutenção e confiabilidade. Fazemos simulação de financiamento e aceitamos troca!",
    videoMp4: null,
  },
  {
    id: 7,
    nome: "Volkswagen Saveiro Trendline 1.6 ",
    ano: "2015",
    km: "178.000 km",
    combustivel: "Flex",
    preco: "49.990",
    tag: "TRABALHO/LAZER",
    imagens: [
      saveiroFoto1,
      saveiroFoto2,
      saveiroFoto3,
      saveiroFoto4,
      saveiroFoto5,
    ],
    descricao:
      "Volkswagen Saveiro Trendline 1.6 Flex 2015. Super conservada, cabine estendida e muito bem cuidada! Conta com volante multifuncional, Airbag, Bluetooth, retrovisores elétricos e excelente espaço para trabalho e lazer. Equipada também com capota marítima, engate e pneus novos, oferecendo ainda mais praticidade e versatilidade no dia a dia. Veículo completo, com chave cópia e ótimo custo-benefício para quem busca uma picape resistente, econômica e pronta para uso. Fazemos simulação de financiamento e aceitamos troca!",
    videoMp4: null,
  },
  {
    id: 8,
    nome: "Hyundai HB20S 1.6 Automático",
    ano: "2018",
    km: "63.000 km",
    combustivel: "Flex",
    preco: "67.990",
    tag: "ÚNICO DONO",
    imagens: [
      hb20BrancoFoto1,
      hb20BrancoFoto2,
      hb20BrancoFoto3,
      hb20BrancoFoto4,
      hb20BrancoFoto5,
    ],
    descricao:
      "Hyundai HB20S 1.6 Automático Flex 2018.Super conservado, completo e muito bem cuidado! Conta com câmbio automático, multimídia com Bluetooth, câmera de ré e rodas de liga leve, oferecendo conforto e praticidade para o dia a dia. Equipado também com Airbag/ABS, pneus novos, além de manual e chave cópia. Veículo com apenas 63.000KM, excelente opção para quem busca economia, conforto e procedência. Fazemos simulação de financiamento e aceitamos troca!",
    videoMp4: null,
  },
  {
    id: 9,
    nome: "Citroën Aircross 1.6",
    ano: "2015",
    km: "94.000 km",
    combustivel: "Flex",
    preco: "44.990",
    tag: "ESPAÇOSO",
    imagens: [
      aircrossFoto1,
      aircrossFoto2,
      aircrossFoto3,
      aircrossFoto4,
      aircrossFoto5,
    ],
    descricao:
      "Citroën Aircross 1.6 Flex 2015. Super conservado, completo e muito bem cuidado! Conta com Airbag/ABS, som com Bluetooth e excelente espaço interno, oferecendo conforto e praticidade para o dia a dia. Equipado também com pneus e estepe novos, além de manual e chave cópia. Veículo ideal para quem busca um carro versátil, confortável e com ótimo custo-benefício. Fazemos simulação de financiamento e aceitamos troca!",
    videoMp4: null,
  },
  {
    id: 10,
    nome: "Chevrolet Equinox 1.5",
    ano: "2022",
    km: "55.000 km",
    combustivel: "Gasolina",
    preco: "129.990",
    tag: "LUXO/SUV",
    imagens: [
      equinoxFoto1,
      equinoxFoto2,
      equinoxFoto3,
      equinoxFoto4,
      equinoxFoto5,
    ],
    descricao:
      "Chevrolet Equinox RS 1.5 Turbo Automática 2022. SUV extremamente conservado, completo e com visual esportivo da versão RS! Conta com motor 1.5 Turbo econômico e potente, câmbio automático, bancos em couro, multimídia MyLink com Apple CarPlay e Android Auto, além de ar-condicionado digital e chave presencial com partida por botão. Equipada também com câmera de ré, sensores de estacionamento, controle de estabilidade e tração, piloto automático, rodas de liga leve, faróis em LED, computador de bordo, vidros e retrovisores elétricos. Veículo com apenas 55.000KM, manual e chave cópia, perfeito para quem busca conforto, tecnologia e excelente espaço interno. Oportunidade abaixo da FIPE! Fazemos simulação de financiamento, parcelamos a entrada em até 24x no cartão e aceitamos troca!",
    videoMp4: null,
  },
  {
    id: 11,
    nome: "Fiat Palio Attractive 1.0 ",
    ano: "2016",
    km: "106.000 km",
    combustivel: "Flex",
    preco: "40.990",
    tag: "OPORTUNIDADE",
    imagens: [
      palioVermelhoFoto1,
      palioVermelhoFoto2,
      palioVermelhoFoto3,
      palioVermelhoFoto4,
      palioVermelhoFoto5,
    ],
    descricao:
      "Fiat Palio Attractive 1.0 Flex 2016. Hatch econômico, confortável e muito bem cuidado, ideal para o dia a dia ou para a família! Conta com ar-condicionado, direção hidráulica, vidros elétricos, travas elétricas, alarme, som USB e desembaçador traseiro. Equipado também com pneus novos, oferecendo mais segurança e praticidade. Veículo com 106.000KM, completo e pronto para uso, unindo economia, conforto e excelente custo-benefício. Fazemos simulação de financiamento e aceitamos troca!",
    videoMp4: null,
  },
];
