import { ISubscriber } from "../models/ISubscriber";

export default class SubscriberProvider{
    constructor(){}

    public formatEmail (email: string): string {
        return email;
    }
}