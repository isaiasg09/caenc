// src/data.js - Única fonte de verdade para o Cá entre nós Café

export const rawData = {
  nome: "Cá entre nós Café",
  nome_completo_maps: "Cá entre nós Café",
  endereco: "R. Aurélia, 950 - Pompeia, São Paulo - SP, 05046-000, Brasil",
  telefone: "(11) 98737-9914",
  link_whatsapp: "https://wa.me/5511987379914",
  link_cardapio_encomendas: "https://drive.google.com/file/d/1h4-jACXlrBCH9cr9csM00my7_hiynkoW/view",
  redes_sociais: {
    instagram: "https://www.instagram.com/ca.entre.nos.cafe/",
  },
  horarios: [
    "segunda-feira: 10:00 – 19:00",
    "terça-feira: 08:00 – 19:00",
    "quarta-feira: 08:00 – 19:00",
    "quinta-feira: 08:00 – 19:00",
    "sexta-feira: 08:00 – 19:00",
    "sábado: 09:00 – 16:00",
    "domingo: Fechado"
  ],
  nota_geral: 4.8,
  avaliacoes_destaque: [
    {
      autor: "Juliana Gouveia Miguel",
      nota: 5,
      texto: "A comida é extremamente cheirosa traz uma sensação terapêutica e afetiva.  Amei a vibe mais rústica ambiente agradável.  Comida é muito diferente dos cafés q conhecia tem um sabor surpreendente."
    },
    {
      autor: "Thiago Carneiro",
      nota: 3,
      texto: "Faltou café no café. Muito fraco, praticamente sem sabor além de vir muito quente. Precisamos esperar até uma temperatura que não queimasse a boca. Para um lugar de cafés especiais deixou a desejar bastante."
    },
    {
      autor: "Lettícia Cardoso",
      nota: 5,
      texto: "Excelente, surpreendeu bastante! Desde os salgados, como a galette de abobrinha com queijo de cabra e a torta de cebola caramelizada, quanto o brownie de chocolate… o bairro estava precisando de um café de qualidade"
    },
    {
      autor: "graziela rosa",
      nota: 5,
      texto: "Que lugar gostoso para tomar um café na manhã de sábado. Nota 10 para o croissant, já provei em muitos lugares, e esse do Cá Entre Nós é maravilhoso. Vale a pena pedir. O queijo quente e o pão de queijo sao muito gostoso, vem na medida certa.  Único ponto a considerar é que não tem ovos mexidos e proteínas, definiria como vegetariano, masss é tudo muitooo gostoso."
    },
    {
      autor: "Leonardo S",
      nota: 5,
      texto: "Excelentes, valeu muito a pena. A torta de maçã é muito saborosa. Sempre que venho na Lapa passo para um café. Parabéns!"
    }
  ],
  fotos_local_maps: [
    "https://places.googleapis.com/v1/places/ChIJWydMUNf5zpQRmkOA69AXL28/photos/Aa-ngMZriZC_icDJiHfkCsG6oiH0qbNJAH2QAArYzaFHp39RjJZpXNQBKrtsAB4tS65dXaWyO457NMBnif1EjbTr_QN_msQ8VpnVx88RbqyvHfvTvXvvXvOhwwJ3z5-ZjJyXgysppIRa3Bjur4L7wBu1itH2DtLp8dTMmzjJUX9AlEf81h1E0R_vQnFZm66xW2lUsxIVf0SILjBcOBHZpi6a_yc5CNT_TVRu9bn6ehrXL2k-OIOCGbzjyIfCFvtHP14vBOLAS12VVyXJ204cqGNCfSJGUkJXzZjpyhmgNJb9vdq_bl-yaotEDR3I4keadLWTgYR8EQm6IEqpIyuh0VDTlCRKOfjSz3KwM8ESsSUsmMcAZckfz5YdOlR23UChEfHR3oAVbFGYmQ6uexaRHBSKm4rzE-I/media?maxHeightPx=1080&maxWidthPx=1080&key=AIzaSyBPxm1MZ9XPx9q5rxDvYm3QzxGmRPPT848",
    "https://places.googleapis.com/v1/places/ChIJWydMUNf5zpQRmkOA69AXL28/photos/Aa-ngMbT3kFhoy-MfFlkaXXsqDme1r3hmimhAYgd7neuFpz6nGDKU0CcgbgvvDLlVOqogHZuBpevDWu09dbhYaWdzxHTVqSROUvQWC0A6-eCNBBFaJNspqLG6eNvCNEOgBREoN_X9yXOimLPoVYIvu5vDPgrn8-P0mVyhPQXSzqRaDXBkWRMY9sj9XtO7rUaNbqR9ZW4--7KznjiovmRK6kW0BkOPfrupQSPJB5BL1BGSIgRWkQd4njIFL_WrxalejGOzJTxZo2fi_RbXJvLiuBz0yNn7uU5fy3iPhhgAzu_VlsXLEwwjaGXyB6xHw2Y9iy4nVe0gSJ8ymSMrCzDOZ6WZEtENaIZSGTVXha7AQVhDrnBcL9h0I19rlw-eO3UbPmyrr-oTNfP-yEowtI0sgdimNlwYQM/media?maxHeightPx=1080&maxWidthPx=1080&key=AIzaSyBPxm1MZ9XPx9q5rxDvYm3QzxGmRPPT848",
    "https://places.googleapis.com/v1/places/ChIJWydMUNf5zpQRmkOA69AXL28/photos/Aa-ngMaYxqzbgT-U3we5HQ1rvrh1sjNjVVpa74tkU_vLcSDCyhpKiPXHWCrYvUYJFuEF1RIgHIkdNax8O6qqQop0_prYmEKRvMEKbULoISgpmYIC6RWMSqut1FRYB0j-U6ogMMW9MZReHatiKz7awQgovEVX1XogcHOQheDNUVHfQzdpNGdz_SLOCJN5MCUrorgm0KqINHBryv86IIx3jDRSnJ2ifT1-NywJFPVS5cAm90j6y5cfKpoHmmE02bg5hCIC8mQdhVT5nLCF9qQt9LXmNgc2KE4fhiNFyssOk6azUD-HLHZFIXuAeXIIfLLBsqhNxWlfkU3T1tqgPn27quWNvoIr21v8bbva_kblE05HUg7eXH5rImn5y3e922kCi43O7NBF-G7svJWpLG_vbpYvDL8XlgfU/media?maxHeightPx=1080&maxWidthPx=1080&key=AIzaSyBPxm1MZ9XPx9q5rxDvYm3QzxGmRPPT848",
    "https://places.googleapis.com/v1/places/ChIJWydMUNf5zpQRmkOA69AXL28/photos/Aa-ngMapvJyL5zX1bFr2YX62pP48FzcU7qVALueSXCp7mXrl3yV2YgYjdCpj66DaKA8SoWIIGo0_ppaRWH1dpR4tzvmbzbqD2WZYXgvpIzUEevcLfzGIB5oRU-wfNAgLICF1tkgChF83lIfqZ4FiNMsICwwxIIuOfDgLJxCccbc8gd03m9B69-BeMDjQp3S9pTiLvSo9nEzabbTlKb0lGTyhtp9_rdiRmuovuH8E4Z2qJ1bbbli0HTUTbc0uhEYpI8KITHMr-EzhBYpL7E2CrZwxXsUODIxzbMueblx9wvTnQXQnJ5alWci7MCLpiKgFnlplLc07DRkWiuntnL8_G0POudvyWVyXmhkmoRSMi_Jto3xcQFkxonG-rw0JmFFn5bszEA9dW6DAsjOFNQpRqjAJxbXWRQs/media?maxHeightPx=1080&maxWidthPx=1080&key=AIzaSyBPxm1MZ9XPx9q5rxDvYm3QzxGmRPPT848",
    "https://places.googleapis.com/v1/places/ChIJWydMUNf5zpQRmkOA69AXL28/photos/Aa-ngMYLfkqh1ty2Bus1A_MN8rgkoxojXcoYVz2QI2AubfUg604WGtVcA6cehZ-tNnt_98uVXtgdu5Z71d_vAza5Ie_JaxW_FfYd2redkNre7pRsaX7xkxjhcNaqagr_UgrdKpAHu4wVUdAiS1xvxTgM3j8sQ3m0IN_r4F4c2_114DLt4ZaNHZ5a_JPc9Gq5CBiKZYruxoJENCBGeAY8_tQsZnhS0Yjd5MPFO7F1zk5GgFNFsKzce_Ju-InboHaLCq2bC1ZAqRBUEyk1Vnuzb2J4aoJVsloaTLHo8H5igj2qpVByu7FLqL47MlGA3i79Xaqlg2WjY0V0kq4LQ8FBBQtdPUe175KMLGrTGt3cykAq8suF2tuqVQIyxDMin8EeBA9QDlojRO4tNdLrnit5izZgYN1vQ11DRFQDuBG2M4ZeK0Xlrg/media?maxHeightPx=1080&maxWidthPx=1080&key=AIzaSyBPxm1MZ9XPx9q5rxDvYm3QzxGmRPPT848",
    "https://places.googleapis.com/v1/places/ChIJWydMUNf5zpQRmkOA69AXL28/photos/Aa-ngMY2XUSJZMqFWZABITm0zPmv-qLAe6l-0o-mv_DNl06K3mHAKDE6IV-eOrabu0NOVQoWO0n2f9UuHFL_9jmYb9JYFapQG2o1m0xjXZaclfkNW72ci0k3ZeLqpCBGOesUW1PrD1YPDpW90J3iZwkLNpFFoBHE5RtF0-9lbGqUwzGHz0HjzA1kf4gj2duJN6zHLpO3t3jQM_WM5E739osc42o96ev5XzSswxY6I6cXiyzrfFUJSOD179Ieu6aD-TvxTHBM7VBk-Xtyn1ugATpye2zLu5JEAtqZIcK1yNV_hOoFm4AltGuYI9ng2LUsBckD9FykulagQZb4UjKfxETE6kjaFBr8MT_9JC8Opfe0_yc-RDzfHlIplnrSGp-X3oaOgzOAruGGK2rJA23XoEOhDCxR_gRXj3CcoJc3M2X4e4gp/media?maxHeightPx=1080&maxWidthPx=1080&key=AIzaSyBPxm1MZ9XPx9q5rxDvYm3QzxGmRPPT848",
    "https://places.googleapis.com/v1/places/ChIJWydMUNf5zpQRmkOA69AXL28/photos/Aa-ngMYezLFMhwe-VikSXoa9T58ogHsEme9H6dlTmLTx-rFjx1ijxoA3SWulpZckPeiYysseS3TolrpGsZ6uc9dziJJo-eS5ypLQymGVySMQMUz78y5aeka6Pn3u_65_WGouC0EoOxFsT-j6GAkMm74r9ueDjJUsguLOuqCQIYIIEXIuJXPgCdS0xwAQR9Zu-9QMdfgjqv3l80rge1eJcMka1U72UAvYXfs-hKJjO1rtHU8UOxImiqjd56WOFLTwtrJz_lY7lEFT9APggSbLgebPEecCUUJiJzwomxl_pYGrEAN6ijdA5f29o4faw_0V7rfNkd3nj2URNao7SQq3h6z0tWsu7uXZPwiX-jOWFuu7Zi-SM1SSuBaWIv-ZjeHcEOSaQBSSB0cb5_6wecB--zI8MXzbK0UYfdYm2pHOMFsyFNGkxA/media?maxHeightPx=1080&maxWidthPx=1080&key=AIzaSyBPxm1MZ9XPx9q5rxDvYm3QzxGmRPPT848",
    "https://places.googleapis.com/v1/places/ChIJWydMUNf5zpQRmkOA69AXL28/photos/Aa-ngMavk-JGyfNU2D5HsPUfPB_YFqQEzPxehloGH-Y8fhBsYAql6ShC6PwkdioqlXUwjpLDL5QXqrrkaYOZD2Gz_k5e2whJBLt6TI-wiCIia46XinNYSXaavvt4k-LZcu_rdr81v-ksFC6-KvWjC8taEx3ET6JhCz4po4jnsROgehsI3khFk9FXTFDcmjcV8TqbuvwO2lrHvnDTJ6h2b1uKtK918xgPmQPAEXa2tpLOUns-nA318JUoQCWuBw72mdl7BymeHe7WPnA_rhVWeQ1vmpUl8Y0WOHER2HQlLrozzI9t5BrPlPfwKzndErvO4UaUWjuYVCkRlH3wc5_kpsqMRICu-LWY3nzkBVM-wtPH-DeZkcxAufLLRt4Yi-7pRbDKV_alkdUnfohXr5Wcw0gLbDrpfHE/media?maxHeightPx=1080&maxWidthPx=1080&key=AIzaSyBPxm1MZ9XPx9q5rxDvYm3QzxGmRPPT848",
    "https://places.googleapis.com/v1/places/ChIJWydMUNf5zpQRmkOA69AXL28/photos/Aa-ngMY-cOYBZFZLH3MSXcfUtdObtP5AqyDMnAXUxmklTXwiEq0eK93lUkPPQuOCEj4j1SrQrRVdSNvnqdT1G6B-eKKdG3RA31LYqYiwygQWApFy2eC5Ny8Z0D8DIp4ldJVz168IGauxfnIi7kOddcf0a9Ghf_RWxVn1hAlBfAmhTN108KXn1myc-VXSOygZHWJ3Fm_s8vgInd_peMFVOJIWHUHErwYfQ9O9Do0ADpHQDjK66QX69YFX308KtGUzEPH-c_XZ_MvOMerZfFWIhw2p2LozbZmI0mIqprAKhuSyxr5drXHTPO5RkAXa40uMnBYNODf1Qf1OQzAJ8TClsZz-KX6qRKSE9qeuExvVLhrxP_Ob0XR-GCuy56JTcmZ_RPA4bNGw4zYcgXBz-P3RHlBGs1aG7Pnpk5A/media?maxHeightPx=1080&maxWidthPx=1080&key=AIzaSyBPxm1MZ9XPx9q5rxDvYm3QzxGmRPPT848",
    "https://places.googleapis.com/v1/places/ChIJWydMUNf5zpQRmkOA69AXL28/photos/Aa-ngMZwgb2GD9j_2HTberClxkD4ecGzBUsrxF-AUNCO_JFTNewN9g5jW9OGRhLy2x2x9byaR2E4wLTByoP5oWQhZ3gJMi-gZNfCUYtWj9vy5bA4xImui0p788dPYVcxlwDBQkSGIoSyy6YObM-Bh0qW_yuP1cVW5vDUBngOKWnht3pZ351E9SndmFCkCcedxQmGa2lBV-8FkDXe9tiMbaaLimab4_qivFoGh7KbgYJj38n1XhXaDgSHxfMG8xK-2IWFSJhh42KHWEvK9fR_lghTr9OVZD8KgaV7OqrYZZyN5bC-qVorUN7hueAcYkCGbclNB3lGJomB7S3wJ4ZUcUMafaHceoBtO2svbyCSZ85kJpUCtsfJ18RHS3tYEvvqW6ajoAPjXdRERbHv_kyhn-YT7sHvmA/media?maxHeightPx=1080&maxWidthPx=1080&key=AIzaSyBPxm1MZ9XPx9q5rxDvYm3QzxGmRPPT848"
  ],
  imagens_identidade_visual: [
    "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3768172252656288009",
    "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3686921593633610065",
    "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3365205011330920561"
  ],
  cardapio: {
    salgados: {
      quiches: {
        especificacoes: "20 cm diâmetro | cerca de 1kg",
        itens: [
          {
            sabor: "Bacalhau português",
            preco: "R$ 255,00"
          },
          {
            sabor: "Tomate confitado",
            preco: "R$ 140,00"
          },
          {
            sabor: "Abobrinha com meia cura",
            preco: "R$ 140,00"
          },
          {
            sabor: "Cebola caramelizada",
            preco: "R$ 140,00"
          },
          {
            sabor: "Gorgonzola",
            preco: "R$ 140,00"
          },
          {
            sabor: "Shimeji",
            preco: "R$ 140,00"
          }
        ]
      },
      galettes: {
        especificacoes: "25 cm diâmetro",
        itens: [
          {
            sabor: "Queijo de Cabra - com Abobrinha, boursin e amêndoas laminadas",
            peso: "cerca de 1,500kg",
            preco: "R$ 200,00"
          },
          {
            sabor: "Pera, gorgonzola, alecrim e amêndoas laminadas",
            peso: "cerca de 1kg",
            preco: "R$ 150,00"
          }
        ]
      }
    },
    sobremesas: [
      {
        nome: "Brownie com pedaços de chocolate branco",
        porcao: "12 pedaços",
        peso: "cerca de 1kg",
        preco: "R$ 190,00"
      },
      {
        nome: "Cheesecake basca com cumaru e raspas de limão",
        tamanho: "20 cm diâmetro",
        peso: "cerca de 1,400kg",
        preco: "R$ 200,00"
      },
      {
        nome: "Banoffee",
        descricao: "bananas frescas, doce de leite, ganache de chocolate meio amargo, chantilly com canela",
        tamanho: "17 cm diâmetro",
        peso: "cerca de 1kg",
        preco: "R$ 140,00"
      },
      {
        nome: "Torta de ameixa fresca",
        descricao: "com creme de amêndoas e amêndoas laminadas",
        tamanho: "20 cm diâmetro",
        peso: "cerca de 700g",
        preco: "R$ 160,00"
      }
    ],
    bolos: [
      {
        nome: "Maçã",
        descricao: "com nozes, especiarias e caramelo salgado",
        tamanho: "23 cm diâmetro",
        peso: "cerca de 1kg",
        preco: "R$ 200,00"
      },
      {
        nome: "Milho",
        descricao: "com queijo meia cura",
        porcao: "12 pedaços",
        peso: "cerca de 1,200kg",
        preco: "R$ 140,00"
      },
      {
        nome: "Farinha de Amêndoas",
        descricao: "com limão e chocolate branco",
        tamanho: "23 cm diâmetro",
        peso: "cerca de 950g",
        preco: "R$ 200,00"
      },
      {
        nome: "Chocolatudo",
        descricao: "chocolate 70%, raspas de laranja e melado de cana",
        tamanho: "23 cm diâmetro",
        peso: "cerca de 1,100kg",
        preco: "R$ 200,00"
      }
    ]
  }
};

