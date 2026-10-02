# syntax=docker/dockerfile:1

# ---- Build stage -------------------------------------------------------------
FROM node:24-alpine AS build
WORKDIR /app

# Install dependencies first so this layer is cached until the lockfile changes.
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY . .
RUN npm run build

# ---- Runtime stage -----------------------------------------------------------
# nginx-unprivileged runs as UID 101 and listens on 8080, so no root is needed.
FROM nginxinc/nginx-unprivileged:1.30-alpine AS runtime

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build --chown=101:101 /app/dist /usr/share/nginx/html

USER 101
EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://127.0.0.1:8080/healthz || exit 1
