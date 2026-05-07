import { Router } from "express";
import dashboardRouter from "./dashboard.route";
import articleRouter from "./article.route";
import helperRouter from "./helper.route";
const router = Router();

router.use('/dashboard', dashboardRouter);
router.use('/article', articleRouter);
router.use('/helper', helperRouter);

export default router;

