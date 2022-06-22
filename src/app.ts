import express from 'express';
import morgan from 'morgan';
import router from './router/home';
import { routerThings } from './router/thing';

export const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use('/', router);
app.use('/things', routerThings);
