import { useState } from "react";
import { clinic } from "../data/clinic";
import { IconCalendario } from "./Icons";

const links = [
  { href: "#sobre", rotulo: "Quem sou" },
  { href: "#especialidades", rotulo: "Especialidades" },
  { href: "#formacao", rotulo: "Formação" },
  { href: "#atendimento", rotulo: "Atendimento" },
  { href: "#contato", rotulo: "Contato" },
];

export default function Header() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-areia/70 bg-creme/90 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between">
        <a href="#topo" className="flex items-center gap-3" aria-label="Bruna Meghelli, início">
          <img src={clinic.fotos.monograma} alt="" className="h-9 w-auto" width="40" height="36" />
          <span className="font-display text-lg tracking-wide text-terra md:text-xl">
            BRUNA MEGHELLI
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm md:flex" aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-medium text-marrom transition hover:text-terraescura">
              {l.rotulo}
            </a>
          ))}
          <a href={clinic.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primario !px-5 !py-2.5 !text-xs">
            <IconCalendario className="h-4 w-4" /> Agendar
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-marrom md:hidden"
          aria-expanded={aberto}
          aria-controls="menu-mobile"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          onClick={() => setAberto((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {aberto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {aberto && (
        <nav id="menu-mobile" className="border-t border-areia/70 bg-creme md:hidden" aria-label="Menu mobile">
          <div className="container-site flex flex-col py-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setAberto(false)} className="py-3 text-base font-medium text-marrom">
                {l.rotulo}
              </a>
            ))}
            <a href={clinic.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primario my-3">
              <IconCalendario className="h-4 w-4" /> Agendar
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
