import { createConnection } from 'typeorm';
import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import { router } from './routes/index';
import 'reflect-metadata';

export const app = express();
createConnection().then(async connection => {
    app.use(express.json());
    app.use(cors());
    app.use(logger('dev'));
    app.use('/', router);
});
