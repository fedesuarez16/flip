import { Calendar, User } from "lucide-react";
import Image from "next/image";
import { Section } from "../ui/section";
import Navbar from "../sections/navbar/default";
import Footer from "../sections/footer/default";
import { Item } from "../ui/item";

interface ArticleProps {
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  category: string;
  content: string;
}

export default function Article({
  title,
  description,
  image,
  date,
  author,
  category,
  content,
}: ArticleProps) {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-background text-foreground">
      <Navbar />
      
      <Section className="pt-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="w-full mb-6">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <span className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                {category}
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="size-4" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="size-4" />
                <span>{author}</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {title}
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              {description}
            </p>
          </div>
          
          <div className="relative w-full h-80 sm:h-96 md:h-[500px] mb-10 overflow-hidden rounded-xl">
            <Image 
              src={image} 
              alt={title} 
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <Item variant="default" className="p-8 mb-10">
            <div className="prose dark:prose-invert prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
          </Item>
          
          <div className="my-12 flex justify-center">
            <a 
              href="/" 
              className="text-brand flex items-center gap-2 text-sm font-medium hover:underline"
            >
              ← Volver al inicio
            </a>
          </div>
        </div>
      </Section>
      
      <Footer />
    </div>
  );
} 