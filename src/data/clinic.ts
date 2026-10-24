// Todos os textos, links e fotos do site ficam aqui. Edite este arquivo, não os componentes.

const whatsappNumero = "5516991455443";
const whatsappMensagem =
  "Olá, Bruna! Vim pelo seu site e gostaria de agendar um atendimento.";

export const clinic = {
  nome: "Bruna Meghelli",
  nomeCompleto: "Bruna Lopes Meghelli",
  titulo: "Psicóloga e Psicanalista",
  crp: "CRP - SP - 121500",
  frase: "Escuta acolhedora e respeitosa para cuidar do sofrimento.",
  lema: ["Escuta", "Acolhimento", "Respeito", "Processo"],

  telefone: "(16) 99145-5443",
  email: "brunameghelli@gmail.com",
  whatsapp: `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(whatsappMensagem)}`,
  instagram: "https://www.instagram.com/psicologabrunameghelli/",
  instagramUsuario: "@psicologabrunameghelli",
  doctoralia:
    "https://www.doctoralia.com.br/bruna-lopes-meghelli/psicanalista-psicologo/sao-carlos",

  endereco: {
    linha1: "Rua Dona Maria Jacinta, 241, Sala 52",
    linha2: "Jardim Paraíso, São Carlos – SP",
    cep: "13561-120",
    mapa: "https://www.google.com/maps/search/?api=1&query=Rua+Dona+Maria+Jacinta+241+S%C3%A3o+Carlos+SP",
    mapaEmbed:
      "https://maps.google.com/maps?q=Rua+Dona+Maria+Jacinta,+241,+S%C3%A3o+Carlos+-+SP&z=16&hl=pt-BR&output=embed",
  },

  quemSouEu:
    "Sou Bruna, tenho 36 anos, sou mãe do Raul e esposa do Heitor. Nasci em Serrana – SP e, desde criança, tenho curiosidade por assuntos relacionados à consciência, pensamentos, relações e histórias.",
  interesses: ["Livros", "Filmes", "Viagens"],

  objetivo:
    "Meu objetivo como psicóloga é tratar o sofrimento através da escuta acolhedora e respeitosa, oferecendo um espaço de cuidado, compreensão e acolhimento.",

  especialidades: [
    "Transtornos de ansiedade",
    "Transtornos depressivos",
    "Transtornos alimentares",
    "Luto",
    "Questões relacionadas à sexualidade",
    "Transtornos do estresse",
  ],

  formacao: [
    {
      titulo: "Graduação em Psicologia — UNESP, 2014",
      detalhe: "Universidade Estadual Paulista Júlio de Mesquita Filho",
    },
    {
      titulo: "Mestrado — USP, 2018",
      detalhe:
        "Departamento de Clínica Médica da Faculdade de Medicina de Ribeirão Preto",
    },
    {
      titulo: "Formação em psicanálise",
      detalhe:
        "Cursos, disciplinas e grupos de estudo no Clin-a (Centro Lacaniano de Investigação da Ansiedade, Escola Brasileira de Psicanálise), 2014–2025",
    },
    {
      titulo: "Pós-graduação em Autismo e Psicanálise — conclusão 2027",
      detalhe: "Instituto ESPE",
    },
  ],

  experiencia: [
    {
      titulo: "Psicóloga clínica",
      periodo: "Desde 2014",
      detalhe: "Atendimento individual em consultório particular.",
    },
    {
      titulo: "Psicóloga hospitalar",
      periodo: "2019 – 2023",
      detalhe:
        "Hospital das Clínicas de Ribeirão Preto. Atuação nos setores de Urgência e Emergência, COVID-19 e CTI.",
    },
    {
      titulo: "Psicóloga do convênio Santa Casa Saúde",
      periodo: "2017 – 2020",
      detalhe:
        "Atendimentos individuais e coordenação dos grupos de idosos e de gestantes.",
    },
  ],

  atendimento: [
    {
      titulo: "Presencial",
      texto: "No consultório, em São Carlos – SP.",
    },
    {
      titulo: "Online",
      texto:
        "Por videochamada, de onde você estiver. O link é enviado antes da sessão.",
    },
  ],

  // Valores (aguardando aprovação da Bruna). Para tirar a seção, remova <Valores /> do App.tsx.
  valores: {
    intro: "Atendimento com uma sessão por semana. O pagamento pode ser feito de duas formas:",
    planos: [
      { nome: "Quinzenal", preco: "R$ 400", detalhe: "Pagamento a cada 15 dias", sessoes: "2 sessões" },
      { nome: "Mensal", preco: "R$ 700", detalhe: "Pagamento uma vez por mês", sessoes: "4 sessões" },
    ],
    nota: "Valores e forma de pagamento combinados diretamente com a Bruna.",
  },

  fotos: {
    hero: "/img/bruna-retrato.webp",
    lendo: "/img/bruna-lendo.webp",
    rosto: "/img/bruna-rosto.webp",
    predio: "/img/predio.webp",
    monograma: "/img/monograma.png",
  },
};
