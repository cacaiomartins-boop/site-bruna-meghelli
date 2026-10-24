import { clinic } from "../data/clinic";

export default function Especialidades() {
  return (
    <section id="especialidades" className="py-16 md:py-24">
      <div className="container-site">
        <h2 className="titulo-secao">Especialidades</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clinic.especialidades.map((e) => (
            <li
              key={e}
              className="flex items-center gap-4 rounded-2xl border border-areia bg-white/50 px-6 py-5 text-lg"
            >
              <span className="h-3 w-3 shrink-0 rounded-full bg-terra" aria-hidden="true" />
              {e}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
