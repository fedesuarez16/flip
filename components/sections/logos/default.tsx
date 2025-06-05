import { ReactNode } from "react";
import { siteConfig } from "@/config/site";

import Logo from "../../ui/logo";
import { Section } from "../../ui/section";
import { Badge } from "../../ui/badge";

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
    <Logo key="delsur" image="/components/logos/images/delsur.png" name="Del Sur" width={80} height={40} />,
    <Logo key="sinai" image="/components/logos/images/sinai.png" name="Sinai" width={80} height={40} />,
    <Logo key="jmotors" image="/components/logos/images/jmotors.png" name="J Motors" width={80} height={40} />,
    <Logo key="danna" image="/components/logos/images/DANNA.png" name="Danna" width={80} height={40} />,
    <Logo key="tecxio" image="/components/logos/images/tecxio.png" name="Tecxio" width={80} height={40} />,
    <Logo key="yecyoc" image="/components/logos/images/yecyoc.png" name="Yecyoc" width={80} height={40} />,
    <Logo key="opting" image="/components/logos/images/opting.png" name="Opting" width={80} height={40} />,
    <Logo key="nunez" image="/components/logos/images/nunez.png" name="Nuñez" width={80} height={40} />,
    <Logo key="dromex" image="/components/logos/images/dromex.png" name="Dromex" width={80} height={40} />,
    <Logo key="praset" image="/components/logos/images/praset.png" name="Praset" width={80} height={40} />,
    <Logo key="landsbroker" image="/components/logos/images/landsBroker.png" name="Lands Broker" width={80} height={40} />,
    <Logo key="aserraderogris" image="/components/logos/images/aserraderogris.png" name="Aserradero Gris" width={80} height={40} />,
  ],
  className,
}: LogosProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-6">
          {badge !== false && badge}
          <h2 className="text-md font-semibold sm:text-2xl">{title}</h2>
        </div>
        {logos !== false && logos.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-8">
            {logos}
          </div>
        )}
      </div>
    </Section>
  );
}
