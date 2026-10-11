// Erzeugt textures/disc.webp und textures/bunny.png mit headless Chrome.
// Aufruf: node tools/build-sprites.mjs   (benötigt Google Chrome, Pfad ggf. über CHROME anpassen)
import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const chrome = process.env.CHROME || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

for (const name of ["disc", "bunny"]) {
  const url = pathToFileURL(join(here, "sprites.html")).href + "?sheet=" + name;
  const dom = execFileSync(chrome, ["--headless=new", "--disable-gpu", "--dump-dom", url],
    { encoding: "utf8", maxBuffer: 256 * 1024 * 1024 });
  const m = dom.match(/data:image\/(png|webp);base64,([A-Za-z0-9+/=]+)/);
  if (!m) throw new Error("Kein Bild für " + name + " erhalten");
  const out = join(here, "..", "textures", name + "." + m[1]);
  writeFileSync(out, Buffer.from(m[2], "base64"));
  console.log("geschrieben:", out);
}
