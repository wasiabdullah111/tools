const express = require('express');
const app = express();
const port = 3000;

// Serve static files (like HTML, CSS, and JS) from the 'public' directory
app.use(express.static('public'));

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('<h1>Jazz Pakistan.!</h1>');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

