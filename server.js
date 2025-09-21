import express from 'express';  // Ensure you have express installed: npm install express
import path from 'path';    // Built-in Node.js module
import { fileURLToPath } from 'url';   // Built-in Node.js module
import open from 'open';
import fetch from 'node-fetch'; // Ensure you have node-fetch installed: npm install node-fetch

const __filename = fileURLToPath(import.meta.url);    // Get the current file path
const __dirname = path.dirname(__filename);    // Get the directory name of the current file

const app = express();  // Create an Express application
const PORT = process.env.PORT || 3000;   // Use the port from environment variables or default to 3000

// Serve static files from dist
app.use(express.static(path.join(__dirname, 'dist')));

// ✅ Proxy route for NewsAPI
app.get("/api/news", async (req, res) => {
  try {
    const query = req.query.q || "";
    const country = req.query.country || "us";
    const endpoint = query
      ? `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}`
      : `https://newsapi.org/v2/top-headlines?country=${country}`;

    const response = await fetch(`${endpoint}&apiKey=${process.env.NEWS_API_KEY}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

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