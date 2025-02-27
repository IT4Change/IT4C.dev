/* eslint-disable import/first */
// eslint-disable-next-line import/newline-after-import, import/order
import { loadEnv, env } from "./env";
loadEnv(); // Executed synchronously before the rest of your app loads

import { server } from "./server";

// Run the server!
try {
  void server.listen({ port: env.PORT });
  // eslint-disable-next-line no-catch-all/no-catch-all
} catch (err) {
  server.log.error(err);
  process.exit(1);
}
