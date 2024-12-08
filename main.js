const express = require('express');
const path = require('path');
const app = express();

// Serve static files (CSS, JS, images) from the 'css' and 'html' directories
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'html')));
app.use('/resources', express.static(path.join(__dirname, 'resources')));

// Define a route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'sarrera.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 