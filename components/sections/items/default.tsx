import { ReactNode } from "react";
import {
  BlocksIcon,
  EclipseIcon,
  FastForwardIcon,
  LanguagesIcon,
  MonitorSmartphoneIcon,
  RocketIcon,
  ScanFaceIcon,
  SquarePenIcon,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

import { Item, ItemIcon, ItemTitle, ItemDescription } from "../../ui/item";
import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  image?: ReactNode;
  variant?: "default" | "glow" | "glow-brand";
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "Soluciones a medida para tu negocio",
  items = [
    {
      title: "Diseño centrado en el usuario",
      description: "Cada bloque y componente está cuidadosamente diseñado para brindar una experiencia única que se destaque de la competencia.",
      image: (
        <div className="w-full rounded-lg overflow-hidden">
          <img 
            src="/app-light.png" 
            alt="Dashboard design" 
            className="w-full h-auto object-cover"
          />
        </div>
      ),
      variant: "default",
    },
    {
      title: "Desarrollo rápido y eficiente",
      description: "Con código ligero, herramientas modernas y mejores prácticas, nuestras soluciones son rápidas tanto en el navegador como en el desarrollo.",
      image: (
        <div className="w-full flex items-center justify-center py-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-brand/20 dark:bg-brand/10 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-brand/30 dark:bg-brand/20 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-brand/40 dark:bg-brand/30"></div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-12">
              <div className="w-14 h-14 rounded-full border border-muted-foreground/20 flex items-center justify-center">
                <div className="w-8 h-8 bg-muted-foreground/20 rounded-full"></div>
              </div>
              <div className="w-14 h-14 rounded-full border border-muted-foreground/20 flex items-center justify-center">
                <div className="w-8 h-8 bg-muted-foreground/20 rounded-full"></div>
              </div>
              <div className="w-14 h-14 rounded-full border border-muted-foreground/20 flex items-center justify-center">
                <div className="w-8 h-8 bg-muted-foreground/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      ),
      variant: "default",
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        {title && (
          <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            {title}
          </h2>
        )}
        {items !== false && items.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
            {items.map((item, index) => (
              <Item 
                key={index} 
                variant={item.variant || "default"}
                className="relative flex flex-col gap-6 p-8 h-full"
              >
                <div className="absolute top-6 right-6">
                  <ArrowUpRight className="size-5 text-muted-foreground/50" />
                </div>
                <div className="flex flex-col gap-3">
                  <ItemTitle className="text-xl font-semibold">{item.title}</ItemTitle>
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
      </div>
    </Section>
  );
}
