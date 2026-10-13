import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2, MessageCircle } from "lucide-react";
import rawData, { BRAND_NAME } from "../data";
import { useMagnetic } from "../hooks/useMagnetic";

export default function Gallery() {
  const [photos, setPhotos] = useState(rawData.fotos_local_maps || []);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);
  const magneticCtaRef = useMagnetic(0.2);

  const handleImageError = (indexToRemove) => {
    setPhotos((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const openLightbox = (index) => {
    setActiveLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setActiveLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  const nextImage = useCallback(() => {
    if (photos.length === 0) return;
    setActiveLightboxIndex((prev) => (prev + 1) % photos.length);
  }, [photos.length]);

  const prevImage = useCallback(() => {
    if (photos.length === 0) return;
    setActiveLightboxIndex((prev) => (prev - 1 + photos.length) % photos.length);
  }, [photos.length]);

  // Teclado: Esc, ArrowLeft, ArrowRight
  useEffect(() => {
    if (activeLightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, closeLightbox, nextImage, prevImage]);

  // Variação orgânica de classes Bento para acomodar as 10 fotos sem buracos
  const bentoSpans = [
    "lg:col-span-8 lg:row-span-2 min-h-[380px] sm:min-h-[460px]", // 0
    "lg:col-span-4 lg:row-span-1 min-h-[230px]",                  // 1
    "lg:col-span-4 lg:row-span-1 min-h-[230px]",                  // 2
    "lg:col-span-4 lg:row-span-2 min-h-[380px] sm:min-h-[440px]", // 3
    "lg:col-span-4 lg:row-span-1 min-h-[210px]",                  // 4
    "lg:col-span-4 lg:row-span-1 min-h-[210px]",                  // 5
    "lg:col-span-4 lg:row-span-1 min-h-[240px]",                  // 6
    "lg:col-span-4 lg:row-span-1 min-h-[240px]",                  // 7
    "lg:col-span-6 lg:row-span-1 min-h-[260px] sm:min-h-[300px]", // 8
    "lg:col-span-6 lg:row-span-1 min-h-[260px] sm:min-h-[300px]", // 9
  ];

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Galeria */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-secondary mb-2">
              Atmosfera & Detalhes
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
              O olhar e o paladar: detalhes do nosso forno e salão
            </h2>
          </div>
          <p className="text-sm text-textMuted max-w-md">
            Fotos reais do ambiente, receitas e ingredientes capturados no dia a dia do {BRAND_NAME}.
          </p>
        </div>

        {/* Bento Grid Assimétrico */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6">
          {photos.map((src, index) => {
            const spanClass = bentoSpans[index % bentoSpans.length];
            return (
              <motion.div
                key={`${src.slice(-20)}-${index}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
                className={`group relative overflow-hidden rounded-[1.75rem] bg-surface border border-themeBorder cursor-pointer shadow-warm ${spanClass}`}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={src}
                  alt={`Fotografia do espaço e receitas artesanais ${BRAND_NAME} - item ${index + 1}`}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  decoding="async"
                  loading="lazy"
                  onError={() => handleImageError(index)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                  <span className="text-xs font-medium text-white/90">
                    Clique para ampliar
                  </span>
                  <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA pós-galeria */}
        <div className="mt-14 text-center">
          <div ref={magneticCtaRef} className="inline-block">
            <a
              href={rawData.link_whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accent hover:bg-accent-hover text-white text-base font-bold shadow-warm hover:shadow-glow-accent transition-all duration-300 active:scale-95"
              aria-label="Quero Viver Essa Experiência no WhatsApp (Abre em nova aba)"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Quero Viver Essa Experiência</span>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox em React Puro */}
      <AnimatePresence>
        {activeLightboxIndex !== null && photos[activeLightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            {/* Botão Fechar */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Fechar visualização da foto"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Contador de Fotos */}
            <div className="absolute top-7 left-6 text-sm text-white/70 font-mono">
              {activeLightboxIndex + 1} / {photos.length}
            </div>

            {/* Botão Anterior */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-50 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Imagem Central */}
            <div
              className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[activeLightboxIndex]}
                alt={`Visualização ampliada - Foto ${activeLightboxIndex + 1} do ${BRAND_NAME}`}
                className="max-h-[85vh] max-w-full object-contain rounded-xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Botão Próxima */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-50 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
