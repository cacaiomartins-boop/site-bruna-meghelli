import { clinic } from "../data/clinic";
import { Parallax, Reveal } from "./Reveal";

export default function Objetivo() {
  return (
    <section aria-labelledby="objetivo" className="relative isolate overflow-hidden bg-marrom">
      {/* a foto de fundo se move mais devagar que a página */}
      <Parallax velocidade={0.12} className="absolute inset-x-0 -top-[25%] -z-10 h-[150%]">
        <img
          src={clinic.fotos.lendo}
          alt=""
          className="h-full w-full object-cover object-[60%_40%] opacity-30"
          loading="lazy"
        />
      </Parallax>
      <div className="container-site py-16 md:py-24">
        <Reveal className="max-w-2xl text-creme">
          <h2 id="objetivo" className="text-2xl font-semibold uppercase tracking-wide md:text-3xl">
            Objetivo
          </h2>
          <p className="mt-6 text-xl font-normal leading-relaxed md:text-2xl">{clinic.objetivo}</p>
        </Reveal>
      </div>
    </section>
  );
}
