import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./badge";
import Image from "next/image";

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  image: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
  name: string;
  version?: string;
  width?: number;
  height?: number;
  showName?: boolean;
  badge?: string;
}

export default function Logo({
  className,
  image,
  name,
  version,
  width = 24,
  height = 24,
  showName = true,
  badge,
  ...props
}: LogoProps) {
  return (
    <div
      data-slot="logo"
      className={cn("flex items-center gap-2 text-sm font-medium", className)}
      {...props}
    >
      {typeof image === "string" ? (
        <Image
          src={image}
          alt={name}
          width={width}
          height={height}
          className="max-h-full max-w-full opacity-70"
        />
      ) : (
        React.createElement(image, {
          width,
          height,
          "aria-hidden": true,
          className: "max-h-full max-w-full opacity-70",
        })
      )}
      <span className={cn(!showName && "sr-only")}>{name}</span>
      {version && <span className="text-muted-foreground">{version}</span>}
      {badge && (
        <Badge variant="brand" size="sm">
          {badge}
        </Badge>
      )}
    </div>
  );
}
