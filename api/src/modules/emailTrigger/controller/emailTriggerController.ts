import { Request, Response } from 'express';
import EmailTriggerProvider from '../provider/EmailTriggerProvider';
import EmailTriggerService from '../service/EmailTriggerService';


export default class EmailTriggerController{
    async send(request: Request, response: Response): Promise<void>{
        const {mailManId} = request.body;
        const emailTriggerProvider = new EmailTriggerProvider();
        const emailTriggerService = new EmailTriggerService(emailTriggerProvider, mailManId);
        await emailTriggerService.sendMail();
        response.status(200).json({
            message: "ok"
        })

    }
}