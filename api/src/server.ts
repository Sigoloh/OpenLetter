import { app } from './app';

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

const server = app.listen(port, () => console.log(`App started at ${host}:${port}`));

process.on('SIGINT', ()=>{
    server.close();
    console.log('App finalizado');
});