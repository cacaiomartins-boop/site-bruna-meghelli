import { useEffect, useRef, useState, type ReactNode } from "react";

const reduzMovimento = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Um único ouvinte de rolagem para todos os blocos. Revela o bloco quando ele chega
// perto da parte de baixo da tela, ou já ficou para trás (pulo pelo menu, recarga no meio da página).
const pendentes = new Map<HTMLElement, () => void>();
let ouvindo = false;
let quadroPendente = 0;

function verificar() {
  quadroPendente = 0;
  const limite = window.innerHeight * 0.92;
  pendentes.forEach((revelar, el) => {
    if (el.getBoundingClientRect().top < limite) {
      pendentes.delete(el);
      revelar();
    }
  });
  if (!pendentes.size && ouvindo) {
    window.removeEventListener("scroll", agendar);
    window.removeEventListener("resize", agendar);
    ouvindo = false;
  }
}

function agendar() {
  if (!quadroPendente) quadroPendente = requestAnimationFrame(verificar);
}

function observar(el: HTMLElement, revelar: () => void) {
  pendentes.set(el, revelar);
  if (!ouvindo) {
    window.addEventListener("scroll", agendar, { passive: true });
    window.addEventListener("resize", agendar);
    ouvindo = true;
  }
  agendar();
  return () => {
    pendentes.delete(el);
  };
}

type RevealProps = {
  children: ReactNode;
  as?: "div" | "li";
  className?: string;
  /** atraso em milissegundos (para escalonar itens de uma lista) */
  delay?: number;
  from?: "baixo" | "esquerda" | "direita";
};

const origem = {
  baixo: "translate-y-8",
  esquerda: "-translate-x-8",
  direita: "translate-x-8",
};

/** Faz o conteúdo surgir suavemente quando entra na tela ao rolar. */
export function Reveal({ children, as = "div", className = "", delay = 0, from = "baixo" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return observar(el, () => setVisivel(true));
  }, []);

  // Com "reduzir movimento" ligado no sistema: só um fade suave, sem deslocamento.
  const deslocamento = reduzMovimento() ? "" : origem[from];
  const Tag = as;
  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: visivel ? `${delay}ms` : "0ms" }}
      className={`transition-[opacity,transform] duration-[900ms] ease-out ${
        visivel ? "translate-x-0 translate-y-0 opacity-100" : `${deslocamento} opacity-0`
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

type ParallaxProps = {
  children: ReactNode;
  /** 0.1 = move 10% da distância rolada; negativo sobe mais devagar */
  velocidade?: number;
  className?: string;
};

/** Move o elemento um pouco mais devagar/rápido que a rolagem (efeito de profundidade). */
export function Parallax({ children, velocidade = 0.12, className = "" }: ParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduzMovimento()) return;
    let quadro = 0;
    const atualizar = () => {
      quadro = 0;
      const r = el.getBoundingClientRect();
      const distancia = r.top + r.height / 2 - window.innerHeight / 2;
      el.style.transform = `translate3d(0, ${(-distancia * velocidade).toFixed(1)}px, 0)`;
    };
    const aoRolar = () => {
      if (!quadro) quadro = requestAnimationFrame(atualizar);
    };
    atualizar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    window.addEventListener("resize", aoRolar);
    return () => {
      window.removeEventListener("scroll", aoRolar);
      window.removeEventListener("resize", aoRolar);
      if (quadro) cancelAnimationFrame(quadro);
    };
  }, [velocidade]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
