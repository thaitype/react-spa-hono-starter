# syntax = docker/dockerfile:1

# ----- Base Stage (For Build) -----
ARG BUN_VERSION=1.2.15
FROM oven/bun:${BUN_VERSION}-slim AS base

RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y nodejs npm

RUN npm install -g pnpm

ENV PATH="$PNPM_HOME:$PATH"
ENV PNPM_HOME="/pnpm"

WORKDIR /app

# -----------------------
# ---- Build Stage ------
# -----------------------

FROM base AS build

# Copy application code
COPY --link . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm build

# -----------------------
# ---- Runtime Stage ----
# -----------------------

ARG BUN_VERSION=1.2.15
FROM oven/bun:${BUN_VERSION}-slim AS runtime
# FROM base AS runtime

# Support fly.io, ref: https://fly.io/javascript-journal/demystify-docker-js/
LABEL fly_launch_runtime="Bun"

WORKDIR /app

# Create non-root user
# RUN addgroup -S app && adduser -S app -G app
RUN addgroup --system app \
  && adduser  --system \
              --ingroup app \
              --no-create-home \
              --disabled-login \
              app \
  && chown -R app:app /app

# Copy built server
COPY --from=build /app/apps/server/dist /app/apps/server/dist
# Copy built frontend
COPY --from=build /app/apps/frontend/dist /app/apps/frontend/dist

# Expose the port the app runs on
EXPOSE 3000

# Use non-root user
USER app

WORKDIR /app/apps/server

CMD [ "bun", "run", "./dist/index.js" ]