import express from 'express';
import path from 'path';
const app = express();
const __dirname = path.resolve();

app.use((req, _res, next) => { console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`); next(); });

app.get('/health', (_req, res) => res.status(200).send('ok'));

app.use(express.static(path.join(__dirname, 'dist/public')));
app.get('*', (_req, res) => res.sendFile(path.join(__dirname, 'dist/public', 'index.html')));

const port = Number(process.env.PORT) || 3000;
app.listen(port, '0.0.0.0', () => console.log(`listening on ${port}`));

process.on('unhandledRejection', e => { console.error(e); process.exit(1); });
process.on('uncaughtException', e => { console.error(e); process.exit(1); });