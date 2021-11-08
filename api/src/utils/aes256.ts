import * as crypto from 'crypto';
import * as dotenv from 'dotenv';
dotenv.config();

export function input(input: string): string{
  const bufferIv = Buffer.from(process.env.PASSWORD_INICIALIZATION_VECTOR, 'hex');
  const bufferKey = Buffer.from(process.env.ENCRIPT_HASH, 'hex');
  const bufferInput = Buffer.from(input);
  const cipher = crypto.createCipheriv('aes-256-cbc', bufferKey, bufferIv);
  let encrypted = cipher.update(bufferInput); 
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return (encrypted.toString('hex'));
}


export function output(input: string): string{
  console.log(`input pra decrypt = ${input}`);
  const bufferIv = Buffer.from(process.env.PASSWORD_INICIALIZATION_VECTOR, 'hex');
  const bufferKey = Buffer.from(process.env.ENCRIPT_HASH, 'hex');
  const bufferInput = Buffer.from(input, 'hex');
  console.log(`BufferInput = ${bufferInput}`);
  const decipher = crypto.createDecipheriv('aes-256-cbc', bufferKey, bufferIv);
  let decrypted = decipher.update(bufferInput);
  decrypted = Buffer.concat([decrypted, decipher.final()]); 

  return decrypted.toString();
}