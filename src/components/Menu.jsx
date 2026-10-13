import { useState } from "react";
import { motion } from "framer-motion";
import { Utensils, ExternalLink, MessageCircle, Cake, Sparkles } from "lucide-react";
import rawData from "../data";
import { useMagnetic } from "../hooks/useMagnetic";

/**
 * Componente Item do Cardápio
 * Exibe exatamente os campos existentes no JSON sem inventar ou omitir nada.
 */
function MenuItem({ item }) {
  const title = item.sabor || item.nome;
  const preco = item.preco;

  // Atributos adicionais presentes no JSON
  const details = [];
  if (item.especificacoes) details.push({ label: "Especificações", val: item.especificacoes });
  if (item.tamanho) details.push({ label: "Tamanho", val: item.tamanho });
  if (item.porcao) details.push({ label: "Porção", val: item.porcao });
  if (item.peso) details.push({ label: "Peso", val: item.peso });

  return (
    <article className="py-4 border-b border-themeBorder/60 last:border-b-0 group">
      <div className="flex items-baseline justify-between gap-2">
        <h4 className="font-display text-lg sm:text-xl font-bold text-primary group-hover:text-secondary transition-colors">
          {title}
        </h4>
        <div className="menu-leader hidden sm:block" aria-hidden="true" />
        {preco && (
          <span className="font-mono text-base sm:text-lg font-bold text-secondary shrink-0">
            {preco}
          </span>
        )}
      </div>

      {item.descricao && (
        <p className="text-sm text-textMuted mt-1 italic max-w-xl">
          {item.descricao}
        </p>
      )}

      {details.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 mt-2">
          {details.map((d) => (
            <span
              key={d.label}
              className="inline-flex items-center text-xs px-2.5 py-0.5 rounded-full bg-canvas border border-themeBorder text-textMuted"
            >
              <strong className="font-medium mr-1 text-primary">{d.label}:</strong> {d.val}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

/**
 * Renderizador Recursivo Genérico do Cardápio
 * Percorre recursivamente a estrutura de categorias, subcategorias e listas de itens.
 */
function RecursiveCategoryRenderer({ data, depth = 0 }) {
  if (!data) return null;

  // Caso 1: Array de itens diretos
  if (Array.isArray(data)) {
    return (
      <div className="space-y-1">
        {data.map((item, idx) => (
          <MenuItem key={item.nome || item.sabor || idx} item={item} />
        ))}
      </div>
    );
  }

  // Caso 2: Objeto com chave 'itens' (como quiches e galettes)
  if (data.itens && Array.isArray(data.itens)) {
    return (
      <div className="space-y-2">
        {data.especificacoes && (
          <div className="text-xs sm:text-sm font-medium text-secondary/90 bg-secondary/10 px-3 py-1.5 rounded-lg inline-block mb-2">
            Medida padrão: {data.especificacoes}
          </div>
        )}
        <div className="space-y-1">
          {data.itens.map((item, idx) => (
            <MenuItem key={item.sabor || item.nome || idx} item={item} />
          ))}
        </div>
      </div>
    );
  }

  // Caso 3: Objeto com subcategorias (ex: salgados contendo quiches e galettes)
  if (typeof data === "object") {
    return (
      <div className="space-y-8">
        {Object.entries(data).map(([subKey, subVal]) => {
          const formattedSubTitle = subKey.charAt(0).toUpperCase() + subKey.slice(1);
          return (
            <div key={subKey} className="pt-2">
              <h4 className="font-display text-xl sm:text-2xl font-semibold text-primary/90 pb-2 border-b-2 border-secondary/20 inline-block mb-4">
                {formattedSubTitle}
              </h4>
              <RecursiveCategoryRenderer data={subVal} depth={depth + 1} />
            </div>
          );
        })}
      </div>
    );
  }

  return null;
}

export default function Menu() {
  const cardapio = rawData.cardapio;
  const linkDrive = rawData.link_cardapio_encomendas;
  const magneticCtaRef = useMagnetic(0.2);

  if (!cardapio && !linkDrive) return null;

  const categories = Object.keys(cardapio || {});
  const [selectedCategory, setSelectedCategory] = useState(
    categories.length > 0 ? categories[0] : null
  );

  return (
    <section id="cardapio" className="py-20 lg:py-28 bg-surface relative overflow-hidden">
      {/* Detalhe de textura artesanal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-secondary mb-2 flex items-center gap-2">
            <Utensils className="w-4 h-4" />
            <span>Cardápio & Encomendas de Forno</span>
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Nossas Quiches, Galettes e Doces Inteiros
          </h2>
          <p className="text-base sm:text-lg text-textMuted">
            Receitas autorais preparadas sob encomenda para levar para a sua mesa, eventos ou almoços em família.
            Consulte os detalhes estruturados de cada fornada.
          </p>
        </div>

        {/* Abas de Categorias */}
        {categories.length > 1 && (
          <div className="flex flex-wrap gap-2.5 mb-10 pb-2 border-b border-themeBorder" role="tablist">
            {categories.map((catKey) => {
              const isActive = selectedCategory === catKey;
              const title = catKey.charAt(0).toUpperCase() + catKey.slice(1);
              return (
                <button
                  key={catKey}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(catKey)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-white shadow-md"
                      : "bg-canvas text-textMuted hover:text-primary hover:bg-canvas/80 border border-themeBorder"
                  }`}
                >
                  {title}
                </button>
              );
            })}
          </div>
        )}

        {/* Conteúdo Editorial do Cardápio */}
        <div className="bg-canvas p-6 sm:p-10 lg:p-12 rounded-[2rem] border border-themeBorder shadow-warm mb-12">
          {selectedCategory && cardapio[selectedCategory] ? (
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-6 text-secondary">
                <Cake className="w-5 h-5" />
                <h3 className="font-display text-2xl font-bold text-primary capitalize">
                  {selectedCategory}
                </h3>
              </div>
              <RecursiveCategoryRenderer data={cardapio[selectedCategory]} />
            </motion.div>
          ) : (
            <RecursiveCategoryRenderer data={cardapio} />
          )}
        </div>

        {/* Rodapé de Ações do Cardápio: CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl bg-primary text-white">
          <div className="flex items-center gap-4">
            <span className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
              <Sparkles className="w-6 h-6" />
            </span>
            <div>
              <p className="font-display text-lg sm:text-xl font-bold">
                Deseja encomendar para uma data especial?
              </p>
              <p className="text-xs sm:text-sm text-canvas/70">
                Fale com a gente no WhatsApp para combinar os detalhes e sabores do seu pedido.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            {/* CTA Secundário para PDF/Drive */}
            {linkDrive && (
              <a
                href={linkDrive}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/20 transition-colors"
                aria-label="Ver cardápio completo de encomendas no Google Drive (Abre em nova aba)"
              >
                <span>Ver cardápio completo (Drive)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {/* CTA Primário WhatsApp */}
            <div ref={magneticCtaRef} className="shrink-0">
              <a
                href={rawData.link_whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent-hover text-white text-sm font-bold shadow-md hover:shadow-glow-accent transition-all active:scale-95"
                aria-label="Encomendar Pelo WhatsApp (Abre em nova aba)"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Encomendar Pelo WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
