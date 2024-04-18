import generalController from "../../controller/GeneralController";
import auth from "./AuthRouter";
import { Router } from "express";

const router = Router();

router.use("/auth", auth);
router.get("/health-check", generalController.health);

export default router;