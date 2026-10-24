import { clinic } from "../data/clinic";
import { IconFilme, IconLivro, IconViagem } from "./Icons";

const icones = { Livros: IconLivro, Filmes: IconFilme, Viagens: IconViagem } as const;

export default function Sobre() {
  return (
    <section id="sobre" className="relative overflow-hidden py-16 md:py-24">
      {/* monograma como marca d'água */}
      <img
        src={clinic.fotos.monograma}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-1/2 hidden w-80 -translate-y-1/2 opacity-[0.09] md:block lg:right-10 lg:w-96"
        loading="lazy"
      />

      <div className="container-site relative grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16">
        <div>
          <h2 className="titulo-secao">Quem sou eu</h2>
          <span className="mt-5 block h-0.5 w-16 bg-terra" aria-hidden="true" />
        </div>

        <div>
          <p className="text-xl leading-relaxed md:text-2xl md:leading-relaxed">{clinic.quemSouEu}</p>

          <p className="mt-9 text-sm font-medium uppercase tracking-[0.2em] text-terraescura">
            Sou apaixonada por
          </p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {clinic.interesses.map((i) => {
              const Icone = icones[i as keyof typeof icones];
              return (
                <li
                  key={i}
                  className="flex items-center gap-3 rounded-full border border-areia bg-white/60 px-5 py-3 text-lg"
                >
                  <Icone className="h-6 w-6 text-terra" />
                  {i}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
