import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setShowScrollTop(docHeight > 0 && scrollY / docHeight > 0.7);
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => document.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={cn(
          "static top-0 w-full z-50 transition-all duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="container flex items-center justify-between">
          <a href="#" className="font-serif text-xl md:text-2xl font-bold tracking-tight">
            Portfolio
          </a>

          
          <nav className="hidden md:flex items-center gap-6">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </nav>

          <div className="flex items-center md:hidden gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <div className="relative w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={cn(
                    "block absolute h-0.5 w-6 bg-foreground transition-all duration-300",
                    mobileMenuOpen ? "rotate-45 top-3" : "top-1"
                  )}
                ></span>
                <span
                  className={cn(
                    "block absolute h-0.5 w-6 bg-foreground transition-all duration-300",
                    mobileMenuOpen ? "opacity-0" : "top-3"
                  )}
                ></span>
                <span
                  className={cn(
                    "block absolute h-0.5 w-6 bg-foreground transition-all duration-300",
                    mobileMenuOpen ? "-rotate-45 top-3" : "top-5"
                  )}
                ></span>
              </div>
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg shadow-lg flex flex-col md:hidden">
            <div className="container flex flex-col py-8">
              <ul className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block px-2 py-2 text-lg text-foreground/80 hover:text-foreground transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </header>

      {showScrollTop && (
        <Button
          onClick={handleScrollTop}
          variant="outline"
          size="icon"
          className="fixed bottom-20 right-10 z-50 shadow-lg animate-in fade-in bg-background/90 hover:bg-background"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </>
  );
}
