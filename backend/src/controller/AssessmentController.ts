import { Request, Response } from "express";
import AppResponse from "../utils/AppResponse";
import { Constants } from "../const/Constants";
import logger from "../logger";

/**
 * @swagger
 * tags:
 *   name: Language Learning Backend
 *   description: Language API endpoints for language learning
 */
export class AssessmentController {
    constructor() { }

    /**
     * @swagger
     * /language-backend/v1/assessment/user:
     *   get:
     *     summary: User details from token.
     *     tags: [Assessment]
     *     responses:
     *       200:
     *         description: User assessment details.
     *       401:
     *         description: Unauthorized, invalid credentials.
     *       500:
     *         description: Internal server error.
     */
    async assessmentByUser(req: Request, res: Response) {
        const userId = Number(req.headers.userId);
        const email = req.headers.email as string;
        try {
            return AppResponse.sendOK(
                res,
                "languages",
                Constants.SuccessMessage.LANGUAGE_DETAILS
            );
        } catch (err) {
            logger.error(`Error in AssessmentController:assessmentByUser = ${err}`);
            return AppResponse.sendErrorResponse(res, err);
        }
    }

    /**
     * @swagger
     * /language-backend/v1/assessment/score:
     *   get:
     *     summary: Score details from user.
     *     tags: [Assessment]
     *     responses:
     *       200:
     *         description: Score details from user.
     *       401:
     *         description: Unauthorized, invalid credentials.
     *       500:
     *         description: Internal server error.
     */
    async getScore(req: Request, res: Response) {
        const userId = Number(req.headers.userId);
        const email = req.headers.email as string;
        try {
            return AppResponse.sendOK(
                res,
                "languages",
                Constants.SuccessMessage.LANGUAGE_DETAILS
            );
        } catch (err) {
            logger.error(`Error in AssessmentController:getScore = ${err}`);
            return AppResponse.sendErrorResponse(res, err);
        }
    }

    /**
     * @swagger
     * /language-backend/v1/assessment/score:
     *   post:
     *     summary: User assessment submission.
     *     tags: [Assessment]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               score:
     *                 type: number
     *             required:
     *               - score
     *           description: User score for assessment.
     *     responses:
     *       200:
     *         description: User assessment completed.
     *       401:
     *         description: Unauthorized, invalid credentials.
     *       500:
     *         description: Internal server error.
     */
    async saveScore(req: Request, res: Response) {
        const { score } = req.body;
        try {
            return AppResponse.sendOK(
                res,
                "newUserDetails",
                Constants.SuccessMessage.REGISTER_SUCCESS
            );
        } catch (err) {
            logger.error(`Error in AssessmentController:saveScore = ${err}`);
            return AppResponse.sendErrorResponse(res, err);
        }
    }

}
const assessmentController: AssessmentController = new AssessmentController();
export default assessmentController;