// Dedução e blindagem de dados
export const BRAND_NAME = (() => {
  const raw = rawData.nome || "Cá entre nós Café";
  const firstSegment = raw.split(/[|\-]/)[0].trim();
  return firstSegment || raw;
})();

export const NICHE = "Cafeteria Artesanal e Confeitaria de Forno";

export const NOTA_GERAL_FORMATADA = (() => {
  const nota = Number(rawData.nota_geral);
  if (isNaN(nota)) return "5,0";
  return nota.toFixed(1).replace(".", ",");
})();

// Extração programática e segura de localização a partir do endereço
export const LOCATION = (() => {
  const endereco = rawData.endereco || "";
  // "R. Aurélia, 950 - Pompeia, São Paulo - SP, 05046-000, Brasil"
  const partes = endereco.split("-").map(p => p.trim());
  const logradouro = partes[0] || "R. Aurélia, 950";
  let bairro = "Pompeia";
  let cidade = "São Paulo";
  let uf = "SP";
  let cep = "05046-000";

  if (partes[1]) {
    const sub = partes[1].split(",").map(s => s.trim());
    if (sub[0]) bairro = sub[0];
    if (sub[1]) cidade = sub[1];
  }

  if (partes[2]) {
    const sub = partes[2].split(",").map(s => s.trim());
    if (sub[0]) uf = sub[0];
    if (sub[1]) cep = sub[1];
  }

  return {
    logradouro,
    bairro,
    cidade,
    uf,
    cep,
    pais: "Brasil",
    completo: endereco,
    bairroCidade: `${bairro}, ${cidade}`,
    displayCurto: `${bairro}, ${cidade} - ${uf}`
  };
})();

