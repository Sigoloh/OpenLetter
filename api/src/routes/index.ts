import { Request, Router, Response } from 'express';
import emailTriggerRoutes from '../modules/routes/EmailTrigger.routes';
import subsRoutes from '../modules/routes/Subscriber.routes';
import userRoutes from '../modules/routes/User.routes';
export const router = Router();

router.use('/users', userRoutes);

router.use('/subscriber', subsRoutes);

router.use('/email', emailTriggerRoutes);

router.get('/', (request: Request, response: Response) => {
    response.send('Olá, você esta acessando o protótipo do protótipo da API da Open Letter');
});