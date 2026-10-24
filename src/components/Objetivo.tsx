import { clinic } from "../data/clinic";

export default function Objetivo() {
  return (
    <section aria-labelledby="objetivo" className="relative isolate overflow-hidden bg-marrom">
      <img
        src={clinic.fotos.lendo}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[60%_40%] opacity-30"
        loading="lazy"
      />
      <div className="container-site py-16 md:py-24">
        <div className="max-w-2xl text-creme">
          <h2 id="objetivo" className="text-2xl font-semibold uppercase tracking-wide md:text-3xl">
            Objetivo
          </h2>
          <p className="mt-6 text-xl font-normal leading-relaxed md:text-2xl">{clinic.objetivo}</p>
        </div>
      </div>
    </section>
  );
}
