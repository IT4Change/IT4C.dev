import { load } from "ts-dotenv";

import type { EnvType } from "ts-dotenv";

export const schema = {
  NODE_ENV: {
    type: ["production" as const, "development" as const],
    default: "development",
  },
  EMAIL_RECEIVER: {
    type: String,
    default: "admin@it4c.dev",
  },
  EMAIL_SUBJECT: {
    type: String,
    default: "[IT4C] Received EMail from %s",
  },
  PORT: {
    type: Number,
    default: 3000,
  },
  MAIL_HOST: {
    type: String,
    default: "localhost",
  },
};

export type Env = EnvType<typeof schema>;

// eslint-disable-next-line import/no-mutable-exports
export let env: Env;

export function loadEnv(): void {
  env = load(schema);
}
