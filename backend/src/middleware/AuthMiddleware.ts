import { Constants } from "../const/Constants";
import { Request, Response, NextFunction } from "express";
import AppResponse from "../utils/AppResponse";
import { Role } from "../orm/enums";
import jwtMiddleware from "../middleware/JwtMiddleware";

class Middleware {
    static checkUserInHeader(req: Request, res: Response, next: NextFunction) {
        try {
            jwtMiddleware.verifyToken(req, res);
            const email = req.headers.email as string;
            const role = req.headers.role as string;
            
            if (!email) {
                return AppResponse.sendUnauthorized(res, Constants.ErrorMessage.MISSING_AUTHORIZATION_HEADERS);
            } else if (![Role.USER as string].includes(role)) {
                return AppResponse.sendForbidden(res, Constants.ErrorMessage.AUTHORIZATION_FAILED);
            }
            return next();
        } catch (err) {
            return AppResponse.sendErrorResponse(res, err);
        }
    }

    static checkAdminInHeader(req: Request, res: Response, next: NextFunction) {
        try {
            jwtMiddleware.verifyToken(req, res);
            const email = req.headers.email as string;
            const role = req.headers.role as string;

            if (!email) {
                return AppResponse.sendUnauthorized(res, Constants.ErrorMessage.MISSING_AUTHORIZATION_HEADERS);
            } else if (![Role.ADMIN as string].includes(role)) {
                return AppResponse.sendForbidden(res, Constants.ErrorMessage.AUTHORIZATION_FAILED);
            }
            return next();
        } catch (err) {
            return AppResponse.sendErrorResponse(res, err);
        }
    }

}

export default Middleware;
