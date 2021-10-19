import { Router, Request, Response } from 'express';
import {MailManController} from '../user/controller/MailManController';

const userRoutes = Router();

const mailManController = new MailManController();

userRoutes.get('/test', (request: Request, response: Response) => {
    response.json({
        mensagem: 'Rota funcionando perfeitamente',
    });
});

userRoutes.post('/create', mailManController.handle);

export default userRoutes;