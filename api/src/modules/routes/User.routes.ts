import { Router } from 'express';
import {MailManController} from '../user/controller/MailManController';
import authenticate from '../user/middleware/authentication';
import MailMan from '../user/provider/MailManProvider';

const userRoutes = Router();
const mailManProvider = new MailMan();
const mailManController = new MailManController(mailManProvider);

userRoutes.post('/create', mailManController.create);

userRoutes.patch('/updatePassword', authenticate, mailManController.update);

userRoutes.get('/get', mailManController.get);

userRoutes.post('/login', mailManController.login);

userRoutes.get('/authenticate', authenticate, mailManController.authenticate)

userRoutes.patch('/setSubMessage', authenticate, mailManController.setSubMessage)

userRoutes.get('/getSubMessage', mailManController.getSubMessage)
export default userRoutes;
