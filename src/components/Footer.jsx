import { Coffee, Heart, ArrowUp } from "lucide-react";
import rawData, { BRAND_NAME, LOCATION } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-canvas pt-16 pb-12 border-t border-themeBorder/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-start">
          {/* Coluna de Identidade */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                <Coffee className="w-5 h-5" />
              </span>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                {BRAND_NAME}
              </span>
            </div>
            <p className="text-sm text-canvas/70 max-w-md leading-relaxed mb-4">
              Cafeteria artesanal e confeitaria autoral de forno na Pompeia, São Paulo.
              Receitas feitas à mão com ingredientes nobres, quiches, galettes e doces frescos.
            </p>
            <p className="text-xs text-canvas/50">
              {LOCATION.logradouro} &bull; {LOCATION.bairro}, {LOCATION.cidade} - {LOCATION.uf}
            </p>
          </div>

          {/* Coluna de Navegação Rápida */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-secondary mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-canvas/80">
              <li>
                <a href="#sobre" className="hover:text-secondary transition-colors">
                  O Café & Forno
                </a>
              </li>
              <li>
                <a href="#pilares" className="hover:text-secondary transition-colors">
                  Diferenciais Artesanais
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-secondary transition-colors">
                  Galeria de Fotos
                </a>
              </li>
              <li>
                <a href="#cardapio" className="hover:text-secondary transition-colors">
                  Cardápio de Encomendas
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-secondary transition-colors">
                  Avaliações no Google
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-secondary transition-colors">
                  Onde Estamos
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna de Contato & Ação */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-secondary mb-4">
              Contato Rápido
            </h4>
            <p className="text-sm text-canvas/80 mb-2">
              WhatsApp:{" "}
              <a
                href={rawData.link_whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline font-medium"
              >
                {rawData.telefone}
              </a>
            </p>
            <p className="text-xs text-canvas/60 mb-6">
              Pompeia &bull; Zona Oeste de São Paulo
            </p>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-canvas text-xs font-semibold transition-colors min-h-[44px]"
              aria-label="Voltar ao topo da página"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Linha de Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-canvas/50 text-center sm:text-left">
          <p>
            &copy; {currentYear} {BRAND_NAME}. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1.5 justify-center">
            <span>Desenvolvido com</span>
            <Heart className="w-3.5 h-3.5 text-secondary fill-secondary" />
            <span>para amantes da boa gastronomia.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
