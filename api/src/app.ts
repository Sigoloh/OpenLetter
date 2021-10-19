import { createConnection } from 'typeorm';
import * as express from 'express';
import * as cors from 'cors';
import * as logger from 'morgan';
import { router } from './routes/index';
import 'reflect-metadata';

export const app = express();
createConnection().then(async connection => {
    app.use(express.json());
    app.use(cors());
    app.use(logger('dev'));
    app.use('/', router);
});
