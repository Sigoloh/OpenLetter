import bodyParser from "body-parser";
import MailMan from "src/modules/user/provider/MailManProvider";

export interface IEmail{
    user: MailMan;
    emailBody: string;
}