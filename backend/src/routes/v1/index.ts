import generalController from "../../controller/GeneralController";
import auth from "./AuthRouter";
import language from "./LanguageRouter";
import assessment from "./AssessmentRouter";
import { Router } from "express";

const router = Router();

router.use("/auth", auth);
router.use("/language", language);
router.use("/assessment", assessment);
router.get("/health-check", generalController.health);

export default router;