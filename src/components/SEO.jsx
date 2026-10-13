import { useEffect } from "react";
import rawData, { BRAND_NAME, NICHE, LOCATION } from "../data";

const DAY_MAP = {
  "segunda-feira": "Monday",
  "terça-feira": "Tuesday",
  "quarta-feira": "Wednesday",
  "quinta-feira": "Thursday",
  "sexta-feira": "Friday",
  "sábado": "Saturday",
  "domingo": "Sunday",
};

export default function SEO() {
  useEffect(() => {
    // Definir título canônico e dinâmico
    document.title = `${NICHE} na ${LOCATION.bairro}, ${LOCATION.cidade} | ${BRAND_NAME}`;

    // Construção segura e estrita de OpeningHoursSpecification
    const openingHoursSpecs = [];
    (rawData.horarios || []).forEach((horarioStr) => {
      const [diaRaw, ...resto] = horarioStr.split(":");
      const diaClean = diaRaw.trim().toLowerCase();
      const horarioClean = resto.join(":").trim();

      if (horarioClean.toLowerCase().includes("fechado")) {
        return; // Omitir dias fechados conforme requisito
      }

      const dayOfWeek = DAY_MAP[diaClean];
      if (!dayOfWeek) return;

      // Extrai horários (ex: "10:00 – 19:00" ou "08:00 – 19:00")
      const times = horarioClean.split(/[-–—]/).map((t) => t.trim());
      if (times.length === 2) {
        openingHoursSpecs.push({
          "@type": "OpeningHoursSpecification",
          dayOfWeek,
          opens: times[0],
          closes: times[1],
        });
      }
    });

    // Redes sociais não-nulas
    const sameAs = [];
    if (rawData.redes_sociais) {
      Object.values(rawData.redes_sociais).forEach((link) => {
        if (link && typeof link === "string" && link.trim() !== "") {
          sameAs.push(link);
        }
      });
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "CafeOrCoffeeShop",
      name: BRAND_NAME,
      image: rawData.fotos_local_maps?.[0] || undefined,
      telephone: rawData.telefone,
      url: typeof window !== "undefined" ? window.location.origin : undefined,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${LOCATION.logradouro} - ${LOCATION.bairro}`,
        addressLocality: LOCATION.cidade,
        addressRegion: LOCATION.uf,
        postalCode: LOCATION.cep,
        addressCountry: "BR",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: rawData.nota_geral,
        bestRating: 5,
        reviewCount: rawData.avaliacoes_destaque?.length || 5,
      },
      openingHoursSpecification: openingHoursSpecs,
      sameAs: sameAs.length > 0 ? sameAs : undefined,
      hasMenu: rawData.link_cardapio_encomendas || undefined,
    };

    const scriptId = "local-business-schema-jsonld";
    let scriptTag = document.getElementById(scriptId);
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = scriptId;
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);

    return () => {
      // Cleanup se desmontado
      const tag = document.getElementById(scriptId);
      if (tag) tag.remove();
    };
  }, []);

  return null;
}
