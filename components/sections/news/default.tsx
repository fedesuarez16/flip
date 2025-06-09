import { ReactNode } from "react";
import { ArrowUpRight, Calendar } from "lucide-react";
import { Item, ItemTitle, ItemDescription } from "../../ui/item";
import { Section } from "../../ui/section";
import Image from "next/image";

interface NewsItemProps {
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  link: string;
  variant?: "default" | "glow" | "glow-brand";
  className?: string;
}

interface NewsProps {
  title?: string;
  description?: string;
  items?: NewsItemProps[] | false;
  className?: string;
}

export default function News({
  title = "Noticias y Artículos",
  description = "Mantente al día con las últimas tendencias tecnológicas y novedades de nuestra empresa",
  items = [
    {
      title: "Cómo la IA está transformando el desarrollo de software",
      description: "Descubre cómo las herramientas de inteligencia artificial están redefiniendo la forma en que construimos software y las ventajas que ofrecen para aumentar la productividad y la calidad del código.",
      image: "/news/ai-software.jpg",
      date: "15 de agosto, 2023",
      category: "Inteligencia Artificial",
      link: "/blog/ia-desarrollo-software",
      variant: "glow-brand",
    },
    {
      title: "Arquitecturas escalables para aplicaciones móviles",
      description: "Exploramos las mejores prácticas para diseñar aplicaciones móviles que puedan crecer con tu negocio, desde la elección de tecnologías hasta patrones de arquitectura recomendados.",
      image: "/news/mobile-architecture.jpg",
      date: "3 de julio, 2023",
      category: "Desarrollo Móvil",
      link: "/blog/arquitecturas-apps-moviles",
      variant: "default",
    },
    {
      title: "Mejorando la seguridad en aplicaciones web modernas",
      description: "Las amenazas de seguridad evolucionan constantemente. Aprende qué medidas implementar para proteger tus aplicaciones web contra las vulnerabilidades más comunes y emergentes.",
      image: "/news/web-security.jpg",
      date: "21 de junio, 2023",
      category: "Seguridad",
      link: "/blog/seguridad-web-moderna",
      variant: "glow",
    },
  ],
  className,
}: NewsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-16">
        <div className="text-center">
          {title && (
            <h2 className="max-w-[700px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-muted-foreground max-w-[600px] mt-4 text-center text-lg">
              {description}
            </p>
          )}
        </div>
        
        {items && items.length > 0 && (
          <div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
            {items.map((item, index) => (
              <Item 
                key={index} 
                variant={item.variant || "default"}
                className="relative flex flex-col gap-6 p-0 h-full overflow-hidden"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                    {item.category}
                  </div>
                </div>
                
                <div className="flex flex-col gap-4 p-6">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="size-4" />
                    <span>{item.date}</span>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <ItemTitle className="text-xl font-semibold">{item.title}</ItemTitle>
                    <ItemDescription className="text-sm max-w-none">{item.description}</ItemDescription>
                  </div>
                  
                  <a 
                    href={item.link} 
                    className="text-brand flex items-center gap-1 text-sm font-medium mt-auto pt-2 hover:underline"
                  >
                    Leer más
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
} 