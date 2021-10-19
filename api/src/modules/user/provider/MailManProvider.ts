import { IMailMan } from '../implementations/IMailManProvider';
export default class MailMan {
    public formatMailMan(email: string, name: string, password: string): IMailMan{
        return {
            email,
            name,
            password
        };
    }
}