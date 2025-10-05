import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Enable trust proxy for Railway
app.set('trust proxy', true);

// Basic middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false }));

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Check if build directory exists - try multiple locations
let staticPath;

// In production (Railway), files will be in dist/
const prodPath = path.join(__dirname, 'public');
// In development, files might be in ../dist/public
const devPath = path.join(__dirname, '..', 'dist', 'public');

if (fs.existsSync(prodPath)) {
  staticPath = prodPath;
  console.log('✓ Static directory found (production):', staticPath);
} else if (fs.existsSync(devPath)) {
  staticPath = devPath;
  console.log('✓ Static directory found (development):', staticPath);
} else {
  console.error('✗ Static directory not found in either location');
  console.log('Tried:', { prodPath, devPath });
  console.log('Available files in __dirname:', fs.readdirSync(__dirname));
  // Create a fallback to prevent crashes
  staticPath = __dirname;
}

if (staticPath && fs.existsSync(staticPath)) {
  app.use(express.static(staticPath));
}

// Health check endpoints
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    staticPath: staticPath,
    staticExists: fs.existsSync(staticPath)
  });
});

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// SPA fallback - serve index.html for all non-API routes
app.get('*', (req, res) => {
  // Don't serve index.html for API routes
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'API route not found' });
  }
  
  const indexPath = path.join(staticPath, 'index.html');
  
  if (!fs.existsSync(indexPath)) {
    console.error('index.html not found at:', indexPath);
    return res.status(500).send(`index.html not found at ${indexPath}`);
  }
  
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error('Error serving index.html:', err);
      res.status(500).send('Server Error');
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
const port = process.env.PORT || 5000;
const server = app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${port}`);
  console.log(`📁 Static files: ${staticPath}`);
  console.log(`🏥 Health check: http://localhost:${port}/health`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});