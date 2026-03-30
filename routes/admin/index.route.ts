import { Router } from "express";
import dashboardRouter from "./dashboard.route";
import articleRouter from "./article.route";

const router = Router();

router.use('/dashboard', dashboardRouter);
router.use('/article', articleRouter);
export default router;

