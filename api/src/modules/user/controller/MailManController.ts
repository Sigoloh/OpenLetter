import { Request, Response } from 'express';
import MailMan from '../provider/MailManProvider';
import MailManService from '../services/MailManService';

export class MailManController{
    async handle(request: Request, response: Response){
        const mailManProvider = new MailMan();
        const {email, name, password} = request.body;
        const mailManService = new MailManService(name, email, password, mailManProvider);
        mailManService.execute();
        console.log(process.env);
        response.json({
            message: 'Mensagem'
        });
    }
}