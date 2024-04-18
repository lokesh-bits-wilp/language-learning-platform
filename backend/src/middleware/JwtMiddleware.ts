import { Request, Response, NextFunction } from "express";
import { decode, verify } from "jsonwebtoken";
import { Constants } from "../const/Constants";
import { Role } from "../orm/enums";
import config from "../config";

class JwtMiddleware {
    public verifyToken(req: Request, res: Response) {
        try {
            const header = req.headers.authorization;
            if (!header) {
                throw Constants.ErrorMessage.MISSING_TOKEN;
            }
            const parts = header.split(" ");
            if (parts.length !== 2) {
                throw Constants.ErrorMessage.MISSING_BEARER;
            }
            const scheme = parts[0];
            const token = parts[1];
            if (/^Bearer$/i.test(scheme)) {
                const isVerify = verify(token, config.JWT_SECRET);
                if (!isVerify) {
                    throw Constants.ErrorMessage.TOKEN_EXPIRED;
                }
                const decodeToken = decode(token);

                req.headers["email"] = decodeToken["email"].toString();
                req.headers["role"] = decodeToken["role"] as Role;
                req.headers["companyId"] = decodeToken["companyId"];
                req.headers["companyName"] = decodeToken["companyName"];
                req.headers["organizationType"] = decodeToken["organizationType"].toString();
                return true;
            }
            throw Constants.ErrorMessage.MISSING_BEARER;
        } catch (error) {
            throw Constants.ErrorMessage.MISSING_AUTHORIZATION_HEADERS;
        }
    }

    public verifySystem(req: Request, res: Response) {
        try {
            const header = req.headers.authorization;
            if (!header) {
                throw Constants.ErrorMessage.MISSING_TOKEN;
            }
            const parts = header.split(" ");
            if (parts.length !== 2) {
                throw Constants.ErrorMessage.MISSING_BEARER;
            }
            const scheme = parts[0];
            const token = parts[1];
            if (/^Bearer$/i.test(scheme)) {
                const isVerify = verify(token, config.JWT_SECRET);
                if (!isVerify) {
                    throw Constants.ErrorMessage.TOKEN_EXPIRED;
                }
                const decodeToken = decode(token);

                req.headers["role"] = decodeToken["role"] as Role;
                return true;
            }
            throw Constants.ErrorMessage.MISSING_BEARER;
        } catch (error) {
            throw Constants.ErrorMessage.MISSING_AUTHORIZATION_HEADERS;
        }
    }
}

const jwtMiddleware: JwtMiddleware = new JwtMiddleware();
export default jwtMiddleware;
