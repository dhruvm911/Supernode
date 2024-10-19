import express from "express";
const app = express();
import dotenv from "dotenv";

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
