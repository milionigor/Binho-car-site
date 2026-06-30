// ==========================================
// 1. IMPORTS DOS VEÍCULOS (DESTAQUES E EM ESTOQUE)
// ==========================================

// Equinox (DESTAQUE)
import equinoxFoto1 from "./assets/Equinox/fotoequinox1.png";
import equinoxFoto2 from "./assets/Equinox/fotoequinox2.png";
import equinoxFoto3 from "./assets/Equinox/fotoequinox3.png";
import equinoxFoto4 from "./assets/Equinox/fotoequinox4.png";
import equinoxFoto5 from "./assets/Equinox/fotoequinox5.png";

// Jeep Renegade (DESTAQUE)
import jeepFoto1 from "./assets/JEEP RENEGADE AZUL/fotojeeprenegade1.png";
import jeepFoto2 from "./assets/JEEP RENEGADE AZUL/fotojeeprenegade2.png";
import jeepFoto3 from "./assets/JEEP RENEGADE AZUL/fotojeeprenegade3.png";
import jeepFoto4 from "./assets/JEEP RENEGADE AZUL/fotojeeprenegade4.png";
import jeepFoto5 from "./assets/JEEP RENEGADE AZUL/fotojeeprenegade5.png";

// Mercedes (DESTAQUE)
import mercedesFoto1 from "./assets/mercedes/fotomercedes1.png";
import mercedesFoto2 from "./assets/mercedes/fotomercedes2.png";
import mercedesFoto3 from "./assets/mercedes/fotomercedes3.png";
import mercedesFoto4 from "./assets/mercedes/fotomercedes4.png";
import mercedesFoto5 from "./assets/mercedes/fotomercedes5.png";
import videoMercedesMp4 from "./assets/mercedes/videoMercedes.mp4";

// Onix Laranja (Activ)
import onixLaranjaFoto1 from "./assets/Onix laranja/fotoonixlaranja1.png";
import onixLaranjaFoto2 from "./assets/Onix laranja/fotoonixlaranja2.png";
import onixLaranjaFoto3 from "./assets/Onix laranja/fotoonixlaranja3.png";
import onixLaranjaFoto4 from "./assets/Onix laranja/fotoonixlaranja4.png";
import onixLaranjaFoto5 from "./assets/Onix laranja/fotoonixlaranja5.png";

// Saveiro
import saveiroFoto1 from "./assets/SAVEIRO/fotosaveiro1.png";
import saveiroFoto2 from "./assets/SAVEIRO/fotosaveiro2.png";
import saveiroFoto3 from "./assets/SAVEIRO/fotosaveiro3.png";
import saveiroFoto4 from "./assets/SAVEIRO/fotosaveiro4.png";
import saveiroFoto5 from "./assets/SAVEIRO/fotosaveiro5.png";

// Palio Vermelho
import palioVermelhoFoto1 from "./assets/PALIO VERMELHO/fotopalio1.png";
import palioVermelhoFoto2 from "./assets/PALIO VERMELHO/fotopalio2.png";
import palioVermelhoFoto3 from "./assets/PALIO VERMELHO/fotopalio3.png";
import palioVermelhoFoto4 from "./assets/PALIO VERMELHO/fotopalio4.png";
import palioVermelhoFoto5 from "./assets/PALIO VERMELHO/fotopalio5.png";

// BMW GS
import bmwFoto1 from "./assets/BMW GS/fotobmwgs1.png";
import bmwFoto2 from "./assets/BMW GS/fotobmwgs2.png";
import bmwFoto3 from "./assets/BMW GS/fotobmwgs3.png";
import bmwFoto4 from "./assets/BMW GS/fotobmwgs4.png";
import bmwFoto5 from "./assets/BMW GS/fotobmwgs5.png";

// ==========================================
// 2. IMPORTS DOS NOVOS VEÍCULOS
// ==========================================

// Honda HR-V EX
import hrvFoto1 from "./assets/Honda HRV EX/hondahv1.png";
import hrvFoto2 from "./assets/Honda HRV EX/hondahv2.png";
import hrvFoto3 from "./assets/Honda HRV EX/hondahv3.png";
import hrvFoto4 from "./assets/Honda HRV EX/hondahv4.png";
import hrvFoto5 from "./assets/Honda HRV EX/hondahv5.png";

// Hyundai HB20 Unique (NOVO CARRO ADICIONADO)
import hb20NovoFoto1 from "./assets/Hyundai HB20 Unique/fotohb20novo1.png";
import hb20NovoFoto2 from "./assets/Hyundai HB20 Unique/fotohb20novo2.png";
import hb20NovoFoto3 from "./assets/Hyundai HB20 Unique/fotohb20novo3.png";
import hb20NovoFoto4 from "./assets/Hyundai HB20 Unique/fotohb20novo4.png";
import hb20NovoFoto5 from "./assets/Hyundai HB20 Unique/fotohb20novo5.png";

