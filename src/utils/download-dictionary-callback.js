import { loadDictionary } from "./load-dictionary.js";
import { filename } from "../data/constant.js";
import { loadDictionaryCallback } from "./load-dictionary-callback.js";

export const downloadDictionaryCallback = (error) => {
  if (error) {
    console.error(error);
    return;
  }

  loadDictionary(filename, loadDictionaryCallback);
}
