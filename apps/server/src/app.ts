import { Hono } from "hono";
import { logger } from "hono/logger";
import { serveStatic } from "hono/bun";
import { expensesRoute } from "./routes/expenses";

const FRONTEND_PATH = "../frontend/dist";

const app = new Hono();

app.use("*", logger());

const apiRoutes = app.basePath("/api").route("/expenses", expensesRoute)

// Serve static files from the frontend build directory
app.get("*", serveStatic({ root: FRONTEND_PATH }));
// Fallback route to serve the index.html for SPA routing
app.get("*", serveStatic({ root: FRONTEND_PATH, path: "index.html" }));

export default app;
export type ApiRoutes = typeof apiRoutes;