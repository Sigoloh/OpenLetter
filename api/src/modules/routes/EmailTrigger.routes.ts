import { Router, Response, Request } from 'express';
import EmailTriggerController from '../emailTrigger/controller/emailTriggerController';

const emailTriggerRoutes = Router();
const emailTriggerController = new EmailTriggerController(); 
emailTriggerRoutes.get('/test', (request: Request, response: Response) => {
    response.json({
        message: "Ta rolando ja"
    });
});

emailTriggerRoutes.post('/send', emailTriggerController.send);

export default emailTriggerRoutes;