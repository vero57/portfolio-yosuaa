
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-20">
      <div className="section-container flex flex-col md:flex-row items-center">
        <div className="flex-1 mb-10 md:mb-0">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary dark:bg-primary/20 text-sm font-medium animate-fade-in">
            Welcome to my portfolio
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight animate-fade-in">
            <span className="block">My name is Yosua Gerrard Ferdinand</span>
            <span className="gradient-text">Junior Developer</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl animate-fade-in">
          Crafting beautiful, responsive digital solutions that drive business growth. Leveraging a deep and versatile technological skillset, I am equipped to build tailor-made websites and applications, selecting the ideal tools for your specific needs. My expertise includes languages like JavaScript, Python, PHP, TypeScript, Dart, and Lua. leading frontend frameworks such as React, Next.js, and Vue.js also development with Laravel. and modern tools like Vite, Tailwind CSS, and Bootstrap.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in">
            <Button size="lg" asChild>
              <a href="#portfolio">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
        <div className={cn(
          "flex-shrink-0 relative w-full md:w-1/2 h-72 md:h-96 animate-fade-in", 
          "after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-tr after:from-primary/20 after:to-accent/30 after:rounded-2xl"
        )}>
          <div className="absolute inset-0 rounded-2xl overflow-hidden bg-muted">
            <img 
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1812&auto=format&fit=crop"
              alt="Developer workspace with laptop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
