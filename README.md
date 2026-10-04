# IT4C.dev

This repository contains the [Website](https://www.it4c.dev) utilizing `vuepress` to generate it and a small backend handling the contact form.

## Software requirements

This package requires:

- [nodejs](https://github.com/nodejs/node) (version pinned in `.tool-versions`)
- [npm](https://github.com/npm/cli)

On alpine you need to install the following software to get the `vuepress-plugin-imagemin` properly installed:

```sh
apk add autoconf libtool automake build-base nasm libpng-dev
```

## Techstack

Frontend (`/`):

- [vuepress](https://github.com/vuepress/core) with the vite bundler
- [vuepress-theme-hope](https://github.com/vuepress-theme-hope/vuepress-theme-hope)
- [tailwindcss](https://github.com/tailwindlabs/tailwindcss)
- [vuepress-plugin-imagemin](https://github.com/vuepress/vuepress-plugin-imagemin)

Backend (`/backend`):

- [fastify](https://github.com/fastify/fastify) with [typebox](https://github.com/sinclairzx81/typebox)
- [nodemailer](https://github.com/nodemailer/nodemailer)
- [tsup](https://github.com/egoist/tsup), [tsx](https://github.com/privatenumber/tsx) and [jest](https://github.com/jestjs/jest)

## Usage

How to use this package

### Build

Build the static files of the website which then can be found under `docs/.vuepress/dist/`.

```sh
npm run build
```

### Dev

Bring up a development environment with hot reloading which can be reached [under](http://localhost:8080/)

```sh
npm run dev
```

### Test

Run the tests to ensure everything is working as expected

```sh
npm test
npm run test:lint:typecheck
```

### Backend

The backend serves `POST /mail` for the contact form (exposed as `/api/mail` via nginx) and sends the message via SMTP.

```sh
cd backend
npm install
npm run dev        # watch mode
npm run build      # build into backend/build
npm start          # run the build
npm test           # unit tests
npm run lint
npm run typecheck
```

Configure it via environment variables (or a `backend/.env` file):

| Variable         | Default                         |
|------------------|---------------------------------|
| `NODE_ENV`       | `development`                   |
| `PORT`           | `3000`                          |
| `MAIL_HOST`      | `localhost`                     |
| `EMAIL_RECEIVER` | `admin@it4c.dev`                |
| `EMAIL_SUBJECT`  | `[IT4C] Received EMail from %s` |

## Deploy

You can use the webhook template `webhook.conf.template` and the `deploy.sh` script in `.github/webhooks/` for an automatic deployment from a (github) webhook.

For this to work follow these steps (using alpine):

```sh
apk add webhook
cp .github/webhooks/hooks.json.template .github/webhooks/hooks.json
vi .github/webhooks/hooks.json
# adjust content of .github/webhooks/hooks.json
# replace all variables accordingly

# copy webhook service file
cp .github/webhooks/webhook.template /etc/init.d/webhook
vi /etc/init.d/webhook
# adjust content of /etc/init.d/webhook
chmod +x /etc/init.d/webhook

service webhook start
rc-update add webhook boot

vi /etc/nginx/http.d/default.conf
# adjust the nginx config
# location /hooks/ {
#     proxy_http_version 1.1;
#     proxy_set_header   Upgrade $http_upgrade;
#     proxy_set_header   Connection 'upgrade';
#     proxy_set_header   X-Forwarded-For $remote_addr;
#     proxy_set_header   X-Real-IP  $remote_addr;
#     proxy_set_header   Host $host;
# 
#     proxy_pass         http://127.0.0.1:9000/hooks/;
#     proxy_redirect     off;
# 
#     #access_log $LOG_PATH/nginx-access.hooks.log hooks_log;
#     #error_log $LOG_PATH/nginx-error.backend.hook.log warn;
# }

# The github payload is quite big sometimes, hence those two lines can prevent an reoccurring error message on nginx
# client_body_buffer_size     10M;
# client_max_body_size        10M;

# for the backend install pm2
npm install pm2 -g

# expose the backend service via nginx
vi /etc/nginx/http.d/default.conf
# location /api/ {
#     proxy_http_version 1.1;
#     proxy_set_header   Upgrade $http_upgrade;
#     proxy_set_header   Connection 'upgrade';
#     proxy_set_header   X-Forwarded-For $remote_addr;
#     proxy_set_header   X-Real-IP  $remote_addr;
#     proxy_set_header   Host $host;
#
#     proxy_pass         http://127.0.0.1:3000/;
#     proxy_redirect     off;
#
#     #access_log $LOG_PATH/nginx-access.api.log hooks_log;
#     #error_log $LOG_PATH/nginx-error.api.log warn;
# }
```

For the github webhook configure the following:

| Field                                                | Value                         |
|------------------------------------------------------|-------------------------------|
| Payload URL                                          | https://it4c.dev/hooks/github |
| Content type                                         | application/json              |
| Secret                                               | A SECRET                      |
| SSL verification                                     | Enable SSL verification       |
| Which events would you like to trigger this webhook? | Send me everything.           |
| Active                                               | [x]                           |

## How it works

```mermaid
flowchart LR
  PR[PR branch] -->|review & CI| M[master]
  M -->|push event| W[GitHub webhook]
  W -->|/hooks/github| D[deploy.sh on the server]
  D -->|npm run build| F[static files served by nginx]
  D -->|pm2| B[backend on /api/]
```

A Pullrequest-Review-Workflow is applied to get changes into `master`; the GitHub workflows lint, typecheck, test and build frontend and backend. On a push to `master` GitHub calls the webhook on the server, which runs `.github/webhooks/deploy.sh`: it pulls the branch, builds the website into a new directory `$DEPLOY_DIR-<git-ref>` and switches the symlink `$DEPLOY_DIR` served by nginx to it, then rebuilds and restarts the backend via `pm2`.
