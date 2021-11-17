import { output } from '../../../utils/aes256';
import { getRepository } from 'typeorm';
import mailMan from '../../../entity/UserModel';
import EmailTriggerProvider from '../provider/EmailTriggerProvider';
import { transport } from '../../../configs/nodemailerConfigs';

export default class EmailTriggerService{
  private mailManRepo = getRepository(mailMan);
  constructor(
       private emailTriggerProvider: EmailTriggerProvider,
       private mailManId: string,
  ){
  }

  async sendMail(email_body: string){
       
    const emailList = [''];
    const mailMan = await this.emailTriggerProvider.getMailManData(this.mailManId);
    const { subscribers } = mailMan;
    for(const subscriber of subscribers){
      transport.sendMail({
        from: `<${mailMan.email}>`,
        to: `<${output(subscriber.email)}>`,
        subject: 'Testando Mailhog',
        html: email_body 
      });
    } 
  }


}
