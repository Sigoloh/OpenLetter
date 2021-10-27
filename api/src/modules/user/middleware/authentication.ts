import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

export default async function authenticate(request: Request, response: Response, next: NextFunction){
    const [, token] = request.headers.authorization.split(' ');
    jwt.verify(token, process.env.ENCRIPT_HASH, (err, payload) => {
        if (!err) {
          console.log(payload.id);
          if(request.body.mailManId === payload.id){
            next();
          }else{
              return response.status(403).json({
                  message: "Invalid token for provided user"
              })
          }
        } else {
           return response.status(403).json(err);
        }
      });
}