import { useState, useEffect } from "react";
import { MessageCircle, Menu as MenuIcon, X, Coffee } from "lucide-react";
import rawData, { BRAND_NAME } from "../data";
import { useMagnetic } from "../hooks/useMagnetic";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoIndex, setLogoIndex] = useState(0);
  const [logoFailed, setLogoFailed] = useState(false);

  const magneticBtnRef = useMagnetic(0.2);

  const logoUrls = rawData.imagens_identidade_visual || [];
  const currentLogoUrl = !logoFailed && logoUrls.length > 0 ? logoUrls[logoIndex] : null;

  const handleLogoError = () => {
    if (logoIndex + 1 < logoUrls.length) {
      setLogoIndex((prev) => prev + 1);
    } else {
      setLogoFailed(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "O Café", href: "#sobre" },
    { label: "Diferenciais", href: "#pilares" },
    { label: "Galeria", href: "#galeria" },
    { label: "Cardápio & Encomendas", href: "#cardapio" },
    { label: "Avaliações", href: "#avaliacoes" },
    { label: "Localização", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-canvas/90 backdrop-blur-md shadow-warm py-3 border-b border-themeBorder"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-lg"
            aria-label={`${BRAND_NAME} - Página Inicial`}
          >
            {currentLogoUrl ? (
              <img
                src={currentLogoUrl}
                alt={`Logo ${BRAND_NAME}`}
                className="h-10 sm:h-12 w-auto object-contain rounded-md"
                referrerPolicy="no-referrer"
                onError={handleLogoError}
              />
            ) : (
              <div className="flex items-center gap-2 text-primary">
                <span className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center text-secondary">
                  <Coffee className="w-5 h-5" />
                </span>
                <span className="font-display font-bold text-xl sm:text-2xl tracking-tight text-primary group-hover:text-secondary transition-colors">
                  {BRAND_NAME}
                </span>
              </div>
            )}
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-textMuted hover:text-secondary transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-secondary hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA (WhatsApp) */}
          <div className="hidden sm:flex items-center gap-4">
            <div ref={magneticBtnRef} className="inline-block">
              <a
                href={rawData.link_whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-accent hover:bg-accent-hover text-white text-sm font-semibold shadow-md hover:shadow-glow-accent transition-all duration-300 active:scale-95"
                aria-label="Fazer Pedido no WhatsApp (Abre em nova aba)"
              >
                <MessageCircle className="w-4 h-4 animate-pulse" />
                <span>Fazer Pedido no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-surface text-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer / Overlay */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-[60px] bg-canvas/98 backdrop-blur-xl border-b border-themeBorder shadow-2xl px-6 py-8 transition-all">
          <nav className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-base font-medium text-textMain hover:text-secondary border-b border-themeBorder/40 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <a
                href={rawData.link_whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full bg-accent text-white font-semibold shadow-warm transition-transform active:scale-95"
                aria-label="Falar com a Cafeteria no WhatsApp (Abre em nova aba)"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
