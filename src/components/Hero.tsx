import { clinic } from "../data/clinic";
import { IconCalendario, IconWhatsApp } from "./Icons";
import { Parallax } from "./Reveal";

export default function Hero() {
  return (
    <section id="topo" className="relative flex items-center overflow-hidden md:min-h-[calc(100svh-4.5rem)]">
      {/* manchas decorativas, como no cartão */}
      <Parallax velocidade={0.18} className="absolute -right-24 -top-24" >
        <div className="blob h-72 w-72 bg-terra/90 md:h-96 md:w-96" aria-hidden="true" />
      </Parallax>
      <Parallax velocidade={-0.12} className="absolute -left-28 bottom-10">
        <div className="blob-2 h-64 w-64 bg-areia" aria-hidden="true" />
      </Parallax>

      <div className="container-site relative grid items-center gap-6 py-8 md:grid-cols-2 md:gap-14 md:py-8">
        <div className="animar order-2 text-center md:order-1 md:text-left">
          <img
            src={clinic.fotos.monograma}
            alt=""
            className="mx-auto mb-3 h-14 w-auto md:mx-0 md:h-20 lg:h-24"
            width="126"
            height="112"
          />
          <h1 className="font-display text-4xl font-normal uppercase tracking-wide text-terra sm:text-5xl xl:text-[3.25rem]">
            {clinic.nome}
          </h1>
          <p className="mt-2 text-sm font-normal uppercase tracking-[0.2em] text-marrom md:text-base">
            {clinic.titulo}
          </p>
          <p className="mx-auto mt-5 max-w-md text-xl font-normal italic leading-relaxed text-marromclaro md:mx-0 md:mt-6 md:text-2xl">
            {clinic.frase}
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a href={clinic.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primario w-full sm:w-auto">
              <IconWhatsApp className="h-4 w-4" /> Agendar
            </a>
            <a href={clinic.doctoralia} target="_blank" rel="noopener noreferrer" className="btn btn-contorno w-full sm:w-auto">
              <IconCalendario className="h-4 w-4" /> Agenda online
            </a>
          </div>
        </div>

        <div className="animar-2 order-1 md:order-2 md:justify-self-center">
          {/* altura limitada pela tela: a foto nunca estoura a abertura do site */}
          <div className="blob relative mx-auto aspect-[4/5] h-[min(18rem,33svh)] overflow-hidden shadow-xl shadow-terra/20 ring-4 ring-areia/80 md:h-[min(36rem,calc(100svh-9rem))]">
            <img
              src={clinic.fotos.hero}
              alt="Bruna Meghelli, psicóloga e psicanalista, sentada em frente a uma estante de livros"
              className="h-full w-full object-cover object-[50%_20%]"
              width="1200"
              height="1600"
              {...{ fetchpriority: "high" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
