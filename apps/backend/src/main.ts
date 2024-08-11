/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import { connectToDatabase } from './database/data-source';
import apiRouter from './routes';

const app = express();

app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use("/api", apiRouter);

connectToDatabase().then(() => {
  const port = process.env.PORT || 3333;
  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
  });
  server.on('error', console.error);
});
