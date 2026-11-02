// Depois do build, escreve o HTML da página dentro de dist/index.html,
// para que robôs que não executam JavaScript vejam o conteúdo.
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const { render } = await import(pathToFileURL(resolve("dist-ssr/entry-server.js")).href);
const marcador = '<div id="root"></div>';
const html = readFileSync("dist/index.html", "utf8");
if (!html.includes(marcador)) throw new Error("Marcador da raiz não encontrado em dist/index.html");

writeFileSync("dist/index.html", html.replace(marcador, `<div id="root">${render()}</div>`));
rmSync("dist-ssr", { recursive: true, force: true });
console.log("Pré-renderização concluída: dist/index.html");
