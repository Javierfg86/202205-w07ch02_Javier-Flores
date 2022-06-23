import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import router from './router/home.js';
import { routerThings } from './router/thing.js';
import { routerNotes } from './router/notes.js';
export const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use('/', router);
app.use('/things', routerThings);
app.use('/notes', routerNotes);
app.use((error: Error, req: Request, resp: Response, next: NextFunction) => {
    req;
    resp;
    next;
    console.log(error.message);
});
