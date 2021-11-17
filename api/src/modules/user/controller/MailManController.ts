import { Request, Response } from 'express';
import MailMan from '../provider/MailManProvider';
import MailManService from '../services/MailManService';
import {extractJwtInfo} from '../utils/extractJwtInfo';

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
      console.log(error);
      response.json({
        message: 'Error'
      });
    }
  }

  async update(request: Request, response: Response){
    try{
      const { newPassword, mailManId } = request.body;
      const mailManService = new MailManService('', '', '', newPassword, mailManId);
      await mailManService.update();
      response.json({
        message: 'Mensagem'
      });
    } catch (error) {
      console.log(error);
      response.status(500).json({
        message: 'Erro'
      });
    }
  }

  async get(request: Request, response: Response){ 
    try {
      const [, authorizationHeader] = request.header('Authorization').split(' ');
      const authorizationInfo = extractJwtInfo(authorizationHeader)
      const mailManService = new MailManService('', '', '', '', authorizationInfo.id);
      const foundUser = await mailManService.get();
      response.status(200).json(foundUser);
    } catch (error) {
      console.log(error)
      response.status(500).json({
        message: 'Error'
      });
    }
  }

  async login(request: Request, response: Response){
    try{
      const { email, password } = request.body;
      const mailManService = new MailManService('', email, password);
      const loginUser = await mailManService.login();
      if(loginUser !== 'error'){
        response.header('Set-Cookie',`Authorization=Bearer ${loginUser}`)
        response.status(200).json({
          message: 'ok',
          token: loginUser
        });
      }else{
        response.status(200).json({
          message: 'Ok',
          token: 'Wrong Password'
        });
      }

    }catch (error){
      console.log(error);
      response.status(500).json({
        message: 'error'
      });
    }
  }
  async authenticate(request: Request, response: Response){
    const mailManService = new MailManService()
    const authorizationHeader = request.header('Authorization')
    const authenticationResponse = await mailManService.authenticate(authorizationHeader)
    console.log(authenticationResponse)
    response.status(200).json({
      message: 'Ok',
      authenticated: authenticationResponse,
    })

  }
  async setSubMessage(request: Request, response: Response): Promise<void>{
    const { subMessage } = request.body
    const [, jwtToken] = request.header('Authorization').split(' ') 
    const idFromAuthorization = extractJwtInfo(jwtToken).id
    const mailManService = new MailManService('', '', '', '', subMessage, idFromAuthorization)
    await mailManService.update()
    response.status(200).json({
      message: "ok",
    })
  }
  async getSubMessage(request: Request, response: Response): Promise<void>{
    const [, authorizationHeader] = request.header('Authorization').split(' ');
    const authorizationInfo = extractJwtInfo(authorizationHeader)
    const mailManService = new MailManService('', '', '', '', authorizationInfo.id);
    const subMsg = await mailManService.getSubmessage()
    response.status(200).json({
      message: 'ok',
      subMsg
    })
  }
}
