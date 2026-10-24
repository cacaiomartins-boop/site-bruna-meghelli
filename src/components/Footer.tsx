import { clinic } from "../data/clinic";

export default function Footer() {
  return (
    <footer className="py-10 text-center">
      <div className="container-site">
        <img src={clinic.fotos.monograma} alt="" className="mx-auto mb-4 h-12 w-auto" width="54" height="48" />
        <p className="font-display text-xl tracking-wide text-terra">BRUNA MEGHELLI</p>
        <p className="mt-1 text-sm uppercase tracking-[0.18em]">
          {clinic.titulo} · {clinic.crp}
        </p>
        <p className="mt-5 text-sm text-terraescura">{clinic.lema.join(" · ")}</p>
        <p className="mt-6 text-xs text-marromclaro">
          © {new Date().getFullYear()} {clinic.nomeCompleto}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
