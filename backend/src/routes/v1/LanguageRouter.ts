import { Router } from "express";
import languageController from "../../controller/LanguageController";
import AuthMiddleware from "../../middleware/AuthMiddleware";
import authValidator from "../../validation/AuthValidator";

const router = Router();

router.get("/user", AuthMiddleware.checkUserInHeader, languageController.languageByToken);

router.get("/", languageController.languages);

export default router;