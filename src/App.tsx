import { About } from "./components/About";
import { Buyers } from "./components/Buyers";
import { Capabilities } from "./components/Capabilities";
import { Compliance } from "./components/Compliance";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { KeywordMarquee } from "./components/Marquee";
import { Process } from "./components/Process";
import { Products } from "./components/Products";
import { Services } from "./components/Services";
import { MARQUEE_ITEMS } from "./data";

export default function App() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:text-bone"
      >
        Skip to content
      </a>

      <Header />

      <main>
        <Hero />
        <KeywordMarquee items={MARQUEE_ITEMS} />
        <About />
        <Products />
        <Services />
        <Capabilities />
        <Process />
        <Compliance />
        <Buyers />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
