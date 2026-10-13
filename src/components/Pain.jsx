import { motion } from "framer-motion";
import { Heart, Flame, Sparkles, Coffee, MessageCircle, ArrowRight } from "lucide-react";
import rawData, { LOCATION } from "../data";
import { useMagnetic } from "../hooks/useMagnetic";

export default function Pain() {
  const magneticCtaRef = useMagnetic(0.2);

  const pillars = [
    {
      icon: Heart,
      title: "Sensação Terapêutica & Afeto",
      desc: "O aroma de forno aceso e café fresco cria um refúgio acolhedor. Como nossos clientes descrevem: uma experiência que acalma a mente e nutre o paladar.",
      accent: "from-secondary/15 to-transparent",
      badge: "Cozinha Afetiva",
      span: "lg:col-span-7",
    },
    {
      icon: Flame,
      title: "Galettes & Quiches de Forno",
      desc: "Massas douradas e crocantes, recheadas com queijo de cabra, boursin, abobrinha, amêndoas laminadas e cebola caramelizada. Cada fatia é uma criação artesanal generosa.",
      accent: "from-accent/15 to-transparent",
      badge: "Receitas Próprias",
      span: "lg:col-span-5",
    },
    {
      icon: Sparkles,
      title: "Confeitaria Equilibrada & Fiel",
      desc: "Sobremesas autorais onde os ingredientes brilham: cheesecake basca aromatizada com cumaru e limão, banoffee clássico e bolo de maçã com caramelo salgado.",
      accent: "from-amber-500/15 to-transparent",
      badge: "Doçura na Medida",
      span: "lg:col-span-5",
    },
    {
      icon: Coffee,
      title: `Pausa Desacelerada na ${LOCATION.bairro}`,
      desc: `Localizado na ${LOCATION.logradouro}, um espaço rústico e autêntico para sua manhã de sábado ou café da tarde. Sem a frieza de cafeterias padronizadas de rede.`,
      accent: "from-secondary/15 to-transparent",
      badge: "Refúgio de Bairro",
      span: "lg:col-span-7",
    },
  ];

  return (
    <section id="pilares" className="py-20 lg:py-28 bg-canvas relative overflow-hidden">
      {/* Detalhe de fundo orgânico */}
      <div
        className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-secondary/5 blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção Dor -> Solução */}
        <div className="max-w-3xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="text-xs sm:text-sm font-bold uppercase tracking-widest text-secondary mb-3"
          >
            A Diferença de um Forno Verdadeiro
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6"
          >
            Cansado de cafés frios e salgados industriais sem alma?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-textMuted leading-relaxed"
          >
            Em uma metrópole agitada, encontrar comida com memória afetiva e frescor autêntico é raro. Na Rua Aurélia,
            resgatamos o tempo do forno, o perfume das especiarias e o sabor marcante de cada ingrediente selecionado.
          </motion.p>
        </div>

        {/* Grid Não Uniforme de Pilares */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-14">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`${pillar.span} group relative bg-surface p-8 sm:p-10 rounded-[2rem] border border-themeBorder hover:border-secondary/40 shadow-warm hover:shadow-warm-lg transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-12 h-12 rounded-2xl bg-canvas border border-themeBorder flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-canvas/80 text-textMuted border border-themeBorder/60">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm sm:text-base text-textMuted leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-themeBorder/40 flex items-center gap-2 text-xs font-semibold text-secondary">
                  <span>Feito diariamente no salão</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* CTA Intermediário de Conversão */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between p-8 rounded-3xl bg-surface border border-themeBorder gap-6"
        >
          <div>
            <p className="font-display text-lg sm:text-xl font-bold text-primary">
              Quer sentir o aroma e provar as receitas hoje?
            </p>
            <p className="text-sm text-textMuted mt-1">
              Fale conosco diretamente pelo WhatsApp para saber as opções recém-saídas do forno.
            </p>
          </div>
          <div ref={magneticCtaRef} className="shrink-0 w-full sm:w-auto">
            <a
              href={rawData.link_whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-accent hover:bg-accent-hover text-white text-sm font-bold shadow-md hover:shadow-glow-accent transition-all duration-300"
              aria-label="Garantir Minhas Fatias e Café pelo WhatsApp (Abre em nova aba)"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Garantir Minhas Fatias e Café</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
