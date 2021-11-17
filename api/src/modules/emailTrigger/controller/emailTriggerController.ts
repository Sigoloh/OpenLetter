import { Request, Response } from 'express';
import EmailTriggerProvider from '../provider/EmailTriggerProvider';
import EmailTriggerService from '../service/EmailTriggerService';
import {extractJwtInfo} from '../../user/utils/extractJwtInfo';


export default class EmailTriggerController{
    async send(request: Request, response: Response): Promise<void>{
        const emailTriggerProvider = new EmailTriggerProvider();
        const { emailBody } = request.body;
        console.log(emailBody)
        const [, authorizationHeader] = request.header('Authorization').split(' ');
        const authorizationInfo = extractJwtInfo(authorizationHeader)
        const emailTriggerService = new EmailTriggerService(emailTriggerProvider, authorizationInfo.id);
        await emailTriggerService.sendMail(emailBody);
        response.status(200).json({
            message: "ok"
        })

    }
}
