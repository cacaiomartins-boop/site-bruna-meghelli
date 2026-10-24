import { clinic } from "../data/clinic";
import { Reveal } from "./Reveal";

export default function Formacao() {
  return (
    <section id="formacao" className="relative overflow-hidden bg-areia/45 py-16 md:py-24">
      <div className="container-site grid gap-14 md:grid-cols-2 md:gap-16">
        <div>
          <Reveal>
            <h2 className="titulo-secao">Formação</h2>
          </Reveal>
          <ol className="mt-8 space-y-7 border-l-2 border-terra/60 pl-6">
            {clinic.formacao.map((f, n) => (
              <Reveal as="li" key={f.titulo} delay={n * 100} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-terra" aria-hidden="true" />
                <h3 className="text-base font-semibold md:text-lg">{f.titulo}</h3>
                <p className="mt-1 leading-relaxed">{f.detalhe}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        <div>
          <Reveal delay={150}>
            <h2 className="titulo-secao">Experiência</h2>
          </Reveal>
          <ol className="mt-8 space-y-7 border-l-2 border-terra/60 pl-6">
            {clinic.experiencia.map((x, n) => (
              <Reveal as="li" key={x.titulo} delay={150 + n * 100} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-terra" aria-hidden="true" />
                <h3 className="text-base font-semibold uppercase md:text-lg">{x.titulo}</h3>
                <p className="mt-0.5 text-sm font-medium tracking-wide text-terraescura">{x.periodo}</p>
                <p className="mt-1 leading-relaxed">{x.detalhe}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
