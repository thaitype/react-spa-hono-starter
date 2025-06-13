import { hc } from "hono/client";
import { type ApiRoutes } from "@acme/server";
import { queryOptions } from "@tanstack/react-query";
// import { type CreateExpense } from "@server/sharedTypes";

const client = hc<ApiRoutes>("/");
