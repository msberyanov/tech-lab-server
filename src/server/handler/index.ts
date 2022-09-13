import { getDictionary } from "../../data/dictionary";

const url = require('url');

export const handler = (request, response) => {
    const parsedUrl = url.parse(request.url);

    const term = parsedUrl.pathname.length > 0 ? parsedUrl.pathname.substr(1).toUpperCase() : undefined;

    const definition = getDictionary()[term];

    if (!definition) {
        response.writeHead(404);
        response.end(`Термин '${term}' + ' в словаре не найден`);

        return;
    }

    response.writeHead(200);
    response.end(definition);
}
