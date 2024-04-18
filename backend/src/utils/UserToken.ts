import crypto from "crypto";
import jwt from "jsonwebtoken";
import logger from "../logger";
import { JwtPayload } from "../types/JwtPayload";
import config from "../config"
import { Constants } from "../const/Constants";

class UserTokenUtility {
    private algorithm: string;
    private iv: string;
    private key: Buffer;

    constructor() {
        this.algorithm = "aes-256-cbc";
        this.key = crypto.randomBytes(32);
        this.iv = config.PRE_LOGIN_CIPHER_IV;
    }

    async generateUserToken(tokenKey: string): Promise<string> {
        try {
            const expiryTime = Date.now() + parseInt(config.EMAIL_VERIFICATION_EXPIRY_TIME);
            const tokenToSign = `${tokenKey}-${expiryTime}`;
            return this.encrypt(tokenToSign);
        } catch (err) {
            throw Constants.ErrorMessage.BAD_REQUEST;
        }
    }

    async createJwtToken(payload: JwtPayload, expiry = config.JWT_EXPIRATION): Promise<string> {
        return jwt.sign(payload, config.JWT_SECRET, {
            expiresIn: expiry,
        });
    };

    async verifyJwtToken(token: string) {
        try {
            return jwt.verify(token, config.JWT_SECRET);
        } catch (error) {
            throw Constants.ErrorMessage.MISSING_AUTHORIZATION_HEADERS;
        }
    };

    encrypt(plainText: string, password: string = config.JWT_SECRET) {
        try {
            const iv = crypto.randomBytes(16);
            const key = crypto.createHash('sha256').update(password).digest('base64').substr(0, 32);
            const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
            let encrypted = cipher.update(plainText);
            encrypted = Buffer.concat([encrypted, cipher.final()])
            return iv.toString('hex') + '-' + encrypted.toString('hex');
        } catch (err) {
            logger.error(`[encrypt] ${err.stack || err}`);
            return null;
        }
    }

    decrypt(encryptedText: string, password: string = config.JWT_SECRET) {
        try {
            const textParts = encryptedText.split('-');
            const iv = Buffer.from(textParts.shift(), 'hex');
            const encryptedData = Buffer.from(textParts.join('-'), 'hex');
            const key = crypto.createHash('sha256').update(password).digest('base64').substr(0, 32);
            const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
            const decrypted = decipher.update(encryptedData);
            const decryptedText = Buffer.concat([decrypted, decipher.final()]);
            return decryptedText.toString();
        } catch (err) {
            logger.error(`[decrypt] ${err.stack || err}`);
            return null;
        }

    }

}

const userTokenUtility: UserTokenUtility = new UserTokenUtility();
export default userTokenUtility;

