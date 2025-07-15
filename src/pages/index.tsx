import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ContactSection } from "@/components/sections/ContactSection";

function Spinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <span className="inline-block w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></span>
    </div>
  );
}

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ThemeProvider defaultTheme="system">
      <div className="min-h-screen flex flex-col">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <PortfolioSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
