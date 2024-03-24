import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { router } from './app/routes/routes';
import { globalErrorHandler } from './app/errors/global.error';
import { apiNotFound } from './app/errors/apiNotFound';
const app: Application = express();

//middleware
app.use(express.json());
app.use(cors({ origin: ['http://localhost:3000'] }));

//application routes
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Sunbeam kids garden server are running');
});
app.use(globalErrorHandler);
app.use(apiNotFound);
export default app;
