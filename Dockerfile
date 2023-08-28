FROM node:20-alpine

RUN npm install -g pnpm

WORKDIR /action

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

RUN chmod +x ./entrypoint.sh

RUN ls ./

RUN ls ./lib

ENTRYPOINT ["./entrypoint.sh"]