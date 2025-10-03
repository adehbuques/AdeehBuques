import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { HowItWorks } from "./components/HowItWorks";
import { Deadlines } from "./components/Deadlines";
import { ProductCatalog } from "./components/ProductCatalog";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section id="inicio">
        <Hero />
      </section>
      <section id="sobre">
        <About />
      </section>
      <section id="galeria">
        <Gallery />
      </section>
      <section id="como-funciona">
        <HowItWorks />
      </section>
      <section id="prazos">
        <Deadlines />
      </section>
      <section id="produtos">
        <ProductCatalog />
      </section>
      <section id="contato">
        <Contact />
      </section>
    </div>
  );
}
