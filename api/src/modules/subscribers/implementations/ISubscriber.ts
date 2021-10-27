import mailMan from "../../../entity/UserModel";

export interface ISubscriber {
    email: string;
    subscribedId: mailMan;
}