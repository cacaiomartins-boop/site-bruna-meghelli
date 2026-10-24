import { clinic } from "../data/clinic";
import { IconWhatsApp } from "./Icons";
import { Reveal } from "./Reveal";

export default function Valores() {
  const v = clinic.valores;
  return (
    <section id="valores" className="bg-white/45 py-14 md:py-12">
      <div className="container-site">
        <Reveal>
          <h2 className="titulo-secao">Valores</h2>
          <p className="mt-5 max-w-xl text-lg">{v.intro}</p>
        </Reveal>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 md:gap-6">
          {v.planos.map((p, n) => (
            <Reveal
              as="li"
              key={p.nome}
              delay={n * 150}
              className="rounded-2xl border border-areia bg-creme p-7 text-center shadow-sm"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-terraescura">{p.nome}</h3>
              <p className="mt-4 font-display text-5xl text-terra">{p.preco}</p>
              <p className="mt-4 font-medium">{p.detalhe}</p>
              <p className="mt-1 text-marromclaro">{p.sessoes}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={200}>
          <p className="mt-6 text-sm text-marromclaro">{v.nota}</p>
          <a href={clinic.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primario mt-6">
            <IconWhatsApp className="h-4 w-4" /> Agendar
          </a>
        </Reveal>
      </div>
    </section>
  );
}
