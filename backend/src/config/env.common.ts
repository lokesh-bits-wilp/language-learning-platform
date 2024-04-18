export default {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    BASE_URL: process.env.BASE_URL,
    
    SWAGGER_DOCS_ENABLED: process.env?.SWAGGER_DOCS_ENABLED?.toString()?.trim() === "true",

    //DB
    POSTGRES_HOST: process.env.PG_HOST,
    POSTGRES_PORT: process.env.PG_PORT,
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_DB: process.env.POSTGRES_DB,

    //jwt
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRATION: process.env.JWT_EXPIRATION,
    EMAIL_VERIFICATION_EXPIRY_TIME: process.env.EMAIL_VERIFICATION_EXPIRY_TIME,

};