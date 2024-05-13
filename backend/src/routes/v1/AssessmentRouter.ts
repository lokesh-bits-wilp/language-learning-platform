import { Router } from "express";
import assessmentController from "../../controller/AssessmentController";
import AuthMiddleware from "../../middleware/AuthMiddleware";

const router = Router();

router.get("/user", AuthMiddleware.checkUserInHeader, assessmentController.assessmentByUser);

router.get("/score", AuthMiddleware.checkUserInHeader, assessmentController.getScore);

router.post("/score", AuthMiddleware.checkUserInHeader, assessmentController.saveScore);

export default router;