import { ArrowUpRight, Calendar } from "lucide-react";
import { Item, ItemTitle, ItemDescription } from "../../ui/item";
import { Section } from "../../ui/section";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";

interface NewsProps {
  title?: string;
  description?: string;
  maxPosts?: number;
  className?: string;
}

export default function News({
  title = "Noticias y Artículos",
  description = "Mantente al día con las últimas tendencias tecnológicas y novedades de nuestra empresa",
  maxPosts = 3,
  className,
}: NewsProps) {
  // Obtener los posts más recientes primero (por fecha)
  const sortedPosts = [...blogPosts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Limitar a la cantidad especificada
  const postsToShow = sortedPosts.slice(0, maxPosts);

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
        
        {postsToShow.length > 0 && (
          <div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
            {postsToShow.map((post, index) => (
              <Item 
                key={index} 
                variant={post.variant || "default"}
                className="relative flex flex-col gap-6 p-0 h-full overflow-hidden"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </div>
                </div>
                
                <div className="flex flex-col gap-4 p-6">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="size-4" />
                    <span>{post.date}</span>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <ItemTitle className="text-xl font-semibold">{post.title}</ItemTitle>
                    <ItemDescription className="text-sm max-w-none">{post.description}</ItemDescription>
                  </div>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-brand flex items-center gap-1 text-sm font-medium mt-auto pt-2 hover:underline"
                  >
                    Leer más
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </Item>
            ))}
          </div>
        )}
        
        {postsToShow.length > 0 && (
          <Link 
            href="/blog"
            className="text-brand border border-brand/20 hover:bg-brand/5 rounded-full px-6 py-3 text-sm font-medium flex items-center gap-2 transition-colors"
          >
            Ver todos los artículos
            <ArrowUpRight className="size-4" />
          </Link>
        )}
      </div>
    </Section>
  );
} 