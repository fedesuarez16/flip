import { Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Section } from "../ui/section";
import Navbar from "../sections/navbar/default";
import Footer from "../sections/footer/default";

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
          <div className="w-full mb-8">
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-6">
              <span className="bg-brand/10 text-brand px-3 py-1 rounded-full text-xs font-medium">
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
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl">
              {description}
            </p>
          </div>
          
          <div className="relative w-full h-80 sm:h-96 md:h-[500px] mb-12 overflow-hidden rounded-xl shadow-xl">
            <Image 
              src={image} 
              alt={title} 
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="prose dark:prose-invert prose-lg max-w-none mb-12 
            prose-headings:mt-10 prose-headings:mb-5 
            prose-h2:text-3xl prose-h2:font-bold prose-h2:border-b prose-h2:border-muted/30 prose-h2:pb-2
            prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-8
            prose-h4:text-xl prose-h4:font-medium 
            prose-p:leading-relaxed prose-p:mb-5
            prose-li:my-1 
            prose-a:text-brand prose-a:no-underline hover:prose-a:underline
            prose-strong:text-foreground prose-strong:font-bold
            prose-blockquote:border-l-4 prose-blockquote:border-brand/50 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-muted-foreground
            prose-code:bg-muted/30 prose-code:px-1 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm
            prose-ul:my-6 prose-ol:my-6
          " dangerouslySetInnerHTML={{ __html: content }} />
          
          <div className="border-t border-muted/20 pt-8 my-12 flex justify-center">
            <Link 
              href="/" 
              className="text-brand flex items-center gap-2 text-sm font-medium hover:underline"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </Section>
      
      <Footer />
    </div>
  );
} 