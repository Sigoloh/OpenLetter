import { Request, Response } from 'express';
import SubscriberService from '../service/SubscriberService';


export default class SubscriberController{
    async create(request: Request, response: Response){
        try{
            const { mailManId, subscriberEmail } = request.body;
            const subscriberService = new SubscriberService(subscriberEmail, mailManId);
            await subscriberService.create();
            response.status(204).json({
                message: "ok",
            })
        }catch (error){
            console.log(error);
            response.status(500).json({
                message: "error"
            })
        }

    }

    async delete(request: Request, response: Response){
        //TODO: Let subscriber choose from what newsletter to unsubscribe
        try{
            const { unsubscriberEmail } = request.body;
            const subscriberService = new SubscriberService(unsubscriberEmail);
            await subscriberService.delete();
            response.status(200).json({
                message: "ok",
            })
        }catch (error){
            console.log(error);
            response.status(500).json({
                message: "error",
            })
        }
    }

}