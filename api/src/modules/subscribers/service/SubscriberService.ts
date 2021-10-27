import { getRepository } from 'typeorm';
import { ISubscriber } from "../implementations/ISubscriber";
import  Subscribers  from "../../../entity/Subscribers";
import SubscriberProvider from '../provider/SubscriberProvider';
import mailMan from '../../../entity/UserModel';
import MainManService from '../../user/services/MailManService';
import { input } from '../../../utils/aes256';

export default class SubscriberService{
    constructor(
        private email: string,
        private mailManAssociatedId?: string,
    ){

    }

    private mailManService = new MainManService('', '', '', '', this.mailManAssociatedId);

    private subscriberRepo = getRepository(Subscribers); 

    private subscriberProvider = new SubscriberProvider();


    // Todo: Acabar essa parte
    public async create(): Promise<void>{
        const newSubscriber = {} as Subscribers;
        newSubscriber.email =  input(this.subscriberProvider.formatEmail(this.email));
        const mailMan = await this.mailManService.get();
        newSubscriber.subscribed = mailMan;
        console.log(newSubscriber);
        await this.subscriberRepo.save(newSubscriber);
    }

    public async delete(): Promise<void>{
        const userToBeDeleted = await this.subscriberRepo.createQueryBuilder('subscriber').where('subscriber.email = :email', {email: input(this.email)}).getOneOrFail();
        console.log(userToBeDeleted);
        console.log(await this.subscriberRepo.delete(userToBeDeleted.id));
    }
}