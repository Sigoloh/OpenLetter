import { IMailMan } from '../implementations/IMailManProvider';
import * as bcrypt from 'bcrypt';
export default class MailMan {
    public formatMailMan(email: string, name: string, password: string): IMailMan{
        const salt = bcrypt.genSaltSync(10);

        return {
            email,
            name,
            password: bcrypt.hashSync(password, salt),
        }
    }

    public updatePassword(password: string){
        return password;
    }
}