import { setDictionary } from "../data/dictionary.js";

import fs from "fs";

export const loadDictionary = (filename, callback) => {
  fs.readFile(filename, (error, data) => {
    if (error) {
      console.error(error);

      callback(error);
      return;
    }

    setDictionary(JSON.parse(data));

    console.log('Словарь обновлен');
    callback();
  });
}
