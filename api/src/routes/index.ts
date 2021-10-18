import { Request, Router, Response } from 'express';
import userRoutes from '../modules/routes/User.routes';
export const router = Router();

router.use('/users', userRoutes);

router.get('/', (request: Request, response: Response) => {
    response.send('Olá, você esta acessando o protótipo do protótipo da API da Open Letter');
});