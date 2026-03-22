export const products = [
  {
    id: 1,
    name: "AdminTask",
    desc: "Permite la creación de formularios personalizados para operaciones.",
    price: 49,
    category: "Logística",
    icon: "📄",
  },
  {
    id: 2,
    name: "Torre de Control",
    desc: "Proporciona una visión centralizada de las operaciones.",
    price: 199,
    category: "Transporte",
    icon: "📡",
  },
  {
    id: 3,
    name: "Quickmile",
    desc: "Gestiona las entregas y el personal de campo de manera eficiente.",
    price: 89,
    category: "Transporte",
    icon: "🚚",
  },
  {
    id: 4,
    name: "Chatbot",
    desc: "Ofrece información operativa instantánea a través de un canal conversacional.",
    price: 29,
    category: "Atención al Cliente",
    icon: "🤖",
  },
  {
    id: 5,
    name: "SmartRouter",
    desc: "Optimiza las rutas y mejora la eficiencia logística.",
    price: 129,
    category: "Logística",
    icon: "🧭",
  },
  {
    id: 6,
    name: "Location Reporter",
    desc: "Ofrece ubicación precisa y botón de pánico.",
    price: 59,
    category: "Gestión de Personal",
    icon: "📍",
  },
];
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};