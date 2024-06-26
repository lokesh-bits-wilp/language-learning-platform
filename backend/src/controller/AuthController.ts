import { Request, Response } from "express";
import AppResponse from "../utils/AppResponse";
import { Constants } from "../const/Constants";
import logger from "../logger";
import authService from "../service/AuthService";

/**
 * @swagger
 * tags:
 *   name: Language Learning Backend
 *   description: Auth API endpoints for language learning
 */
export class AuthController {
    constructor() { }

    /**
     * @swagger
     * /language-backend/v1/auth/signup:
     *   post:
     *     summary: Signup with email and password.
     *     tags: [Auth]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               email:
     *                 type: string
     *               password:
     *                 type: string
     *               firstName:
     *                 type: string
     *               lastName:
     *                 type: string
     *             required:
     *               - email
     *               - password
     *               - firstName
     *               - lastName
     *           description: User credentials for registration.
     *     responses:
     *       200:
     *         description: Registration successful.
     *       401:
     *         description: Unauthorized, invalid credentials.
     *       500:
     *         description: Internal server error.
     */
    async signup(req: Request, res: Response) {
        const { email, password, firstName, lastName } = req.body;
        try {
            const newUserDetails = await authService.signup(email, password, firstName, lastName);
            return AppResponse.sendOK(
                res,
                newUserDetails,
                Constants.SuccessMessage.REGISTER_SUCCESS
            );
        } catch (err) {
            logger.error(`Error in AuthController:signup = ${err}`);
            return AppResponse.sendErrorResponse(res, err);
        }
    }

    /**
     * @swagger
     * /language-backend/v1/auth/login:
     *   post:
     *     summary: Login with email and password.
     *     tags: [Auth]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               email:
     *                 type: string
     *               password:
     *                 type: string
     *             required:
     *               - email
     *               - password
     *           description: User credentials for authentication.
     *     responses:
     *       200:
     *         description: Login successful.
     *       401:
     *         description: Unauthorized, invalid credentials.
     *       500:
     *         description: Internal server error.
     */
    async login(req: Request, res: Response) {
        const { email, password } = req.body;
        try {
            const { jwToken, userEmail, role } = await authService.login(email, password);
            return AppResponse.sendOK(
                res,
                { jwToken, userEmail, role },
                Constants.SuccessMessage.LOGIN_SUCCESS
            );
        } catch (err) {
            logger.error(`Error in AuthController:login = ${err}`);
            return AppResponse.sendErrorResponse(res, err);
        }
    }

    /**
     * @swagger
     * /language-backend/v1/auth/verify-email/{token}:
     *   put:
     *     summary: Verify user email using a token.
     *     tags: [Auth]
     *     parameters:
     *       - in: path
     *         name: token
     *         required: true
     *         schema:
     *           type: string
     *         description: The verification token received via email.
     *     responses:
     *       200:
     *         description: Email verification successful.
     *       401:
     *         description: Unauthorized, invalid token.
     *       500:
     *         description: Internal server error.
     */
    async verifyEmail(req: Request, res: Response) {
        const { token } = req.params;
        try {
            const response = await authService.verifyEmail(token);
            return AppResponse.sendOK(
                res,
                response,
                Constants.SuccessMessage.VERIFICATION_SUCCESS
            );
        } catch (err) {
            logger.error(`Error in AuthController:verifyEmail = ${err}`);
            return AppResponse.sendErrorResponse(res, err);
        }
    }

    /**
     * @swagger
     * /language-backend/v1/auth/profile:
     *   put:
     *     summary: Update user profile.
     *     tags: [Auth]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               firstName:
     *                 type: string
     *               lastName:
     *                 type: string
     *             required:
     *               - firstName
     *               - lastName
     *           description: User details for update.
     *     responses:
     *       200:
     *         description: Profile update complete.
     *       401:
     *         description: Unauthorized, invalid token.
     *       500:
     *         description: Internal server error.
     */
    async updateProfile(req: Request, res: Response) {
        const email = req.headers.email as string;
        const { firstName, lastName } = req.body;
        try {
            const response = await authService.updateProfile(email, firstName, lastName);
            return AppResponse.sendOK(
                res,
                response,
                Constants.SuccessMessage.PROFILE_UPDATE
            );
        } catch (err) {
            logger.error(`Error in AuthController:updateProfile = ${err}`);
            return AppResponse.sendErrorResponse(res, err);
        }
    }

    /**
     * @swagger
     * /language-backend/v1/auth/user/{email}:
     *   get:
     *     summary: User details from email.
     *     tags: [Auth]
     *     parameters:
     *        - name: email
     *          in: path
     *          description: email of the user
     *          required: true
     *          schema:
     *            type: string
     *     responses:
     *       200:
     *         description: User details.
     *       401:
     *         description: Unauthorized, invalid credentials.
     *       500:
     *         description: Internal server error.
     */
    async user(req: Request, res: Response) {
        const { email } = req.params;
        try {
            const user = await authService.getUser(email);
            return AppResponse.sendOK(
                res,
                user,
                Constants.SuccessMessage.USER_DETAILS
            );
        } catch (err) {
            logger.error(`Error in AuthController:user = ${err}`);
            return AppResponse.sendErrorResponse(res, err);
        }
    }

    /**
     * @swagger
     * /language-backend/v1/auth:
     *   get:
     *     summary: User details from token.
     *     tags: [Auth]
     *     responses:
     *       200:
     *         description: User details.
     *       401:
     *         description: Unauthorized, invalid credentials.
     *       500:
     *         description: Internal server error.
     */
    async userByToken(req: Request, res: Response) {
        const email = req.headers.email as string;
        try {
            const user = await authService.getUser(email);
            return AppResponse.sendOK(
                res,
                user,
                Constants.SuccessMessage.USER_DETAILS
            );
        } catch (err) {
            logger.error(`Error in AuthController:userByToken = ${err}`);
            return AppResponse.sendErrorResponse(res, err);
        }
    }

}
const authController: AuthController = new AuthController();
export default authController;
