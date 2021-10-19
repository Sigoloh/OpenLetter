import { app } from './app';
import * as dotenv from 'dotenv';
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
dotenv.config();
const server = app.listen(port, () => console.log(`App started at ${host}:${port}`));
process.on('SIGINT', ()=>{
    server.close();
    console.log('App finalizado');
});