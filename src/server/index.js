import { getDictionary } from "../data/dictionary.js";
import { filename, hostname, port } from "../data/constant.js";
import { downloadDictionary } from "../utils/download-dictionary.js";
import { downloadDictionaryCallback } from "../utils/download-dictionary-callback.js";
import { loadDictionary } from "../utils/load-dictionary.js";
import { loadDictionaryCallback } from "../utils/load-dictionary-callback.js";

import express from "express";

const app = express();

app.use(express.json());

app.get("/get", (request, response) => {
  const term = request.query.term;

  if (!term) {
    response.writeHead(200);
    response.end(JSON.stringify(getDictionary()));

    return;
  }

  if (getDictionary()[term]) {
    response.writeHead(200);
    response.end(getDictionary()[term]);
  } else {
    response.writeHead(404);
    response.end();
  }
});

app.get("/ready", (_, response) => {
    if (getDictionary()) {
      response.writeHead(200);
      response.end('Сервис готов к обслуживанию');
    } else {
      response.writeHead(400);
      response.end('Сервис не готов к обслуживанию');
    }
});

app.put("/update", (request, response) => {
  const dictionaryUrl = request.body.dictionaryUrl;

  downloadDictionary(dictionaryUrl, filename, downloadDictionaryCallback);

  response.writeHead(200);
  response.end();
});


app.listen(port, hostname, () => {
  console.log("Сервер запущен...");

  loadDictionary("./src/data/default/dictionary.json", loadDictionaryCallback);
});
