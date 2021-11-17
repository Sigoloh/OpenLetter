import * as jwt from 'jsonwebtoken';
interface jwt_decoded{
  id: string,
  iat: number,
  exp: number,
}
export function extractJwtInfo (jwt_token: string): jwt_decoded {
  const decodedJwt  = jwt.decode(jwt_token, {json: true})
  return {
    id: decodedJwt.id,
    iat: decodedJwt.iat,
    exp: decodedJwt.exp
  }
}
