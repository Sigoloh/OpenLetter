declare namespace NodeJS {
    export interface ProcessEnv {
      HOST: string;
      DATABASE_PASSWORD: string;
      DATABASE_NAME: string;
      DATABASE_DEFAULT_DATABASE: string;
      PASSWORD_INICIALIZATION_VECTOR: string;
      ENCRIPT_HASH: string;
      BCRYPT_SALT_ROUND: string;
    }
  }