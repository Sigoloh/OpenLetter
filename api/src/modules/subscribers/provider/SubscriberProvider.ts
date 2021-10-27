import { ISubscriber } from "../implementations/ISubscriber";

export default class SubscriberProvider{
    constructor(){}

    public formatEmail (email: string): string {
        return email;
    }
}