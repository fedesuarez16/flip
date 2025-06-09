export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  author: string;
  variant?: "default" | "glow" | "glow-brand";
}

export const blogPosts: BlogPost[] = [
  {
    slug: "automatizacion-motor-crecimiento-2025",
    title: "Automatización: el motor oculto del crecimiento en 2025",
    description: "Mientras algunas empresas siguen atrapadas en hojas de cálculo y tareas repetitivas, otras están multiplicando su productividad sin contratar más personal. ¿La clave? La automatización de procesos.",
    image: "/news/automatizacion.png",
    date: "10 de junio, 2023",
    category: "Automatización",
    author: "Laura Martínez",
    variant: "glow-brand",
  },
  {
    slug: "ia-desarrollo-software",
    title: "Cómo la IA está transformando el desarrollo de software",
    description: "Descubre cómo las herramientas de inteligencia artificial están redefiniendo la forma en que construimos software y las ventajas que ofrecen para aumentar la productividad y la calidad del código.",
    image: "/news/image-ia.jpeg",
    date: "15 de agosto, 2023",
    category: "Inteligencia Artificial",
    author: "Carlos Mendoza",
    variant: "glow-brand",
  },
  {
    slug: "arquitecturas-apps-moviles",
    title: "Arquitecturas escalables para aplicaciones móviles",
    description: "Exploramos las mejores prácticas para diseñar aplicaciones móviles que puedan crecer con tu negocio, desde la elección de tecnologías hasta patrones de arquitectura recomendados.",
    image: "/news/mobile-architecture.jpg",
    date: "3 de julio, 2023",
    category: "Desarrollo Móvil",
    author: "María González",
    variant: "default",
  },
  {
    slug: "seguridad-web-moderna",
    title: "Mejorando la seguridad en aplicaciones web modernas",
    description: "Las amenazas de seguridad evolucionan constantemente. Aprende qué medidas implementar para proteger tus aplicaciones web contra las vulnerabilidades más comunes y emergentes.",
    image: "/news/web-security.jpg",
    date: "21 de junio, 2023",
    category: "Seguridad",
    author: "Alejandro Ruiz",
    variant: "glow",
  },
]; 