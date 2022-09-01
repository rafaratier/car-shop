import express from 'express';
import errorHandlerMiddleware from './middlewares.ts/errorHandlerMiddleware';
import router from './router';

const app = express();

app.use(express.json());

app.use(router);

app.use(errorHandlerMiddleware);

export default app;
