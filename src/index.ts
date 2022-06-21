import http from 'http';
import morgan from 'morgan';
import express from 'express';
import { app } from './app';
import router from './router/home';
import { routerThings } from './router/thing';
app.use(morgan('dev'));
app.use(express.json());
const PORT = process.env.PORT || 3200;
const onError = () => {};
const onListening = () => {};
app.set('port', PORT);

const thingsServer = http.createServer(app);

app.use('/', router);
app.use('/things', routerThings);
thingsServer.listen(PORT);
thingsServer.on('error', onError);
thingsServer.on('listening', onListening);
