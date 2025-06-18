export const navLinks = [
  {
    id: "about",
    title: "Ben Kimim?",
    path: "/about"
  },
  {
    id: "work",
    title: "Neler Yapabilirim?",
    path: "/work"
  },
  {
    id: "project",
    title: "Portfolyo",
    path: "/project"
  },
  {
    id: "contact",
    title: "İletişim",
    path: "/contact"
  },
];

export const services = [
  {
    title: "Web Geliştirme",
    icon: "web",
  },
  {
    title: "Mobil Uygulama",
    icon: "mobile",
  },
  {
    title: "Backend Geliştirme",
    icon: "backend",
  },
  {
    title: "Veritabanı Yönetimi",
    icon: "database",
  },
];

export const experiences = [
  {
    title: "Frontend Geliştirici",
    company_name: "Tech Company",
    icon: "frontend",
    iconBg: "#383E56",
    date: "2023 - Günümüz",
    points: [
      "React.js ve modern JavaScript teknolojileri ile kullanıcı arayüzleri geliştirme",
      "Responsive tasarım prensiplerini uygulama",
      "Web performansını optimize etme",
      "Takım çalışması ve kod kalitesi standartlarını koruma",
    ],
  },
  {
    title: "Backend Geliştirici",
    company_name: "Software House",
    icon: "backend",
    iconBg: "#E6DEDD",
    date: "2022 - 2023",
    points: [
      "Node.js ve Express.js ile API geliştirme",
      "Veritabanı tasarımı ve yönetimi",
      "Güvenlik standartlarını uygulama",
      "Sistem mimarisi ve ölçeklenebilirlik",
    ],
  },
];

export const projects = [
  {
    name: "E-Ticaret Platformu",
    description:
      "Modern bir e-ticaret web uygulaması. React.js frontend, Node.js backend ve MongoDB veritabanı kullanılarak geliştirildi.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: "ecommerce",
    source_code_link: "https://github.com/",
  },
  {
    name: "Mobil Uygulama",
    description:
      "React Native ile geliştirilmiş cross-platform mobil uygulama. Kullanıcı deneyimi odaklı tasarım ve performans optimizasyonu.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: "mobile-app",
    source_code_link: "https://github.com/",
  },
  {
    name: "Dashboard Uygulaması",
    description:
      "Yönetim paneli ve analitik dashboard. Gerçek zamanlı veri görselleştirme ve raporlama özellikleri.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "d3.js",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: "dashboard",
    source_code_link: "https://github.com/",
  },
]; 