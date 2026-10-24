import { clinic } from "../data/clinic";
import { Reveal } from "./Reveal";

export default function Especialidades() {
  return (
    <section id="especialidades" className="py-14 md:py-12">
      <div className="container-site">
        <Reveal>
          <h2 className="titulo-secao">Especialidades</h2>
        </Reveal>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clinic.especialidades.map((e, n) => (
            <Reveal
              as="li"
              key={e}
              delay={(n % 3) * 110}
              className="flex items-center gap-4 rounded-2xl border border-areia bg-white/50 px-6 py-5 text-lg"
            >
              <span className="h-3 w-3 shrink-0 rounded-full bg-terra" aria-hidden="true" />
              {e}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
