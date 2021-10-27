import * as crypto from 'crypto';
export function input(input: string): string{
    const key = crypto.createCipher('aes-128-cbc', process.env.ENCRIPT_HASH);

    let encryptedContent = key.update(input, 'utf8', 'hex');

    return (encryptedContent += key.final('hex'));
}


export function output(input: string): string{
    const key = crypto.createDecipher('aes-128-cbc', process.env.ENCRIPT_HASH);

    let decryptedContent = key.update(input, 'hex', 'utf8');

    return (decryptedContent += key.final('utf8'));
}