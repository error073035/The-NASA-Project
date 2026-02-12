import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import planetsRoutes from './routes/planets.routes.js';
import launchRoutes from './routes/launch.routes.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(cors());
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

app.use(express.json());
app.use('/api/v1/planets', planetsRoutes);
app.use('/api/v1/launches', launchRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the NASA Project');
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});