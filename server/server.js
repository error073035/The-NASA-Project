import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the NASA Project');
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});