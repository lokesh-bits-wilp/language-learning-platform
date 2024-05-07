import { Request, Response } from "express";
import AppResponse from "../utils/AppResponse";
import { Constants } from "../const/Constants";
import logger from "../logger";
import languageService from "../service/LanguageService";

/**
 * @swagger
 * tags:
 *   name: Language Learning Backend
 *   description: Language API endpoints for language learning
 */
export class LanguageController {
    constructor() { }

    /**
     * @swagger
     * /language-backend/v1/language/user:
     *   get:
     *     summary: Language details from token.
     *     tags: [Language]
     *     responses:
     *       200:
     *         description: Language details.
     *       401:
     *         description: Unauthorized, invalid credentials.
     *       500:
     *         description: Internal server error.
     */
    async languageByToken(req: Request, res: Response) {
        const userId = Number(req.headers.userId);
        const email = req.headers.email as string;
        try {
            const languages = await languageService.getLanguageByUser(email, userId);
            return AppResponse.sendOK(
                res,
                languages,
                Constants.SuccessMessage.LANGUAGE_DETAILS
            );
        } catch (err) {
            logger.error(`Error in LanguageController:languageByToken = ${err}`);
            return AppResponse.sendErrorResponse(res, err);
        }
    }

    /**
     * @swagger
     * /language-backend/v1/language/subscribe/{languageId}:
     *   get:
     *     summary: Subscribe to a language.
     *     tags: [Language]
     *     parameters:
     *       - in: path
     *         name: languageId
     *         required: true
     *         schema:
     *           type: string
     *         description: The language Id to subscribe.
     *     responses:
     *       200:
     *         description: Subscribe to language.
     *       401:
     *         description: Unauthorized, invalid credentials.
     *       500:
     *         description: Internal server error.
     */
    async subscribeLanguage(req: Request, res: Response) {
        const userId = Number(req.headers.userId);
        const languageId = Number(req.params.languageId);
        try {
            const user = await languageService.subscribeLanguage(userId, languageId);
            return AppResponse.sendOK(
                res,
                user,
                Constants.SuccessMessage.LANGUAGE_SUBSCRIBE
            );
        } catch (err) {
            logger.error(`Error in LanguageController:subscribeLanguage = ${err}`);
            return AppResponse.sendErrorResponse(res, err);
        }
    }

    /**
     * @swagger
     * /language-backend/v1/language:
     *   get:
     *     summary: Language details.
     *     tags: [Language]
     *     responses:
     *       200:
     *         description: Language details.
     *       401:
     *         description: Unauthorized, invalid credentials.
     *       500:
     *         description: Internal server error.
     */
    async languages(req: Request, res: Response) {
        try {
            const languages = await languageService.getLanguages();
            return AppResponse.sendOK(
                res,
                languages,
                Constants.SuccessMessage.LANGUAGE_DETAILS
            );
        } catch (err) {
            logger.error(`Error in LanguageController:languages = ${err}`);
            return AppResponse.sendErrorResponse(res, err);
        }
    }

}
const languageController: LanguageController = new LanguageController();
export default languageController;
