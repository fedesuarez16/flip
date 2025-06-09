import { blogPosts } from "@/data/blog-posts";
import { ArrowUpRight, Calendar, ChevronLeft } from "lucide-react";
import { Item, ItemTitle, ItemDescription } from "@/components/ui/item";
import { Section } from "@/components/ui/section";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";

export default function BlogIndex() {
  // Ordenar posts por fecha (más reciente primero)
  const sortedPosts = [...blogPosts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="min-h-screen w-full overflow-hidden bg-background text-foreground">
      <Navbar />
      
      <Section className="pt-24">
        <div className="max-w-container mx-auto px-4">
          <div className="mb-10">
            <Link 
              href="/" 
              className="text-muted-foreground hover:text-foreground flex items-center gap-1 text-sm mb-6 transition-colors"
            >
              <ChevronLeft className="size-4" />
              Volver al inicio
            </Link>
            
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Blog
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              Artículos, tutoriales y novedades sobre desarrollo de software, tecnologías emergentes y mejores prácticas.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
            {sortedPosts.map((post, index) => (
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
        </div>
      </Section>
      
      <Footer />
    </div>
  );
} 