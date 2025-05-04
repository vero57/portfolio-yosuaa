
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
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
