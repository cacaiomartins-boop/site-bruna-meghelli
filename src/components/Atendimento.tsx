import { clinic } from "../data/clinic";
import { IconPin, IconVideo, IconSeta } from "./Icons";

export default function Atendimento() {
  const e = clinic.endereco;
  return (
    <section id="atendimento" className="py-16 md:py-24">
      <div className="container-site">
        <h2 className="titulo-secao">Atendimento</h2>
        <p className="mt-5 text-lg">Presencial em São Carlos ou online, conforme o que for melhor para você.</p>

        {/* No PC: cada cartão fica alinhado com a imagem/mapa ao lado dele */}
        <div className="mt-8 grid gap-5 md:grid-cols-2 md:gap-6">
          <div className="order-1 flex gap-4 rounded-2xl border border-areia bg-white/50 p-6 md:order-none md:items-start">
            <IconPin className="mt-1 h-6 w-6 shrink-0 text-terraescura" />
            <div>
              <h3 className="font-semibold">{clinic.atendimento[0].titulo}</h3>
              <p className="mt-1">{clinic.atendimento[0].texto}</p>
              <address className="mt-2 not-italic text-marromclaro">
                {e.linha1}
                <br />
                {e.linha2}
                <br />
                CEP {e.cep}
              </address>
              <a
                href={e.mapa}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-terraescura hover:text-marrom"
              >
                Ver no mapa <IconSeta className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="order-3 overflow-hidden rounded-2xl shadow-xl shadow-terra/15 ring-4 ring-areia/80 md:order-none md:min-h-[16rem]">
            <img
              src={clinic.fotos.predio}
              alt="Fachada do edifício onde fica o consultório, em São Carlos"
              className="aspect-[16/10] h-full w-full object-cover object-[50%_65%] md:aspect-auto"
              width="680"
              height="382"
              loading="lazy"
            />
          </div>

          <div className="order-2 flex gap-4 rounded-2xl border border-areia bg-white/50 p-6 md:order-none md:items-start">
            <IconVideo className="mt-1 h-6 w-6 shrink-0 text-terraescura" />
            <div>
              <h3 className="font-semibold">{clinic.atendimento[1].titulo}</h3>
              <p className="mt-1">{clinic.atendimento[1].texto}</p>
            </div>
          </div>

          <div className="relative order-4 overflow-hidden rounded-2xl shadow-xl shadow-terra/15 ring-4 ring-areia/80 md:order-none md:min-h-[9.5rem]">
            <iframe
              src={e.mapaEmbed}
              title="Mapa com a localização do consultório, na Rua Dona Maria Jacinta, 241, São Carlos"
              className="block h-64 w-full border-0 md:absolute md:inset-0 md:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
