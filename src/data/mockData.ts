
// Dados simulados para desenvolvimento da interface

// Banner data
export const bannerData = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1545048702-79362596cdc9?q=80&w=1600&auto=format&fit=crop",
    title: "Telemensagens para Surpreender",
    description: "Encante seu amor com mensagens criativas e personalizadas para qualquer ocasião.",
    link: "/telemensagens",
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1586985564259-6211deb4c122?q=80&w=1600&auto=format&fit=crop",
    title: "Cestas de Café da Manhã",
    description: "Demonstre seu carinho com uma deliciosa surpresa logo ao amanhecer.",
    link: "/cestas",
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1558264144-964071d56343?q=80&w=1600&auto=format&fit=crop",
    title: "Presentes Especiais",
    description: "Encontre o presente perfeito para demonstrar seus sentimentos.",
    link: "/presentes",
  },
];

// Telemensagens data
export const telemensagensData = [
  {
    id: "tm1",
    title: "Mensagem de Amor para Aniversário",
    description: "Uma mensagem especial para celebrar o aniversário da pessoa amada.",
    category: "Aniversário",
    audioUrl: "/audio-placeholder.mp3",
    duration: 58, // in seconds
    price: 29.90,
    imageUrl: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop",
    popular: true,
  },
  {
    id: "tm2",
    title: "Declaração Romântica",
    description: "Uma mensagem apaixonada para declarar seus sentimentos mais profundos.",
    category: "Amor",
    audioUrl: "/audio-placeholder.mp3",
    duration: 63,
    price: 34.90,
    imageUrl: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop",
    popular: true,
  },
  {
    id: "tm3",
    title: "Surpresa para Namoro",
    description: "Comemore cada mês do seu relacionamento com esta mensagem especial.",
    category: "Namoro",
    audioUrl: "/audio-placeholder.mp3",
    duration: 45,
    price: 29.90,
    imageUrl: "https://images.unsplash.com/photo-1581212652166-a2d1ecba808c?q=80&w=800&auto=format&fit=crop",
    popular: false,
  },
  {
    id: "tm4",
    title: "Mensagem de Reconciliação",
    description: "Para momentos em que é preciso fazer as pazes de forma especial.",
    category: "Relacionamento",
    audioUrl: "/audio-placeholder.mp3",
    duration: 72,
    price: 34.90,
    imageUrl: "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?q=80&w=800&auto=format&fit=crop",
    popular: false,
  },
  {
    id: "tm5",
    title: "Mensagem para Data Especial",
    description: "Celebre datas importantes do seu relacionamento com carinho.",
    category: "Datas Especiais",
    audioUrl: "/audio-placeholder.mp3",
    duration: 54,
    price: 32.90,
    imageUrl: "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?q=80&w=800&auto=format&fit=crop",
    popular: true,
  },
  {
    id: "tm6",
    title: "Pedido de Casamento",
    description: "Uma mensagem romântica para fazer aquela pergunta especial.",
    category: "Casamento",
    audioUrl: "/audio-placeholder.mp3",
    duration: 82,
    price: 49.90,
    imageUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop",
    popular: true,
  },
];

// Cestas de café data
export const cestasData = [
  {
    id: "cesta1",
    title: "Cesta Café da Manhã Tradicional",
    description: "Uma seleção clássica com pães, bolos, frutas e bebidas para um café da manhã completo.",
    category: "Tradicional",
    price: 129.90,
    imageUrl: "https://images.unsplash.com/photo-1564943296043-bdff0d953d74?q=80&w=800&auto=format&fit=crop",
    popular: true,
  },
  {
    id: "cesta2",
    title: "Cesta Romântica Especial",
    description: "Cesta com itens selecionados para um café da manhã romântico a dois.",
    category: "Romântica",
    price: 159.90,
    imageUrl: "https://images.unsplash.com/photo-1559771645-14c93ec135cd?q=80&w=800&auto=format&fit=crop",
    popular: true,
  },
  {
    id: "cesta3",
    title: "Cesta Gourmet Premium",
    description: "Produtos premium e gourmet para um café especial.",
    category: "Gourmet",
    price: 189.90,
    imageUrl: "https://images.unsplash.com/photo-1617968763460-ad79e1995059?q=80&w=800&auto=format&fit=crop",
    popular: true,
  },
  {
    id: "cesta4",
    title: "Cesta de Aniversário",
    description: "Ideal para comemorar o aniversário de forma especial logo pela manhã.",
    category: "Aniversário",
    price: 149.90,
    imageUrl: "https://images.unsplash.com/photo-1541558048322-8d6497e7e3b9?q=80&w=800&auto=format&fit=crop",
    popular: false,
  },
];

