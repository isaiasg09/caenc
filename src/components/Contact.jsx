import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Instagram,
  Facebook,
  Globe,
  Linkedin,
  Youtube,
  Music2,
  Music,
  Link as LinkIcon,
  MessageCircle,
} from "lucide-react";
import rawData, {
  BRAND_NAME,
  LOCATION,
  MAPS_DIRECTIONS_URL,
  CLEAN_PHONE_DIGITS,
  PARSED_HORARIOS,
  getStatusFuncionamento,
} from "../data";
import { useMagnetic } from "../hooks/useMagnetic";

// Mapa de ícones para redes sociais conforme requisitos da Fase 4
const SOCIAL_ICONS = {
  instagram: { icon: Instagram, label: "Instagram" },
  facebook: { icon: Facebook, label: "Facebook" },
  site_oficial: { icon: Globe, label: "Site Oficial" },
  linkedin: { icon: Linkedin, label: "LinkedIn" },
  youtube: { icon: Youtube, label: "YouTube" },
  tiktok: { icon: Music2, label: "TikTok" },
  spotify: { icon: Music, label: "Spotify" },
};

export default function Contact() {
  const status = getStatusFuncionamento();
  const magneticCtaRef = useMagnetic(0.2);

  // Redes sociais não-nulas e não-vazias
  const activeSocials = Object.entries(rawData.redes_sociais || {}).filter(
    ([, url]) => url && typeof url === "string" && url.trim() !== ""
  );

  return (
    <section id="contato" className="py-20 lg:py-28 bg-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-secondary mb-2">
            Venha Nos Conhecer
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Onde Estamos & Horários de Forno
          </h2>
          <p className="text-base sm:text-lg text-textMuted">
            Localizado no coração da Pompeia, um ambiente aconchegante para você sentar e apreciar ou retirar encomendas.
          </p>
        </div>

        {/* Grid de Contato & Horários */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Card de Informações e Como Chegar */}
          <div className="lg:col-span-6 bg-surface p-8 sm:p-10 rounded-[2.5rem] border border-themeBorder shadow-warm flex flex-col justify-between h-full">
            <div>
              <h3 className="font-display text-2xl font-bold text-primary mb-6">
                Informações do {BRAND_NAME}
              </h3>

              {/* Endereço */}
              <div className="flex items-start gap-4 mb-6">
                <span className="w-12 h-12 rounded-2xl bg-canvas border border-themeBorder flex items-center justify-center text-secondary shrink-0">
                  <MapPin className="w-6 h-6" />
                </span>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-textMuted mb-1">
                    Endereço Completo
                  </h4>
                  <p className="text-base sm:text-lg font-medium text-textMain leading-relaxed">
                    {rawData.endereco}
                  </p>
                  <a
                    href={MAPS_DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 text-sm font-bold text-secondary hover:text-accent transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Como Chegar (Abrir no Google Maps)</span>
                  </a>
                </div>
              </div>

              {/* Telefone */}
              <div className="flex items-start gap-4 mb-8">
                <span className="w-12 h-12 rounded-2xl bg-canvas border border-themeBorder flex items-center justify-center text-secondary shrink-0">
                  <Phone className="w-6 h-6" />
                </span>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-textMuted mb-1">
                    Telefone & Atendimento
                  </h4>
                  <a
                    href={`tel:${CLEAN_PHONE_DIGITS}`}
                    className="text-base sm:text-lg font-bold text-textMain hover:text-secondary transition-colors"
                  >
                    {rawData.telefone}
                  </a>
                  <p className="text-xs text-textMuted mt-0.5">
                    Ligação ou mensagem direta pelo WhatsApp
                  </p>
                </div>
              </div>

              {/* Redes Sociais */}
              {activeSocials.length > 0 && (
                <div className="pt-6 border-t border-themeBorder/60">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-textMuted mb-3">
                    Redes Sociais Oficiais
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {activeSocials.map(([key, url]) => {
                      const entry = SOCIAL_ICONS[key] || { icon: LinkIcon, label: key };
                      const Icon = entry.icon;
                      return (
                        <a
                          key={key}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-canvas hover:bg-surface-hover border border-themeBorder text-textMain hover:text-secondary text-xs sm:text-sm font-semibold transition-colors shadow-sm"
                          aria-label={`Visitar nosso ${entry.label} (Abre em nova aba)`}
                        >
                          <Icon className="w-4 h-4 text-secondary" />
                          <span>{entry.label}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* CTA WhatsApp do Card */}
            <div className="mt-8 pt-6 border-t border-themeBorder/60">
              <div ref={magneticCtaRef} className="w-full">
                <a
                  href={rawData.link_whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-accent hover:bg-accent-hover text-white font-bold text-sm shadow-md transition-all active:scale-95"
                  aria-label="Falar com o Café no WhatsApp (Abre em nova aba)"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Falar com o Café no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Tabela de Horários */}
          <div className="lg:col-span-6 bg-surface p-8 sm:p-10 rounded-[2.5rem] border border-themeBorder shadow-warm">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-themeBorder/60">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-canvas border border-themeBorder flex items-center justify-center text-secondary">
                  <Clock className="w-5 h-5" />
                </span>
                <h3 className="font-display text-2xl font-bold text-primary">
                  Horário de Funcionamento
                </h3>
              </div>

              {/* Status em Tempo Real */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-canvas border border-themeBorder text-xs font-bold">
                <span
                  className={`w-2 h-2 rounded-full ${
                    status.aberto ? "bg-emerald-600 animate-pulse" : "bg-amber-700"
                  }`}
                  aria-hidden="true"
                />
                <span className={status.aberto ? "text-emerald-800" : "text-amber-900"}>
                  {status.mensagem}
                </span>
              </div>
            </div>

            {/* Lista dos Dias */}
            <div className="space-y-3">
              {PARSED_HORARIOS.map((item, index) => {
                const isHoje = status.diaHojeIndex === index;
                return (
                  <div
                    key={item.dia}
                    className={`flex items-center justify-between p-3.5 rounded-2xl transition-all ${
                      isHoje
                        ? "bg-primary text-white font-semibold shadow-md"
                        : "bg-canvas text-textMain border border-themeBorder/50"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm capitalize">{item.dia}</span>
                      {isHoje && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-secondary text-white">
                          Hoje
                        </span>
                      )}
                    </div>
                    <span
                      className={`text-sm font-mono ${
                        item.isFechado
                          ? isHoje
                            ? "text-white/60 font-normal italic"
                            : "text-textMuted font-normal italic"
                          : isHoje
                          ? "text-white"
                          : "text-textMain font-medium"
                      }`}
                    >
                      {item.horario}
                    </span>
                  </div>
                );
              })}
            </div>

            <p className="text-xs text-textMuted mt-6 text-center italic">
              Horários apurados em horário oficial de Brasília (América/São Paulo).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
