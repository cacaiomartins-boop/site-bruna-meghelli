import { clinic } from "../data/clinic";
import { IconCalendario, IconInstagram, IconMail, IconWhatsApp } from "./Icons";
import { Parallax, Reveal } from "./Reveal";

export default function Contato() {
  return (
    <section id="contato" className="relative overflow-hidden bg-areia/45 py-16 md:py-24">
      <Parallax velocidade={0.15} className="absolute -right-20 -top-20">
        <div className="blob h-56 w-56 bg-terra/80" aria-hidden="true" />
      </Parallax>
      <Reveal className="container-site relative">
        <h2 className="titulo-secao">Vamos conversar?</h2>
        <p className="mt-4 max-w-xl text-lg md:text-xl">Agende seu atendimento e dê espaço ao seu processo.</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href={clinic.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primario">
            <IconWhatsApp className="h-4 w-4" /> WhatsApp
          </a>
          <a href={clinic.doctoralia} target="_blank" rel="noopener noreferrer" className="btn btn-contorno">
            <IconCalendario className="h-4 w-4" /> Doctoralia
          </a>
        </div>

        <ul className="mt-10 grid gap-5 text-lg font-medium sm:grid-cols-2 lg:max-w-2xl">
          <li>
            <a href={clinic.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-terraescura">
              <IconInstagram className="h-7 w-7 text-terra" /> {clinic.instagramUsuario}
            </a>
          </li>
          <li>
            <a href={clinic.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-terraescura">
              <IconWhatsApp className="h-7 w-7 text-terra" /> {clinic.telefone}
            </a>
          </li>
          <li>
            <a href={`mailto:${clinic.email}`} className="flex items-center gap-3 break-all hover:text-terraescura">
              <IconMail className="h-7 w-7 shrink-0 text-terra" /> {clinic.email}
            </a>
          </li>
        </ul>
      </Reveal>
    </section>
  );
}
