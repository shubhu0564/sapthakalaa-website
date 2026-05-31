FROM node:18-alpine AS builder
WORKDIR /app

# install deps and build
COPY package.json package-lock.json ./
RUN npm ci --silent
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app

# production deps
COPY package.json package-lock.json ./
RUN npm ci --production --silent

# copy built frontend and server
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.js ./server.js
COPY --from=builder /app/.env ./.env

ENV NODE_ENV=production
EXPOSE 5000
CMD ["node","server.js"]
