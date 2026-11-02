import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const raiz = document.getElementById("root")!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// No site publicado o HTML já vem pronto (pré-renderizado); no desenvolvimento a raiz está vazia.
if (raiz.hasChildNodes()) {
  hydrateRoot(raiz, app);
} else {
  createRoot(raiz).render(app);
}
