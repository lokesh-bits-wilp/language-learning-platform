import { Router } from "express";
import authController from "../../controller/AuthController";
import AuthMiddleware from "../../middleware/AuthMiddleware";
import authValidator from "../../validation/AuthValidator";

const router = Router();

router.post("/login", authValidator.validatorLogin, authController.login);

router.post("/signup", authValidator.validatorUserRegistration, authController.signup);

router.patch("/verify-email/:token", authController.verifyEmail)

export default router;