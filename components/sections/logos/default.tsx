"use client"

import { ReactNode } from "react";
import { Section } from "../../ui/section";
import { Badge } from "../../ui/badge";
import Image from "next/image";

interface LogosProps {
  title?: string;
  badge?: ReactNode | false;
  logos?: ReactNode[] | false;
  className?: string;
}

export default function Logos({
  title = "Empresas que confían en nosotros",
  badge = (
    <Badge variant="outline" className="border-brand/30 text-brand">
      Clientes destacados
    </Badge>
  ),
  logos = [
    <div key="delsur" className="h-14 w-32 md:h-16 md:w-48 relative">
      <Image src="/components/logos/images/delsur.png" alt="Del Sur" fill className="object-contain" />
    </div>,
    <div key="sinai" className="h-14 w-32 md:h-16 md:w-48 relative">
      <Image src="/components/logos/images/sinai.png" alt="Sinai" fill className="object-contain" />
    </div>,
    <div key="jmotors" className="h-14 w-32 md:h-16 md:w-48 relative">
      <Image src="/components/logos/images/jmotors.png" alt="J Motors" fill className="object-contain" />
    </div>,
    <div key="danna" className="h-14 w-32 md:h-16 md:w-48 relative">
      <Image src="/components/logos/images/DANNA.png" alt="Danna" fill className="object-contain" />
    </div>,
    <div key="tecxio" className="h-14 w-32 md:h-16 md:w-48 relative">
      <Image src="/components/logos/images/tecxio.png" alt="Tecxio" fill className="object-contain" />
    </div>,
    <div key="yecyoc" className="h-14 w-32 md:h-16 md:w-48 relative">
      <Image src="/components/logos/images/yecyoc.png" alt="Yecyoc" fill className="object-contain" />
    </div>,
    <div key="opting" className="h-14 w-32 md:h-16 md:w-48 relative">
      <Image src="/components/logos/images/opting.png" alt="Opting" fill className="object-contain" />
    </div>,
    <div key="nunez" className="h-14 w-32 md:h-16 md:w-48 relative">
      <Image src="/components/logos/images/nunez.png" alt="Nuñez" fill className="object-contain" />
    </div>,
    <div key="dromex" className="h-14 w-32 md:h-16 md:w-48 relative">
      <Image src="/components/logos/images/dromex.png" alt="Dromex" fill className="object-contain" />
    </div>,
    <div key="praset" className="h-14 w-32 md:h-16 md:w-48 relative">
      <Image src="/components/logos/images/praset.png" alt="Praset" fill className="object-contain" />
    </div>,
    <div key="landsbroker" className="h-14 w-32 md:h-16 md:w-48 relative">
      <Image src="/components/logos/images/landsBroker.png" alt="Lands Broker" fill className="object-contain" />
    </div>,
    <div key="aserraderogris" className="h-14 w-32 md:h-16 md:w-48 relative">
      <Image src="/components/logos/images/aserraderogris.png" alt="Aserradero Gris" fill className="object-contain" />
    </div>,
  ],
  className,
}: LogosProps) {
  // Duplicar los logos para crear un efecto de carrusel continuo
  const allLogos = logos ? [...logos, ...logos] : [];
  
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-4 text-center">
        <div className="flex flex-col items-center gap-4">
          {badge !== false && badge}
          <h2 className="text-md font-semibold sm:text-2xl">{title}</h2>
        </div>
        {logos !== false && logos.length > 0 && (
          <div className="w-full relative overflow-hidden">
            {/* Máscara de degradado a la izquierda */}
            <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
            
            {/* Carrusel */}
            <div className="flex items-center overflow-hidden relative">
              <div 
                className="flex animate-scroll whitespace-nowrap py-2 md:py-4"
                style={{ 
                  animationDuration: `${allLogos.length * 5}s`,
                  animationTimingFunction: 'linear', 
                  animationIterationCount: 'infinite' 
                }}
              >
                {allLogos.map((logo, index) => (
                  <div 
                    key={index} 
                    className="mx-1 md:mx-2 flex items-center justify-center"
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Máscara de degradado a la derecha */}
            <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-background via-background/80 to-transparent"></div>
          </div>
        )}
      </div>
      
      {/* Estilos para la animación */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation-name: scroll;
        }
      `}</style>
    </Section>
  );
}
