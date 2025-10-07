import express from "express";
import { createServer } from "http";
import { registerRoutes } from "./routes.js";
import path from "path";

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use((req, _res, next) => { 
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`); 
    next(); 
  });

  // Global no-cache headers
  app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
    res.set('Last-Modified', new Date().toUTCString());
    res.set('ETag', Math.random().toString());
    next();
  });

  // Health check endpoint for Railway
  app.get("/health", (_req, res) => res.status(200).send("ok"));

  // Parse JSON bodies
  app.use(express.json());

  // Register API routes
  await registerRoutes(app);

  // Serve static files in production (includes attached_assets)
  app.use(express.static(path.resolve(process.cwd(), "dist/public")));
  
  // Fallback to serve index.html for SPA routing
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(process.cwd(), "dist/public/index.html"));
  });

  const port = Number(process.env.PORT || 5000);
  server.listen(port, "0.0.0.0", () => console.log("listening", port));
}

startServer().catch(console.error);