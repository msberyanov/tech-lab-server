import { setDictionary } from "../data/dictionary";

const fs = require('fs');

export const loadDictionary = (
  filename: string,
  callback: (message?: string) => void
) => {
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
