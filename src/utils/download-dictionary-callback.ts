import { loadDictionary } from "./load-dictionary";
import { filename } from "../data/constant";
import { loadDictionaryCallback } from "./load-dictionary-callback";

export const downloadDictionaryCallback = (err) => {
  if (err) {
    console.error(err);
    return;
  }

  loadDictionary(filename, loadDictionaryCallback);
}
