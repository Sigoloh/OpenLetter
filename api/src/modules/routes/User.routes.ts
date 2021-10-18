import { Router, Request, Response } from 'express';

const userRoutes = Router();

userRoutes.get('/test', (request: Request, response: Response) => {
    response.json({
        mensagem: 'Rota funcionando perfeitamente',
    });
});

export default userRoutes;