// ==========================================
// 3. LISTA DE CARROS (Estoque Oficial Binho Car)
// ==========================================
export const carrosEstoque = [
  // --- INÍCIO DOS DESTAQUES (OS 3 PRIMEIROS DO CARROSSEL) ---
  {
    id: 1,
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
    id: 2,
    nome: "JEEP RENEGADE 1.8 Automático",
    ano: "2021",
    km: "90.000 km",
    combustivel: "Flex",
    preco: "84.990",
    tag: "MAIS VENDIDO",
    imagens: [jeepFoto1, jeepFoto2, jeepFoto3, jeepFoto4, jeepFoto5],
    descricao:
      "Jeep Renegade 1.8 Automático Flex 2021. Super conservado, completo e muito bem cuidado! Conta com câmbio automático, bancos em couro, multimídia com Bluetooth, volante multifuncional, piloto automático, Start/Stop, rodas de liga leve e farol de milha. Pneus e estepe novos, cautelar 100%, além de manual e chave cópia. Veículo revisado, com 90.000KM e pronto para uso. Fazemos simulação de financiamento and aceitamos troca!",
    videoMp4: null,
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
    videoMp4: videoMercedesMp4,
  },
  // --- FIM DOS DESTAQUES ---

  // --- VEÍCULOS EM ESTOQUE GERAL ---
  {
    id: 4,
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
      "Onix Activ 1.4 Automático Flex 2019. Super conservado, completo e muito bem cuidado! Conta com câmbio automático, ar-condicionado, direção elétrica, piloto automático, vidros e travas elétricas, além de volante multifuncional e multimídia MyLink com Bluetooth. Equipado também com Airbag/ABS, limpador e desembaçador traseiro, pneus e estepe novos, além de manual e chave cópia. Veículo com 126.000KM, excelente para quem busca conforto, economia e praticidade no dia a dia. Fazemos simulação de financiamento, entrada facilitada em até 24x no cartão e aceitamos troca!",
    videoMp4: null,
  },
  {
    id: 5,
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
    id: 6,
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
  {
    id: 7,
    nome: "BMW GS",
    ano: "2021",
    km: "41.000 km",
    combustivel: "Gasolina",
    preco: "29.990",
    tag: "PREMIUM",
    imagens: [bmwFoto1, bmwFoto2, bmwFoto3, bmwFoto4, bmwFoto5],
    descricao:
      "BMW G 310 GS Série Especial 40 Anos 2021. Uma moto premium que combina estilo, desempenho e versatilidade em um único modelo. Esta versão comemorativa 40 Anos possui visual exclusivo, valorizando ainda mais uma das motos mais desejadas da categoria. Único dono, com apenas 41.000 km e em excelente estado de conservação. Equipada com freios ABS, pneus novos e baú GIVI, proporcionando mais segurança e praticidade para o dia a dia ou para viagens. Acompanha manual do proprietário e chave cópia. Robusta, confortável e pronta para qualquer aventura, é a escolha ideal para quem busca qualidade, confiabilidade e o padrão BMW. Aceitamos troca, fazemos simulação de financiamento sem compromisso e facilitamos a entrada em até 24x no cartão, sujeito à aprovação",
    videoMp4: null,
  },
  {
    id: 17,
    nome: "Honda HR-V EX 1.8 Automático",
    ano: "2016",
    km: "125.000 km",
    combustivel: "Flex",
    preco: "84.990",
    tag: "NOVIDADE/SUV",
    imagens: [hrvFoto1, hrvFoto2, hrvFoto3, hrvFoto4, hrvFoto5],
    descricao:
      "Honda HR-V EX 1.8 Automático 2016 Flex. Loja física em Vinhedo. Veículo extremamente conservado e pronto para uso! SUV automático muito procurado na região. Conta com multimídia com Bluetooth, volante multifuncional, piloto automático, rodas de liga leve e farol de milha. Equipado com pneus e estepe novos, Airbag, freios ABS e cautelar 100% aprovada. Acompanha manual do proprietário e chave reserva. Excelente oportunidade. Aceitamos troca, fazemos simulação de financiamento e facilitamos a entrada em até 24x no cartão (parcelamento sujeito à aprovação de crédito).",
    videoMp4: null,
  },

  // --- NOVO CARRO ADICIONADO: HB20 ---
  {
    id: 18,
    nome: "Hyundai HB20 Unique 1.0",
    ano: "2019",
    km: "132.000 km",
    combustivel: "Flex",
    preco: "54.990",
    tag: "ECONÔMICO",
    imagens: [
      hb20NovoFoto1,
      hb20NovoFoto2,
      hb20NovoFoto3,
      hb20NovoFoto4,
      hb20NovoFoto5,
    ],
    descricao:
      "Hyundai HB20 Unique 1.0 Flex 2019. Veículo completo e extremamente conservado, pronto para uso! Conta com multimídia com Bluetooth, câmera de ré, direção elétrica, ar-condicionado e volante multifuncional. Equipado com pneus e estepe novos, além de possuir Airbag e cautelar 100% aprovada. Acompanha manual e chave reserva. Uma excelente oportunidade para quem busca conforto e economia no dia a dia. Aceitamos troca, fazemos simulação de financiamento e entrada facilitada em até 24x no cartão (parcelamento sujeito à aprovação de crédito).",
    videoMp4: null,
  },
];