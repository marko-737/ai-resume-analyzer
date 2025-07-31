import { createServer } from "@react-router/node";
import { handler as reactRouterHandler } from "../../build/server/index.js";

const server = createServer(reactRouterHandler);

export async function handler(event, context) {
  const response = await server.handle(event.rawUrl);
  return {
    statusCode: response.status,
    headers: Object.fromEntries(response.headers.entries()),
    body: await response.text(),
  };
}
