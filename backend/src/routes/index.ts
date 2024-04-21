import { Router } from "express";
import v1 from "./v1";
import config from "../config";

const router = Router();
router.use(`${config.BASE_URL}/v1`, v1);

export default router;