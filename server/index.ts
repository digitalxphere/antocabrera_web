import express from "express";
import { createServer } from "http";
import { registerRoutes } from "./routes.js";
import path from "path";
import fs from "fs";

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use((req,_res,next)=>{ console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`); next(); });

  // Seguridad
  app.use((_,res,next)=>{
    res.setHeader("X-Content-Type-Options","nosniff");
    res.setHeader("Referrer-Policy","strict-origin-when-cross-origin");
    res.setHeader("X-Frame-Options","SAMEORIGIN");
    res.setHeader("Permissions-Policy","camera=(),microphone=(),geolocation=()");
    res.setHeader("Strict-Transport-Security","max-age=31536000; includeSubDomains");
    res.setHeader("Cross-Origin-Opener-Policy","same-origin");
    res.setHeader("Cross-Origin-Embedder-Policy","require-corp");
    
    const csp = process.env.NODE_ENV === 'development'
      ? "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' ws: wss:; frame-ancestors 'self';"
      : "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'self';";
    
    res.setHeader("Content-Security-Policy", csp);
    next();
  });

  // HTML sin caché
  app.use((req,res,next)=>{
    if (req.path.endsWith(".html") || req.path === "/") {
      res.setHeader("Cache-Control","no-store");
    }
    next();
  });

  app.get("/health", (_req,res)=>res.status(200).send("ok"));

  // Parse JSON bodies
  app.use(express.json());

  // Register API routes
  await registerRoutes(app);

  // Estáticos con caché fuerte
  app.use("/assets", express.static("dist/client/assets", {
    maxAge: "30d", immutable: true, etag: true
  }));

  // Serve static files from attached_assets in development
  if (process.env.NODE_ENV !== "production") {
    app.use("/attached_assets", express.static("attached_assets"));
  }

  // Setup development or production serving
  if (process.env.NODE_ENV === "production") {
    // Serve other static files (excluding assets which have separate caching)
    app.use(express.static(path.resolve(process.cwd(), "dist/client"), {
      index: false, // Don't serve index.html automatically
      setHeaders: (res, filePath) => {
        // Only apply no-cache to HTML files, let other files use default caching
        if (filePath.endsWith('.html')) {
          res.setHeader("Cache-Control", "no-store");
        }
      }
    }));
    
    // Fallback to serve index.html for SPA routing - but return 404 for real static files
    app.get("*", (req, res) => {
      const filePath = path.resolve(process.cwd(), "dist/client/index.html");
      
      // Check if it's a request for a static file that doesn't exist
      const staticExtensions = ['.js', '.css', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.woff', '.woff2', '.ttf', '.eot'];
      const hasStaticExtension = staticExtensions.some(ext => req.path.toLowerCase().endsWith(ext));
      
      if (hasStaticExtension) {
        // Return real 404 for static files that don't exist
        return res.status(404).send('Not Found');
      }
      
      // Serve index.html for SPA routes with no-cache
      res.setHeader("Cache-Control", "no-store");
      res.sendFile(filePath);
    });
  } else {
    // Dynamic import for Vite to avoid bundling it
    const { setupVite } = await import("./vite.js");
    await setupVite(app, server);
  }

  const port = Number(process.env.PORT || 5000);
  server.listen(port, "0.0.0.0", ()=> console.log("listening", port));
}

startServer().catch(console.error);