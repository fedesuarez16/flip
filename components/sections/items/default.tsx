import { ReactNode } from "react";
import { ArrowUpRight, Code, Database, Cloud, Smartphone, LockKeyhole, BarChart3, BrainCircuit, Workflow } from "lucide-react";
import { Item, ItemTitle, ItemDescription } from "../../ui/item";
import { Section } from "../../ui/section";
import Image from "next/image";

interface ItemProps {
  title: string;
  description: string;
  image?: ReactNode;
  variant?: "default" | "glow" | "glow-brand";
  className?: string;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "Soluciones tecnológicas para impulsar tu negocio",
  items = [
    // Primera fila - 2 cards grandes
    {
      title: "Desarrollo Web Personalizado",
      description: "Creamos aplicaciones web a medida que potencian tu negocio, desde sitios corporativos hasta plataformas complejas con la mejor experiencia de usuario.",
      image: (
        <div className="w-full rounded-lg overflow-hidden">
          <Image 
            src="/app-dark.png" 
            alt="Desarrollo web" 
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      ),
      variant: "glow-brand",
      className: "sm:col-span-1 md:col-span-1 lg:col-span-1",
    },
    {
      title: "Integración de Inteligencia Artificial",
      description: "Implementamos soluciones de IA y machine learning para automatizar procesos, analizar datos y generar insights valiosos para tu empresa.",
      image: (
        <div className="w-full flex items-center justify-center py-4">
          <div className="w-full max-w-md bg-background/60 rounded-xl p-3 shadow-sm">
            <div className="flex flex-col gap-3">
              {/* Primer mensaje - usuario */}
              <div className="flex items-start gap-2 max-w-[90%]">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand/30 flex items-center justify-center text-xs font-medium">SG</div>
                <div>
                  <div className="bg-muted/40 dark:bg-muted/20 px-3 py-2 rounded-2xl rounded-tl-sm text-sm text-muted-foreground">
                    Necesitamos actualizar este encabezado antes del lanzamiento
                  </div>
                  <div className="text-xs text-muted-foreground/60 mt-1 ml-1">Sofia G.</div>
                </div>
              </div>
              
              {/* Segundo mensaje - IA */}
              <div className="flex items-start justify-end gap-2 max-w-[90%] self-end">
                <div>
                  <div className="bg-brand/20 dark:bg-brand/10 px-3 py-2 rounded-2xl rounded-tr-sm text-sm">
                    Déjame analizar rápidamente y corregirlo
                  </div>
                  <div className="text-xs text-muted-foreground/60 mt-1 ml-1 text-right">Asistente IA</div>
                </div>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-background flex items-center justify-center border border-brand/20">
                  <BrainCircuit className="w-4 h-4 text-brand/60" />
                </div>
              </div>
              
              {/* Tercer mensaje - resultado */}
              <div className="flex justify-end">
                <div className="bg-muted/30 dark:bg-background/40 border border-brand/10 px-3 py-1 rounded-xl text-sm text-muted-foreground max-w-[70%]">
                  ¡Listo!
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      variant: "default",
      className: "sm:col-span-1 md:col-span-1 lg:col-span-1",
    },
    
    // Segunda fila - 3 cards
    {
      title: "Desarrollo de Aplicaciones Móviles",
      description: "Desarrollamos apps nativas y multiplataforma para iOS y Android que conectan con tus clientes en cualquier lugar y momento.",
      image: (
        <div className="w-full flex items-center justify-center py-4">
          <div className="relative">
            <div className="w-24 h-48 rounded-xl border-2 border-brand/30 bg-background/50 flex items-center justify-center">
              <Smartphone className="w-16 h-16 text-brand/60" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-brand/20 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-brand/30"></div>
              </div>
            </div>
          </div>
        </div>
      ),
      variant: "glow",
      className: "col-span-1",
    },
    {
      title: "Arquitectura de Software",
      description: "Diseñamos y optimizamos la estructura técnica de tus sistemas para garantizar escalabilidad, mantenibilidad y rendimiento.",
      image: (
        <div className="w-full flex items-center justify-center py-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="h-32 flex flex-col gap-2 items-center">
              <div className="w-16 h-16 rounded-lg bg-brand/20 flex items-center justify-center">
                <Database className="w-8 h-8 text-brand/60" />
              </div>
              <div className="w-full h-1 bg-brand/30"></div>
              <div className="w-10 h-10 rounded-md bg-brand/20"></div>
            </div>
            <div className="h-32 flex flex-col gap-2 items-center">
              <div className="w-16 h-16 rounded-lg bg-brand/20 flex items-center justify-center">
                <Code className="w-8 h-8 text-brand/60" />
              </div>
              <div className="w-full h-1 bg-brand/30"></div>
              <div className="w-10 h-10 rounded-md bg-brand/20"></div>
            </div>
            <div className="h-32 flex flex-col gap-2 items-center">
              <div className="w-16 h-16 rounded-lg bg-brand/20 flex items-center justify-center">
                <Cloud className="w-8 h-8 text-brand/60" />
              </div>
              <div className="w-full h-1 bg-brand/30"></div>
              <div className="w-10 h-10 rounded-md bg-brand/20"></div>
            </div>
          </div>
        </div>
      ),
      variant: "default",
      className: "col-span-1",
    },
    {
      title: "Automatización de Procesos",
      description: "Optimizamos tus flujos de trabajo mediante la automatización de tareas repetitivas, integrando sistemas y eliminando cuellos de botella operativos.",
      image: (
        <div className="w-full flex items-center justify-center py-6">
          <div className="relative flex flex-col items-center">
            <div className="w-64 h-12 flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center z-10">
                <div className="w-6 h-6 rounded-full bg-brand/40"></div>
              </div>
              <div className="flex-1 h-2 bg-brand/30"></div>
              <div className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center z-10">
                <div className="w-6 h-6 rounded-full bg-brand/40"></div>
              </div>
              <div className="flex-1 h-2 bg-brand/30"></div>
              <div className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center z-10">
                <div className="w-6 h-6 rounded-full bg-brand/40"></div>
              </div>
            </div>
            <Workflow className="w-16 h-16 text-brand/60" />
          </div>
        </div>
      ),
      variant: "glow-brand",
      className: "col-span-1",
    },
  ],
  className,
}: ItemsProps) {
  // Separar los items para la primera y segunda fila
  const firstRowItems = items && items.length >= 2 ? items.slice(0, 2) : [];
  const secondRowItems = items && items.length > 2 ? items.slice(2, 5) : [];
  
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        {title && (
          <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            {title}
          </h2>
        )}
        
        {/* Primera fila - 2 cards grandes */}
        {firstRowItems.length > 0 && (
          <div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
            {firstRowItems.map((item, index) => (
              <Item 
                key={`row1-${index}`} 
                variant={item.variant || "default"}
                className={`relative flex flex-col gap-6 p-8 h-full ${item.className || ''}`}
              >
                <div className="absolute top-6 right-6">
                  <ArrowUpRight className="size-5 text-muted-foreground/50" />
                </div>
                <div className="flex flex-col gap-3">
                  <ItemTitle className="text-2xl font-semibold">{item.title}</ItemTitle>
                  <ItemDescription className="text-base max-w-none">{item.description}</ItemDescription>
                </div>
                {item.image && (
                  <div className="mt-auto">
                    {item.image}
                  </div>
                )}
              </Item>
            ))}
          </div>
        )}
        
        {/* Segunda fila - 3 cards */}
        {secondRowItems.length > 0 && (
          <div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
            {secondRowItems.map((item, index) => (
              <Item 
                key={`row2-${index}`} 
                variant={item.variant || "default"}
                className={`relative flex flex-col gap-6 p-8 h-full ${item.className || ''}`}
              >
                <div className="absolute top-6 right-6">
                  <ArrowUpRight className="size-5 text-muted-foreground/50" />
                </div>
                <div className="flex flex-col gap-3">
                  <ItemTitle className="text-xl font-semibold">{item.title}</ItemTitle>
                  <ItemDescription className="text-sm max-w-none">{item.description}</ItemDescription>
                </div>
                {item.image && (
                  <div className="mt-auto">
                    {item.image}
                  </div>
                )}
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
