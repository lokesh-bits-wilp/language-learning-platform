import { Router } from "express";
import authController from "../../controller/AuthController";
import AuthMiddleware from "../../middleware/AuthMiddleware";
import authValidator from "../../validation/AuthValidator";

const router = Router();

router.post("/login", authValidator.validatorLogin, authController.login);

router.post("/signup", authValidator.validatorUserRegistration, authController.signup);

router.put("/verify-email/:token", authController.verifyEmail);

router.put("/profile", AuthMiddleware.checkUserInHeader, authController.updateProfile);

router.get("/user/:email", AuthMiddleware.checkUserInHeader, authController.user);

router.get("/", AuthMiddleware.checkUserInHeader, authController.userByToken);

export default router;