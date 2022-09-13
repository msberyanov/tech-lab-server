import { loadGlossary } from "./load-glossary.js";
import { filename } from "../data/constant.js";
import { loadGlossaryCallback } from "./load-glossary-callback.js";

export const downloadGlossaryCallback = (error) => {
  if (error) {
    console.error(error);
    return;
  }

  loadGlossary(filename, loadGlossaryCallback);
}
