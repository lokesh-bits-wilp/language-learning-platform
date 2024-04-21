import { Constants } from "../const/Constants";
import { Response } from "express";

class AppResponse {
    /**
     * Sends a response with the specified data, error message, and HTTP status code.
     * @param res The Express Response object.
     * @param data The data to be sent in response
     * @param error The error message to send (default: "").
     * @param code The HTTP status code to send (default: 200 - OK).
     * @param message The message to send (default: "").
     * @returns The response object.
     */
    static sendResponse(res: Response, data: Object = null, error: Object = null, message: string = "", code: number = Constants.Http.OK) {
        if (typeof error === `string`) {
            message = error;
            error = null;
        }
        return res.status(code).json({
            message,
            data,
            error
        });
    }

    /**
     * Sends a success response with the specified data, error message, and HTTP status code.
     * @param res The Express Response object.
     * @param  body The response data to send.
     * @param message The message to send (default: "").
     * @returns The response object.
     */
    static sendOK(res: Response, body: Object, message: string = "") {
        //sendOK in AppResponse.sendOk
        return this.sendResponse(res, body, null, message, Constants.Http.OK);
    }

    /**
     * Sends a error response with the specified data, error message, and HTTP status code for BAD_REQUEST.
     * @param res The Express Response object.
     * @param  error The error message to send.
     * @param message The message to send (default: "").
     * @returns The response object.
     */
    static sendBadRequest(res: Response, message: string = Constants.ErrorMessage.SOMETHING_WENT_WRONG, error: Object | String | Array<Object> | null = null) {
        return this.sendResponse(res, null, error, message, Constants.Http.BAD_REQUEST)
    }

    /**
     * Sends a error response with the specified data, error message, and HTTP status code for INTERNAL_SERVER_ERROR.
     * @param res The Express Response object.
     * @param  error The error message to send.
     * @param message The message to send (default: "").
     * @returns The response object.
     */
    static sendInternalError(res: Response, error: Object = null, message: string = Constants.ErrorMessage.SOMETHING_WENT_WRONG) {
        if (!message) message = Constants.ErrorMessage.SOMETHING_WENT_WRONG;
        return this.sendResponse(res, null, error, message, Constants.Http.INTERNAL_SERVER_ERROR)
    }

    /**
     * Sends a error response with the specified data, error message, and HTTP status code for INTERNAL_SERVER_ERROR.
     * @param res The Express Response object.
     * @param  error The error message to send.
     * @param message The message to send (default: "").
     * @returns The response object.
     */
    static sendForbidden(res: Response, error: Object, message: string = "") {
        return this.sendResponse(
            res,
            null,
            error,
            message,
            Constants.Http.FORBIDDEN
        );
    }

    /**
     * Sends a error response with the specified data, error message, and HTTP status code for NOT_FOUND.
     * @param res The Express Response object.
     * @param  error The error message to send.
     * @param message The message to send (default: "").
     * @returns The response object.
     */
    static sendNotFound(res: Response, error: Object, message: string = "") {
        return this.sendResponse(
            res,
            null,
            error,
            message,
            Constants.Http.NOT_FOUND
        );
    }

    /**
     * Sends a error response with the specified data, error message, and HTTP status code for UNAUTHORIZED.
     * @param res The Express Response object.
     * @param message The message to send (default: "").
     * @returns The response object.
     */
    static sendUnauthorized(
        res: Response,
        message: string = Constants.ErrorMessage.AUTHORIZATION_FAILED
    ) {
        return this.sendResponse(
            res,
            null,
            null,
            message,
            Constants.Http.UNAUTHORIZED
        );
    }

    /**
     * Sends a error response with the specified data, error message, and HTTP status code for CONFLICT.
     * @param res The Express Response object.
     * @param  error The error message to send.
     * @param message The message to send (default: "").
     * @returns The response object.
     */
    static sendConflict(res: Response, error: Object, message: string = "") {
        return this.sendResponse(
            res,
            null,
            error,
            message,
            Constants.Http.CONFLICT
        );
    }

    /**
     * Sends a error response with the specified data, error message, and HTTP status code for CONFLICT.
     * @param res The Express Response object.
     * @param  error The error message to send.
     * @param message The message to send (default: "").
     * @returns The response object.
     */
    static sendUnprocessableEntity(
        res: Response,
        error: Object,
        message: string = ""
    ) {
        return this.sendResponse(
            res,
            null,
            error,
            message,
            Constants.Http.UNPROCESSABLE_ENTITY
        );
    }

    /**
     * Sends a error response with the specified data, error message, and HTTP status code for CONFLICT.
     * @param res The Express Response object.
     * @param  error The error message to send.
     * @param message The message to send (default: "").
     * @returns The response object.
     */
    static sendPreconditionFailed(
        res: Response,
        error: Object,
        message: string = ""
    ) {
        return this.sendResponse(
            res,
            null,
            error,
            message,
            Constants.Http.PRECONDITION_FAILED
        );
    }

    /**
     * Sends a error response on the basis of error message.
     * @param res The Express Response object.
     * @param error The error message to send.
     * @param message The message to send (default: "").
     * @returns The response object.
     */
    static sendErrorResponse(res: Response, error: any = null, message: string = "") {
        if (error?.validations) {
            this.sendUnprocessableEntity(res, error, message);
            return;
        }

        switch (error) {
            case Constants.ErrorMessage.BAD_REQUEST:
                this.sendBadRequest(res, message, error);
                break;
            case Constants.ErrorMessage.AUTHORIZATION_FAILED:
            case Constants.ErrorMessage.MISSING_AUTHORIZATION_HEADERS:
            case Constants.ErrorMessage.INCORRECT_PASSWORD:
            case Constants.ErrorMessage.INVALID_USER:
                this.sendUnauthorized(res, error);
                break;
            case Constants.ErrorMessage.NO_DATA_FOUND:
                this.sendNotFound(res, error, message);
                break;
            case Constants.ErrorMessage.UNPROCESSABLE_REQUEST:
                this.sendUnprocessableEntity(res, error, message);
                break;
            case Constants.ErrorMessage.SOMETHING_WENT_WRONG:
                this.sendInternalError(res, error, message);
                break;
            default:
                this.sendInternalError(res, error, message);
        }
    }

}

export default AppResponse;
