import { Router, Response, Request } from 'express';
import SubscriberController from '../subscribers/controller/Subscribercontroller';

const subsRoutes = Router();
const subscriberController = new SubscriberController();
subsRoutes.get('/test', (request: Request, response: Response) => {
    response.json({
        message: "Ta rolando ja"
    });
});

subsRoutes.post('/create', subscriberController.create);

subsRoutes.delete('/delete', subscriberController.delete);

export default subsRoutes;