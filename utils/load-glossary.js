import { setGlossary } from "../data/glossary.js";

import fs from "fs";

export const loadGlossary = (filename, callback) => {
  fs.readFile(filename, (error, data) => {
    if (error) {
      console.error(error);

      callback(error);
      return;
    }

    setGlossary(JSON.parse(data));

    console.log('Словарь обновлен');
    callback();
  });
}
