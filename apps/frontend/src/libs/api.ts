import { hc } from "hono/client";
import { type ApiRoutes } from "@acme/server";

const client = hc<ApiRoutes>("/api");

export const api = client.api;