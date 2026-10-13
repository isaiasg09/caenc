import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, Clock, Sparkles, MapPin } from "lucide-react";
import rawData, { BRAND_NAME, NICHE, LOCATION, getStatusFuncionamento } from "../data";
import { useMagnetic } from "../hooks/useMagnetic";

export default function Hero() {
  const containerRef = useRef(null);
  const magneticBtnRef = useMagnetic(0.3);
  const status = getStatusFuncionamento();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const parallaxBg = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const parallaxFront = useTransform(scrollYProgress, [0, 1], [0, -35]);

  const fotoPrincipal = rawData.fotos_local_maps?.[0];
  const fotoSecundaria = rawData.fotos_local_maps?.[1] || rawData.fotos_local_maps?.[0];

  return (
    <section
      ref={containerRef}
      id="sobre"
      className="relative min-h-[92vh] pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-grain"
    >
      {/* Elementos decorativos de atmosfera orgânica */}
      <div
        className="absolute top-12 left-1/4 w-96 h-96 rounded-full bg-secondary/8 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-accent/8 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Layout Assimétrico e Proporção Áurea 61,8% / 38,2% */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Coluna de Conteúdo Editorial (60% no desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Eyebrow de Localização e Autenticidade */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-themeBorder text-textMuted text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 self-start"
            >
              <Sparkles className="w-3.5 h-3.5 text-secondary" />
              <span>{BRAND_NAME} &bull; {LOCATION.bairro}, {LOCATION.cidade}</span>
            </motion.div>

            {/* H1 de Venda com Palavra-Chave de Nicho + Bairro/Cidade */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[4.2rem] font-bold text-primary leading-[1.08] tracking-tight mb-6">
              <span className="block">{NICHE}</span>
              <span className="block text-secondary italic font-normal font-display">
                com afeto e forno artesanal
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-medium text-textMain mt-2">
                na {LOCATION.bairro}, {LOCATION.cidade}
              </span>
            </h1>

            {/* Subtítulo Persuasivo */}
            <p className="text-base sm:text-lg lg:text-xl text-textMuted max-w-2xl leading-relaxed mb-8">
              Receitas feitas à mão com aromas que acolhem: quiches folhadas, galettes crocantes com queijo de cabra,
              cheesecake com cumaru e bolos aromáticos. Um refúgio aconchegante para a sua pausa do dia ou para encomendar
              direto para a sua casa.
            </p>

            {/* Ações e Conversão Primária */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <div ref={magneticBtnRef} className="inline-block">
                <a
                  href={rawData.link_whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-accent hover:bg-accent-hover text-white text-base font-bold shadow-warm hover:shadow-glow-accent transition-all duration-300 transform active:scale-95 animate-pulse-subtle"
                  aria-label="Reservar Mesa ou Pedir no WhatsApp (Abre em nova aba)"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Reservar Mesa ou Pedir no WhatsApp</span>
                </a>
              </div>

              <a
                href="#cardapio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-surface hover:bg-surface-hover text-primary font-semibold text-sm border border-themeBorder transition-all duration-300"
              >
                <span>Conhecer o Cardápio</span>
              </a>
            </div>

            {/* Microcopy Honest com Horários Reais e Localização */}
            <div className="pt-6 border-t border-themeBorder/60 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-textMuted">
              <div className="flex items-center gap-2">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    status.aberto ? "bg-emerald-600 animate-ping" : "bg-amber-700"
                  }`}
                  aria-hidden="true"
                />
                <span className="font-semibold text-textMain">{status.mensagem}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-secondary shrink-0" />
                <span>Seg a Sex: 08h-19h (Seg 10h) | Sáb: 09h-16h</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-secondary shrink-0" />
                <span>{LOCATION.logradouro}</span>
              </div>
            </div>
          </motion.div>

          {/* Coluna Visual Orgânica Assimétrica (40% no desktop) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Foto Maior Atrás com Cantos Orgânicos */}
              <motion.div
                style={{ y: parallaxBg }}
                className="relative z-10 w-[88%] ml-auto aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-warm-lg border-4 border-surface"
              >
                {fotoPrincipal ? (
                  <img
                    src={fotoPrincipal}
                    alt={`Ambiente e gastronomia artesanal do ${BRAND_NAME} na Pompeia`}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    decoding="async"
                    loading="eager"
                  />
                ) : (
                  <div className="w-full h-full bg-surface flex items-center justify-center text-textMuted">
                    {BRAND_NAME}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* Foto Menor Sobreposta Quebrando o Grid */}
              <motion.div
                style={{ y: parallaxFront }}
                className="absolute -bottom-8 -left-4 sm:-left-8 z-20 w-[55%] aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 border-canvas rotate-[-3deg] hover:rotate-0 transition-transform duration-500"
              >
                {fotoSecundaria ? (
                  <img
                    src={fotoSecundaria}
                    alt={`Receitas artesanais do ${BRAND_NAME}`}
                    className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    decoding="async"
                    loading="lazy"
                  />
                ) : null}
              </motion.div>

              {/* Selo Artesanal Flutuante em SVG / Tipografia */}
              <div className="absolute -top-6 -right-3 z-30 bg-primary text-canvas px-4 py-3 rounded-2xl shadow-xl border border-secondary/30 rotate-[4deg]">
                <p className="text-[11px] font-bold uppercase tracking-wider text-secondary">Feito no Forno</p>
                <p className="font-display text-sm font-semibold text-white">Receitas do Dia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
