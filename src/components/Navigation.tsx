import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "./ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Início", id: "inicio" },
    { label: "Sobre", id: "sobre" },
    { label: "Galeria", id: "galeria" },
    { label: "Como Funciona", id: "como-funciona" },
    { label: "Prazos", id: "prazos" },
    { label: "Produtos", id: "produtos" },
    { label: "Contato", id: "contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
      style={{
        backgroundColor: isScrolled ? "#F8F2ED" : "rgba(248, 242, 237, 0.95)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("inicio")}
            className="flex items-center gap-2 transition-transform hover:scale-105"
          >
            <Heart className="w-6 h-6" style={{ color: "#E8A5B0" }} />
            <span
              className="text-xl"
              style={{
                color: "#6B4F46",
                fontFamily: "serif",
              }}
            >
              AdeehBuqués
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="transition-colors hover:opacity-80"
                style={{ color: "#6B4F46" }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/message/GEPMOYC4YUTTD1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                className="rounded-full"
                style={{
                  backgroundColor: "#E8A5B0",
                  color: "#ffffff",
                }}
              >
                Fazer Pedido
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" style={{ color: "#6B4F46" }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: "#6B4F46" }} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden py-4 border-t"
            style={{ borderColor: "rgba(107, 79, 70, 0.15)" }}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left py-2 transition-colors hover:opacity-80"
                  style={{ color: "#6B4F46" }}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://wa.me/message/GEPMOYC4YUTTD1"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2"
              >
                <Button
                  className="w-full rounded-full"
                  style={{
                    backgroundColor: "#E8A5B0",
                    color: "#ffffff",
                  }}
                >
                  Fazer Pedido
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
