# Build app
FROM node:18.19.0-alpine3.19

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN npm i -g pnpm
RUN pnpm install

COPY . .

RUN pnpm build
RUN pnpm prune --prod

RUN npm install --g pm2

EXPOSE 3000

CMD ["pm2-runtime", "pnpm", "--", "start"]
