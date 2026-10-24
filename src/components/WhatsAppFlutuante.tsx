import { clinic } from "../data/clinic";
import { IconWhatsApp } from "./Icons";

export default function WhatsAppFlutuante() {
  return (
    <a
      href={clinic.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-terraescura text-creme shadow-lg transition hover:scale-105 hover:bg-marrom"
    >
      <IconWhatsApp className="h-7 w-7" />
    </a>
  );
}
