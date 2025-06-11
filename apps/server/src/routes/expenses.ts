import { Hono } from "hono";
// import { zValidator } from "@hono/zod-validator";

export const expensesRoute = new Hono()
  .get("/", async (c) => {

    return c.json({ expenses: 'Yay!' });
  })