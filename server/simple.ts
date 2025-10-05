import express from "express";
import path from "path";
import process from "process";

const app = express();
const __dirname = path.resolve();

app.use((req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.get("/health", (_req, res) => res.status(200).send("ok"));

app.use(express.static(path.join(__dirname, "dist", "client")));
app.get("*", (_req, res) =>
  res.sendFile(path.join(__dirname, "dist", "client", "index.html"))
);

const portStr = process.env.PORT || "3000";
const port = Number(portStr);
if (!Number.isFinite(port)) {
  console.error(`PORT inválido: "${portStr}"`);
  process.exit(1);
}

app
  .listen(port, "0.0.0.0", () => {
    console.log(`listening on 0.0.0.0:${port}`);
  })
  .on("error", (e) => {
    console.error("listen error:", e);
    process.exit(1);
  });

process.on("unhandledRejection", (e) => { console.error("unhandledRejection:", e); process.exit(1); });
process.on("uncaughtException", (e) => { console.error("uncaughtException:", e); process.exit(1); });