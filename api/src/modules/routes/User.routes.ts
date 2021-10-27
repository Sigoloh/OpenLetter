import { Router } from 'express';
import {MailManController} from '../user/controller/MailManController';
import authenticate from '../user/middleware/authentication';
import MailMan from '../user/provider/MailManProvider';

const userRoutes = Router();
const mailManProvider = new MailMan();
const mailManController = new MailManController(mailManProvider);

userRoutes.post('/create', mailManController.create);

userRoutes.patch('/updatePassword', authenticate, mailManController.update);

userRoutes.get('/get/:mailManId', mailManController.get);

userRoutes.post('/login', mailManController.login);

export default userRoutes;