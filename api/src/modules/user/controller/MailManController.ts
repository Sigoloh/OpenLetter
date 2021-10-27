import { CreateRelationShipBetweenMaillersAndSubscribers1634597010566 } from './../../../database/migration/1634597010566-CreateRelationShipBetweenMaillersAndSubscribers';
import { Request, Response } from 'express';
import MailMan from '../provider/MailManProvider';
import MailManService from '../services/MailManService';

export class MailManController{
    constructor(
        private mailManProvider: MailMan,
    ){}
    async create(request: Request, response: Response){
        try{
            const {email, name, password} = request.body;
            const mailManService = new MailManService(name, email, password);
            await mailManService.create();
            response.json({
                message: 'Mensagem'
            });
        }catch (error){
            console.log(error)
            response.json({
                message: 'Error'
            })
        }
    }

    async update(request: Request, response: Response){
        try{
            const { newPassword, mailManId } = request.body;
            const mailManService = new MailManService('', '', '', newPassword, mailManId);
            await mailManService.update();
            response.json({
                message: 'Mensagem'
            })
        } catch (error) {
            console.log(error)
            response.status(500).json({
                message: 'Erro'
            })
        }
    }

    async get(request: Request, response: Response){ 
        try {
           const { mailManId } = request.params;
           const mailManService = new MailManService('', '', '', '', mailManId);
           const foundUser = await mailManService.get()
           response.status(200).json(foundUser);
        } catch (error) {
            response.status(500).json({
                message: "Error"
            })
        }
    }

    async login(request: Request, response: Response){
        try{
            const { email, password } = request.body;
            const mailManService = new MailManService('', email, password);
            const loginUser = await mailManService.login();
            if(loginUser !== 'error'){
                response.status(200).json({
                    message: "ok",
                    token: loginUser
                })
            }else{
                response.status(403).json({
                    message: "ok",
                    token: 'Wrong Password'
                })
            }

        }catch (error){
            console.log(error);
            response.status(500).json({
                message: "error"
            })
        }
    }
}