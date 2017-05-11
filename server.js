const express = require('express');

const path = require('path');

const app = express();

// Setup logger


// Serve static assets
app.use(express.static(path.join(__dirname, 'public')))

// Always return the main index.html, so react-router render the route in the client


const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});