export const MAPS_DIRECTIONS_URL = (() => {
  const query = rawData.nome_completo_maps || `${rawData.nome} ${rawData.endereco}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
})();

export const CLEAN_PHONE_DIGITS = (rawData.telefone || "").replace(/\D/g, "");

// Horários normalizados com dia e intervalo
export const PARSED_HORARIOS = (rawData.horarios || []).map(item => {
  const [diaRaw, ...resto] = item.split(":");
  const dia = diaRaw.trim();
  const horario = resto.join(":").trim();
  const isFechado = horario.toLowerCase().includes("fechado");
  return { dia, horario, isFechado, raw: item };
});

// Verificação de funcionamento em tempo real (Fuso América/São Paulo)
export function getStatusFuncionamento() {
  try {
    const agoraSP = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));
    const diaSemana = agoraSP.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
    const hora = agoraSP.getHours();
    const minutos = agoraSP.getMinutes();
    const tempoAtual = hora * 60 + minutos;

    // domingo: Fechado
    if (diaSemana === 0) {
      return { aberto: false, mensagem: "Fechado agora (Abre segunda às 10h)", diaHojeIndex: 6 };
    }

    // sábado: 09:00 - 16:00
    if (diaSemana === 6) {
      const abre = 9 * 60;
      const fecha = 16 * 60;
      const aberto = tempoAtual >= abre && tempoAtual < fecha;
      return {
        aberto,
        mensagem: aberto ? "Aberto agora até 16:00" : "Fechado agora",
        diaHojeIndex: 5
      };
    }

    // segunda: 10:00 - 19:00
    if (diaSemana === 1) {
      const abre = 10 * 60;
      const fecha = 19 * 60;
      const aberto = tempoAtual >= abre && tempoAtual < fecha;
      return {
        aberto,
        mensagem: aberto ? "Aberto agora até 19:00" : "Fechado agora",
        diaHojeIndex: 0
      };
    }

    // terça a sexta: 08:00 - 19:00 (diaSemana 2, 3, 4, 5 -> index no array = diaSemana - 1)
    const abre = 8 * 60;
    const fecha = 19 * 60;
    const aberto = tempoAtual >= abre && tempoAtual < fecha;
    return {
      aberto,
      mensagem: aberto ? "Aberto agora até 19:00" : "Fechado agora",
      diaHojeIndex: diaSemana - 1
    };
  } catch {
    return { aberto: true, mensagem: "Consulte horários", diaHojeIndex: 0 };
  }
}

export default rawData;
