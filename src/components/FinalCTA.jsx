import { motion } from "framer-motion";
import { MessageCircle, Sparkles, MapPin } from "lucide-react";
import rawData, { BRAND_NAME, LOCATION } from "../data";
import { useMagnetic } from "../hooks/useMagnetic";

export default function FinalCTA() {
  const magneticCtaRef = useMagnetic(0.3);

  return (
    <section className="py-20 lg:py-28 bg-primary text-white relative overflow-hidden bg-grain-dark">
      {/* Luzes quentes e orbes orgânicos */}
      <div
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-secondary/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-accent/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-secondary border border-white/15 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Experiência Autoral na Pompeia</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6"
        >
          O seu próximo café com sabor de acolhimento começa na Rua Aurélia
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-canvas/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Seja para uma fatia no salão ou para encomendar quiches e bolos inteiros para a sua celebração,
          fale diretamente conosco pelo WhatsApp.
        </motion.p>

        {/* CTA Primário Pulsante */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <div ref={magneticCtaRef} className="inline-block w-full sm:w-auto">
            <a
              href={rawData.link_whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-accent hover:bg-accent-hover text-white text-base sm:text-lg font-bold shadow-2xl hover:shadow-glow-accent transition-all duration-300 active:scale-95 animate-pulse-subtle"
              aria-label="Fazer Pedido ou Encomenda Agora no WhatsApp (Abre em nova aba)"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Fazer Pedido ou Encomenda Agora</span>
            </a>
          </div>
        </motion.div>

        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-canvas/60">
          <MapPin className="w-4 h-4 text-secondary shrink-0" />
          <span>{LOCATION.logradouro} &bull; {LOCATION.bairro}, {LOCATION.cidade}</span>
        </div>
      </div>
    </section>
  );
}
