import { getGlossary } from "./data/glossary.js";
import { filename, hostname, port } from "./data/constant.js";
import { downloadGlossary } from "./utils/download-glossary.js";
import { downloadGlossaryCallback } from "./utils/download-glossary-callback.js";
import { loadGlossary } from "./utils/load-glossary.js";
import { loadGlossaryCallback } from "./utils/load-glossary-callback.js";

import express from "express";

const app = express();

app.use(express.json());

app.get("/get", (request, response) => {
  const term = request.query.term;

  if (!term) {
    response.writeHead(200);
    response.end(JSON.stringify(getGlossary()));

    return;
  }

  if (getGlossary()[term]) {
    response.writeHead(200);
    response.end(getGlossary()[term]);
  } else {
    response.writeHead(404);
    response.end();
  }
});

app.get("/ready", (_, response) => {
    if (getGlossary()) {
      response.writeHead(200);
      response.end('Сервис готов к обслуживанию');
    } else {
      response.writeHead(400);
      response.end('Сервис не готов к обслуживанию');
    }
});

app.put("/update", (request, response) => {
  const glossaryUrl = request.body.glossaryUrl;

  downloadGlossary(glossaryUrl, filename, downloadGlossaryCallback);

  response.writeHead(200);
  response.end();
});


app.listen(port, hostname, () => {
  console.log("Сервер запущен...");

  loadGlossary("./data/default/glossary.json", loadGlossaryCallback);
});
