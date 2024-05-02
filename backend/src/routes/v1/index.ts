import generalController from "../../controller/GeneralController";
import auth from "./AuthRouter";
import language from "./LanguageRouter";
import { Router } from "express";

const router = Router();

router.use("/auth", auth);
router.use("/language", language);
router.get("/health-check", generalController.health);

export default router;