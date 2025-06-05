import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const itemVariants = cva(
  "text-foreground flex flex-col gap-4 p-6 rounded-xl shadow-lg overflow-hidden relative",
  {
    variants: {
      variant: {
        default: "glass-1 to-transparent dark:glass-3",
        glow: "glass-2 to-trasparent dark:glass-3 after:content-[''] after:absolute after:-top-[80px] after:left-1/2 after:h-[80px] after:w-[100%] after:max-w-[500px] after:-translate-x-1/2 after:rounded-[50%] dark:after:bg-foreground/30 after:blur-[40px]",
        "glow-brand": "glass-3 from-card/100 to-card/100 dark:glass-4 after:content-[''] after:absolute after:-top-[80px] after:left-1/2 after:h-[80px] after:w-[100%] after:max-w-[500px] after:-translate-x-1/2 after:rounded-[50%] after:bg-brand-foreground/70 after:blur-[40px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface ItemProps extends React.ComponentProps<"div">, VariantProps<typeof itemVariants> {}

function Item({ className, variant, ...props }: ItemProps) {
  return (
    <div
      data-slot="item"
      className={cn(itemVariants({ variant, className }))}
      {...props}
    >
      <hr className="via-foreground/60 absolute top-0 left-[10%] h-[1px] w-[80%] border-0 bg-linear-to-r from-transparent to-transparent" />
      {props.children}
    </div>
  );
}

function ItemTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="item-title"
      className={cn(
        "text-sm leading-none font-semibold tracking-tight sm:text-base",
        className,
      )}
      {...props}
    />
  );
}

function ItemDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-description"
      className={cn(
        "text-muted-foreground flex max-w-[240px] flex-col gap-2 text-sm text-balance",
        className,
      )}
      {...props}
    />
  );
}

function ItemIcon({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-icon"
      className={cn("flex items-center self-start text-brand", className)}
      {...props}
    />
  );
}

export { Item, ItemIcon, ItemTitle, ItemDescription, itemVariants };
