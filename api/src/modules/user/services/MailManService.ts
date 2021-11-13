import { getRepository, Repository } from 'typeorm';
import mailMan from '../../../entity/UserModel';
import MailMan from '../provider/MailManProvider';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

export default class MainManService{
    constructor(
        private name?: string,
        private email?: string,
        private password?: string,
        private newPassword?: string,
        private mailManId?: string,
    ){}

    private mailManRepo = getRepository(mailMan);

    private mailManProvider = new MailMan();

    async create(): Promise<void>{
        // Todo: Tratar essa saida para erros
        const savedUser = await this.mailManRepo.save(
            this.mailManProvider.formatMailMan(
                this.email, this.name, this.password)
            );
        console.log(savedUser);
    }

    async update(): Promise<void>{
        const userToBeUpated = await this.mailManRepo.findOneOrFail(this.mailManId);
        userToBeUpated.password = this.newPassword;
        await this.mailManRepo.save(userToBeUpated);
    }

    async get(): Promise<mailMan>{
        const userToBeFound = await this.mailManRepo.findOneOrFail(this.mailManId);
        return userToBeFound;
    }

    async login(): Promise<string>{
        const userTryingToLogIn = await this.mailManRepo.createQueryBuilder('mailMan').where('mailMan.email = :email', {email: this.email}).getOneOrFail();
        if(bcrypt.compareSync(this.password, userTryingToLogIn.password)){
            console.log('senha correta');
            const token = jwt.sign({ id: userTryingToLogIn.id }, process.env.ENCRIPT_HASH, { expiresIn: '24h'});
            return token;
        }else{
            return 'error';
        }
    }

}
