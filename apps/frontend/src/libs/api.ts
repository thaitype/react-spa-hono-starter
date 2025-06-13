import { hc } from "hono/client";
import { type ApiRoutes } from "@acme/server";

const client = hc<ApiRoutes>("");

export const api = client.api;

export async function getExpense() {
  return api.expenses.$get().then(res => res.json());
}