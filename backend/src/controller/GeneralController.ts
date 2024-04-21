import { Request, Response } from "express";
import AppResponse from "../utils/AppResponse";
import { Constants } from "../const/Constants";
import logger from "../logger";
export class GeneralController {
    async health(req: Request, res: Response) {
        try {
            return AppResponse.sendOK(
                res,
                { status: true },
                Constants.SuccessMessage.SERVICE_ACTIVE
            );
        } catch (err) {
            logger.error(`Error in GeneralController:health = ${err}`);
            return AppResponse.sendInternalError(res, err);
        }
    }
}
const generalController: GeneralController = new GeneralController();
export default generalController;
