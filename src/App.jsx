import SEO from "./components/SEO";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pain from "./components/Pain";
import Gallery from "./components/Gallery";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import FinalCTA from "./components/FinalCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <div className="relative min-h-screen bg-canvas text-textMain selection:bg-secondary selection:text-white overflow-x-clip">
      {/* Invisível SEO & Schema JSON-LD */}
      <SEO />

      {/* Navegação Superior */}
      <Navbar />

      {/* Conteúdo Principal Semântico */}
      <main id="main-content">
        <Hero />
        <Pain />
        <Gallery />
        <Menu />
        <Reviews />
        <FinalCTA />
        <Contact />
      </main>

      {/* Rodapé e CTA Flutuante */}
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
