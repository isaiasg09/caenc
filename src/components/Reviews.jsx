import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, MessageCircle } from "lucide-react";
import rawData, { NOTA_GERAL_FORMATADA, BRAND_NAME } from "../data";
import { useMagnetic } from "../hooks/useMagnetic";

function ReviewCard({ review, index }) {
  const [expanded, setExpanded] = useState(false);
  const text = review.texto || "";
  const isLong = text.length > 170;

  // Inicial do autor para o avatar
  const initial = (review.autor || "C").trim().charAt(0).toUpperCase();

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative bg-surface p-7 sm:p-8 rounded-[2rem] border border-themeBorder shadow-warm flex flex-col justify-between hover:shadow-warm-lg transition-all duration-300"
    >
      <div>
        {/* Aspas decorativas em estilo editorial */}
        <div className="flex items-center justify-between mb-4">
          <Quote className="w-8 h-8 text-secondary/30 shrink-0" aria-hidden="true" />
          {/* Estrelas individuais reais sem alteração */}
          <div className="flex items-center gap-1" aria-label={`Avaliação: ${review.nota} de 5 estrelas`}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-4 h-4 ${
                  star <= review.nota
                    ? "text-amber-500 fill-amber-500"
                    : "text-themeBorder fill-themeBorder/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Texto da avaliação sem alterações ou inventar nada */}
        {text && (
          <div className="mb-6">
            <p
              className={`text-sm sm:text-base text-textMain leading-relaxed ${
                !expanded && isLong ? "line-clamp-4" : ""
              }`}
            >
              “{text}”
            </p>
            {isLong && (
              <button
                type="button"
                onClick={() => setExpanded(!expanded)}
                className="mt-2 text-xs font-bold text-secondary hover:underline focus:outline-none"
              >
                {expanded ? "Ler menos" : "Ler mais"}
              </button>
            )}
          </div>
        )}
      </div>

      {/* Identificação do Autor com Inicial */}
      <div className="flex items-center gap-3 pt-4 border-t border-themeBorder/60">
        <span className="w-10 h-10 rounded-full bg-secondary/15 text-secondary flex items-center justify-center font-display font-bold text-base shrink-0">
          {initial}
        </span>
        <div>
          <h4 className="font-display font-bold text-sm sm:text-base text-primary">
            {review.autor}
          </h4>
          <span className="text-xs text-textMuted">Avaliação no Google Maps</span>
        </div>
      </div>
    </motion.article>
  );
}

export default function Reviews() {
  const reviews = rawData.avaliacoes_destaque || [];
  const magneticCtaRef = useMagnetic(0.2);

  return (
    <section id="avaliacoes" className="py-20 lg:py-28 bg-canvas relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção com Nota Geral em Destaque EXCLUSIVO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-secondary mb-2">
              Opinião Transparente & Real
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              O que dizem os clientes que já sentiram o aroma do nosso café
            </h2>
            <p className="text-base sm:text-lg text-textMuted max-w-2xl">
              Todas as avaliações reais compartilhadas no Google Maps sobre o {BRAND_NAME}.
              Sem filtros, sem textos inventados e com notas transparentes.
            </p>
          </div>

          {/* Destaque da Nota Geral com Estrelas */}
          <div className="lg:col-span-4 bg-surface p-6 sm:p-8 rounded-[2rem] border border-themeBorder shadow-warm flex flex-col items-center text-center">
            <span className="font-display text-5xl sm:text-6xl font-extrabold text-primary tracking-tight">
              {NOTA_GERAL_FORMATADA}
            </span>
            <div className="flex items-center gap-1.5 my-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-amber-500 fill-amber-500" />
              ))}
            </div>
            <p className="text-xs sm:text-sm font-semibold text-textMuted uppercase tracking-wider">
              Avaliações no Google
            </p>
          </div>
        </div>

        {/* Grade Editorial com TODAS as avaliações reais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reviews.map((review, idx) => (
            <ReviewCard key={`${review.autor}-${idx}`} review={review} index={idx} />
          ))}
        </div>

        {/* CTA ao Final da Prova Social */}
        <div className="text-center">
          <div ref={magneticCtaRef} className="inline-block">
            <a
              href={rawData.link_whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accent hover:bg-accent-hover text-white text-base font-bold shadow-warm hover:shadow-glow-accent transition-all duration-300 active:scale-95"
              aria-label="Experimentar os Sabores no WhatsApp (Abre em nova aba)"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Experimentar os Sabores no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
