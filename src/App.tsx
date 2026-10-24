import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Objetivo from "./components/Objetivo";
import Especialidades from "./components/Especialidades";
import Formacao from "./components/Formacao";
import Atendimento from "./components/Atendimento";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import WhatsAppFlutuante from "./components/WhatsAppFlutuante";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Objetivo />
        <Especialidades />
        <Formacao />
        <Atendimento />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFlutuante />
    </>
  );
}