// Pelucias data
export const peluciasData = [
  {
    id: "pelucia1",
    title: "Urso de Pelúcia Clássico",
    description: "Urso macio e fofo, perfeito para presentear em qualquer ocasião.",
    category: "Ursos",
    price: 89.90,
    imageUrl: "https://images.unsplash.com/photo-1559715541-5daf8a0296d0?q=80&w=800&auto=format&fit=crop",
    popular: true,
  },
  {
    id: "pelucia2",
    title: "Coração de Pelúcia",
    description: "Pelúcia em formato de coração, ideal para declarações de amor.",
    category: "Romântico",
    price: 69.90,
    imageUrl: "https://images.unsplash.com/photo-1581212768061-c10bc17049a9?q=80&w=800&auto=format&fit=crop",
    popular: true,
  },
  {
    id: "pelucia3",
    title: "Casal de Ursos",
    description: "Par de ursos de pelúcia para representar o casal apaixonado.",
    category: "Casais",
    price: 129.90,
    imageUrl: "https://images.unsplash.com/photo-1617464985170-8fe5180ea386?q=80&w=800&auto=format&fit=crop",
    popular: false,
  },
  {
    id: "pelucia4",
    title: "Pelúcia Gigante",
    description: "Urso grande para presentes impressionantes e memoráveis.",
    category: "Grandes",
    price: 199.90,
    imageUrl: "https://images.unsplash.com/photo-1612959403239-1e046f072fca?q=80&w=800&auto=format&fit=crop",
    popular: true,
  },
];

// Outros presentes data
export const presentesData = [
  {
    id: "presente1",
    title: "Kit de Vinhos",
    description: "Seleção de vinhos para momentos especiais a dois.",
    category: "Vinhos",
    price: 179.90,
    imageUrl: "https://images.unsplash.com/photo-1560204887-5666sue270d3?q=80&w=800&auto=format&fit=crop",
    popular: true,
  },
  {
    id: "presente2",
    title: "Buquê de Chocolates",
    description: "Buquê especial feito com chocolates finos importados.",
    category: "Doces",
    price: 119.90,
    imageUrl: "https://images.unsplash.com/photo-1621955964441-c173e01c135b?q=80&w=800&auto=format&fit=crop",
    popular: true,
  },
  {
    id: "presente3",
    title: "Caixa de Joias Personalizada",
    description: "Caixa artesanal para guardar pequenas joias e lembranças.",
    category: "Personalizados",
    price: 99.90,
    imageUrl: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=800&auto=format&fit=crop",
    popular: false,
  },
  {
    id: "presente4",
    title: "Quadro Personalizado",
    description: "Quadro com foto e mensagem personalizada para eternizar momentos.",
    category: "Decoração",
    price: 149.90,
    imageUrl: "https://images.unsplash.com/photo-1595413903795-9c381809b52d?q=80&w=800&auto=format&fit=crop",
    popular: true,
  },
];

// Testimonials data
export const testimonialsData = [
  {
    id: 1,
    name: "Ana Silva",
    text: "Enviei uma telemensagem para meu namorado no nosso aniversário de namoro e ele adorou! O serviço foi perfeito e a mensagem chegou exatamente no horário programado.",
    location: "São Paulo, SP",
    rating: 5
  },
  {
    id: 2,
    name: "João Oliveira",
    text: "A cesta de café da manhã que enviei para minha esposa superou todas as expectativas. Produtos frescos e de ótima qualidade. Com certeza comprarei novamente!",
    location: "Rio de Janeiro, RJ",
    rating: 5
  },
  {
    id: 3,
    name: "Carla Mendes",
    text: "Minha mãe ficou emocionada com a pelúcia e a mensagem personalizada. O atendimento foi excelente e a entrega pontual.",
    location: "Belo Horizonte, MG",
    rating: 4
  },
  {
    id: 4,
    name: "Ricardo Almeida",
    text: "Enviei uma cesta romântica com uma telemensagem para minha namorada e foi um sucesso! Ela ficou super emocionada e surpresa.",
    location: "Brasília, DF",
    rating: 5
  }
];

// Mock audio URL
export const audioPlaceholder = "/audio-placeholder.mp3";

// Categories
export const categories = [
  { id: "telemensagens", name: "Telemensagens", path: "/telemensagens" },
  { id: "cestas", name: "Cestas de Café", path: "/cestas" },
  { id: "pelucias", name: "Pelúcias", path: "/pelucias" },
  { id: "presentes", name: "Outros Presentes", path: "/presentes" },
];
