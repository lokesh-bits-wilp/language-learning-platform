import { Response } from "express";
import { Constants } from "../const/Constants";
import AppResponse from "../utils/AppResponse";

export interface ValidationError {
    field: string;
    message?: string;
}

export class GeneralValidator {
    /**
     * general function to return api error response
     * @return {ResponseInterface}
     */
    public error(res: Response, errors: object) {
        const validations: ValidationError[] = [];
        for (const error in errors) {
            validations.push({ field: error, message: errors[error]?.message });
        }
        return AppResponse.sendErrorResponse(
            res,
            { validations },
            Constants.ErrorMessage.UNPROCESSABLE_REQUEST
        );
    }

    public customStringError(res: Response, error: string) {
        return AppResponse.sendErrorResponse(
            res,
            error,
            Constants.ErrorMessage.UNPROCESSABLE_REQUEST
        );
    }
}

const generalValidator: GeneralValidator = new GeneralValidator();
export default generalValidator;
