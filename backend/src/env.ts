import { EnvType, load } from 'ts-dotenv';

export type Env = EnvType<typeof schema>;

export const schema = {
    NODE_ENV: {
        type: ['production' as const, 'development' as const],
        default: 'development',
    },
    EMAIL_RECEIVER: {
        type: String,
        default: 'admin@it4c.dev'
    },
    EMAIL_SUBJECT: {
        type: String,
        default: '[IT4C] Received EMail from $s'
    },
    PORT: {
        type: Number,
        default: 3000
    },
    MAIL_HOST: {
        type: String,
        default: 'localhost'
    }
};

export let env: Env;

export function loadEnv(): void {
    env = load(schema);
}