declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'production' | 'development';
      MY_PORT: string;
      MY_DB_PORT: string;
      MY_DB_NAME: string;
      MY_DB_USER: string;
      MY_DB_PASSWORD: string;
      MY_DB_HOST: string;
      MY_SECRET_KEY: string;
    }
  }
}

export {};