// Copies the static site in public/ to build/, the folder the host serves.
// Image provenance sidecars (photo.webp.json) stay in the repo, not on the site.
import {cpSync, rmSync} from "node:fs";

const skip = /(\.DS_Store|\.(png|webp|jpe?g|avif|ico)\.json)$/;

rmSync("build", {recursive: true, force: true});
cpSync("public", "build", {
  recursive: true,
  filter: source => !skip.test(source)
});
console.log("Built the site into build/");
