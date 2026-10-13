import { MessageCircle } from "lucide-react";
import rawData from "../data";

export default function WhatsAppFloat() {
  return (
    <aside aria-label="Atendimento rápido pelo WhatsApp" className="fixed bottom-6 right-6 z-50">
      <a
        href={rawData.link_whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-accent hover:bg-accent-hover text-white shadow-2xl hover:shadow-glow-accent transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-accent/40"
        aria-label="Falar no WhatsApp"
      >
        {/* Anéis pulsantes decorativos */}
        <span
          className="absolute -inset-1 rounded-full bg-accent/30 animate-ping pointer-events-none"
          aria-hidden="true"
        />
        <span
          className="absolute -inset-2 rounded-full bg-accent/15 animate-pulse pointer-events-none"
          aria-hidden="true"
        />

        {/* Ícone */}
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 relative z-10" />

        {/* Tooltip flutuante no desktop */}
        <span className="hidden md:block absolute right-full mr-3.5 px-3 py-1.5 rounded-xl bg-primary text-white text-xs font-semibold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-white/10">
          Falar no WhatsApp
        </span>
      </a>
    </aside>
  );
}
