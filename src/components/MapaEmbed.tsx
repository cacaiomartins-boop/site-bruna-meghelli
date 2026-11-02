import { useEffect, useRef, useState } from "react";

type Props = { src: string; title: string; className?: string };

/** Só carrega o mapa do Google quando ele está perto de aparecer na tela, para não atrasar a abertura do site. */
export default function MapaEmbed({ src, title, className }: Props) {
  const ref = useRef<HTMLIFrameElement | null>(null);
  const [perto, setPerto] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setPerto(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setPerto(true);
          obs.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <iframe
      ref={ref}
      src={perto ? src : undefined}
      title={title}
      className={className}
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}
