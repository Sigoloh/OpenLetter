import { Request, Router, Response } from 'express';

export const router = Router();

router.get('/', (request: Request, response: Response) => {
    response.send(`Olá, você esta acessando o protótipo do protótipo da API da Open Letter`);
})