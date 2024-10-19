const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();  // Load environment variables

// Middleware to parse incoming requests
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Supernode API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
