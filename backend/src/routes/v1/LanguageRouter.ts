import { Router } from "express";
import languageController from "../../controller/LanguageController";
import AuthMiddleware from "../../middleware/AuthMiddleware";

const router = Router();

router.get("/user", AuthMiddleware.checkUserInHeader, languageController.languageByToken);

router.get("/subscribe/:languageId", AuthMiddleware.checkUserInHeader, languageController.subscribeLanguage);

router.get("/", languageController.languages);

export default router;