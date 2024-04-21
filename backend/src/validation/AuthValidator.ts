import { Request, Response, NextFunction } from "express";
import baseValidator from "./BaseValidator";
import generalValidator from "./GeneralValidator";

export class AuthValidator {

    async validatorUserRegistration(req: Request, res: Response, next: NextFunction) {
        const valid = new baseValidator.Validator({ ...req.body }, {
            "email": `required|email`,
            "password": `required|string|isValidPassword`
        });
        const matched = await valid.check();
        if (!matched) {
            return generalValidator.error(res, valid.errors);
        }
        return next();
    }

    async validatorLogin(req: Request, res: Response, next: NextFunction) {
        const valid = new baseValidator.Validator({ ...req.body }, {
            "email": `required|email`,
            "password": `required|string|isValidPassword`
        });
        const matched = await valid.check();
        if (!matched) {
            return generalValidator.error(res, valid.errors);
        }
        return next();
    }

    async validatorVerifyEmail(req: Request, res: Response, next: NextFunction) {
        const valid = new baseValidator.Validator({ ...req.params }, {
            "token": `required|string`,
        });
        const matched = await valid.check();
        if (!matched) {
            return generalValidator.error(res, valid.errors);
        }
        return next();
    }
}
const authValidator: AuthValidator = new AuthValidator();
export default authValidator;
