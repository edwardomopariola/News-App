import express from 'express';  // Ensure you have express installed: npm install express
import path from 'path';    // Built-in Node.js module
import { fileURLToPath } from 'url';   // Built-in Node.js module
import open from 'open';

const __filename = fileURLToPath(import.meta.url);    // Get the current file path
const __dirname = path.dirname(__filename);    // Get the directory name of the current file

const app = express();  // Create an Express application
const PORT = process.env.PORT || 3000;   // Use the port from environment variables or default to 3000

// Serve static files from dist
app.use(express.static(path.join(__dirname, 'dist')));

// Handle SPA routing
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  if (process.env.NODE_ENV !== 'production') {
    const localURL = `http://localhost:${PORT}`;
    console.log(`✅ Server running locally at: ${localURL}`);
    open(localURL);
  } 
});