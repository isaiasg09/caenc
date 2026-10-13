# DESIGN BRIEF | CÁ ENTRE NÓS CAFÉ

## 1. Arquétipo Selecionado e Justificativa
* **Arquétipo Escolhido:** **Arquétipo 4 — Gastronomia & Orgânico**
* **Justificativa:** O *Cá entre nós Café* é um refúgio gastronômico artesanal situado na Pompeia (São Paulo). As avaliações destacam expressamente: *"comida extremamente cheirosa traz uma sensação terapêutica e afetiva"*, *"vibe mais rústica ambiente agradável"*, *"galette de abobrinha com queijo de cabra"*, *"croissant maravilhoso"*, *"torta de maçã saborosa"*. A regra de desempate determina que cafés, padarias, comida afetiva e convivência adotem com rigor o Arquétipo 4.
* **3 Adjetivos de Marca Extraídos das Avaliações:**
  1. **Afetivo** (sensação acolhedora e terapêutica citada espontaneamente pelos clientes).
  2. **Artesanal & Rústico** (preparo autoral, galettes folhadas, quiches especiais e atmosfera de desaceleração).
  3. **Surpreendente** (sabores autênticos que transformam o café do bairro em uma experiência marcante).

---

## 2. Proporção Áurea (φ ≈ 1,618) no Sistema Visual
* **Escala Tipográfica Modular (Ratio 1,618):**
  * Microcopy / Eyebrows: `0.75rem` (12px)
  * Body Small: `0.875rem` (14px)
  * Body Base: `1rem` (16px)
  * H5 / Destaque: `1.25rem` (20px)
  * H4 / Subtítulos: `1.618rem` (25.88px ≈ 26px)
  * H3 / Títulos Card: `2.618rem` (41.88px ≈ 42px)
  * H2 / Títulos de Seção: `4.236rem` (67.77px ≈ 68px)
  * H1 / Display Hero: `6.854rem` (109.66px ≈ 110px no desktop; responsivo proporcional no mobile)
* **Divisões de Layout:**
  * Seções assimétricas baseadas na proporção 61,8% / 38,2% (ex.: composição do Hero com foto dominante em 61,8% e sobreposição em 38,2%).
* **Escala de Espaçamento φ:**
  * `space-phi-1`: `4px`
  * `space-phi-2`: `8px`
  * `space-phi-3`: `13px`
  * `space-phi-4`: `21px`
  * `space-phi-5`: `34px`
  * `space-phi-6`: `55px`
  * `space-phi-7`: `89px`
  * `space-phi-8`: `144px`

---

## 3. Tokens de Cor e Papéis Semânticos
Inferidos dos tons de torra de café, massas douradas, cerâmica rústica e vegetação sutil:
* **`--color-primary` (Espresso Roast):** `#1F140E` (Base profunda, contraste e títulos de alto prestígio)
* **`--color-primary-light` (Warm Coffee Bean):** `#2C1E16`
* **`--color-secondary` (Terracotta Clay):** `#C86237` (Acentos orgânicos, filetes, selos editoriais)
* **`--color-accent` (Caramel Honey / CTA Unificado):** `#D96528` (Cor única para TODOS os CTAs de conversão primários, com contraste WCAG AA superior a 4.5:1)
* **`--color-accent-hover`:** `#B8531D`
* **`--color-bg-canvas` (Warm Linen / Creme Artesanal):** `#FAF6F0` (Fundo primário suave, aconchegante)
* **`--color-surface` (Pale Sand):** `#F2ECE1` (Superfície de cards, painéis e bento grids)
* **`--color-surface-hover`:** `#E8DFD1`
* **`--color-text-main` (Dark Roast):** `#1A120C`
* **`--color-text-muted` (Warm Ash / Canela Suave):** `#6E5D52`
* **`--color-border`:** `#E2D7C8`

---

## 4. Tipografia de Alta Agência
* **Display / Headings:** `Fraunces` (Google Fonts, com variações de peso 400-800, serifas expressivas e orgânicas, transmitindo requinte artesanal e calor afetivo).
* **Body / Interface:** `Plus Jakarta Sans` (Google Fonts, pesos 400, 500, 600, 700, microtipografia limpa, geométrica, com alta legibilidade em telas pequenas e tabelas editoriais).

---

## 5. Texturas, Grãos e Formas Orgânicas
* Bordas com curvaturas assimétricas (`rounded-[2rem]`, cantos elípticos alternados).
* Padrões em SVG inline para filetes pontilhados e traços orgânicos.
* Sombras quentes multicamadas (`box-shadow: 0 20px 40px -15px rgba(31, 20, 14, 0.08)`).
* Grão sutil em CSS com gradientes radiais quentes para sensação tátil e artesanal.

---

## 6. Estilo de Movimento e Microinterações
* **Biblioteca:** `framer-motion`.
* **Variantes:** Fade-up suave (`y: 28 -> 0`, `opacity: 0 -> 1`), blur-in em elementos visuais, e `staggerChildren: 0.1` em grids.
* **Hero Entrance:** Máscaras orquestradas para as linhas do H1 e parallax suave via `useScroll` e `useTransform`.
* **Interatividade:** Hook `useMagnetic` nos botões de CTA principais e fotos em destaque (desativado em telas touch via `window.matchMedia('(hover: none)')`).
* **Acessibilidade:** Suporte completo e estrito a `prefers-reduced-motion`.
