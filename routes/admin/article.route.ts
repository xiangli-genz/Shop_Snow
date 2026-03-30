import { Router } from "express";
import * as articleController from "../../controllers/admin/article.controller";

const router = Router();

router.get('/category', articleController.category);
router.get('/category/create', articleController.createCategory);

export default router;