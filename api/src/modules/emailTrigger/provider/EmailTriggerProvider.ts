import mailMan from '../../../entity/UserModel';
import { getRepository } from 'typeorm';
import Subscribers from '@models/Subscribers';

export default class EmailTriggerProvider{
    private mailManRepo = getRepository(mailMan);
    constructor(){}

    async getMailManData(mail_man_id: string): Promise<mailMan>{
        try {
           const mailMan = await this.mailManRepo.findOneOrFail(mail_man_id); 
           return mailMan;
        } catch (error) {
            console.log(error);
        }        
    }

    public formatEmailBody (email_body: string): string {
        return email_body;
    }
}