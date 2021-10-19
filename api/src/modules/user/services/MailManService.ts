import { getRepository } from 'typeorm';
import mailMan from '../../../entity/UserModel';
import MailMan from '../provider/MailManProvider';


export default class MainManService{
    constructor(
        private name: string,
        private email: string,
        private password: string,
        private mailManProvider: MailMan,
    ){}
    async execute(): Promise<void>{
        const mainManRepo = getRepository(mailMan);
        const savedUser = await mainManRepo.save(this.mailManProvider.formatMailMan(
            this.email, this.name, this.password
        ));
        console.log(savedUser);

    }
}