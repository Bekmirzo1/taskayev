import infoController from "@/controllers/infoController";
import { Router } from "express";

const router = Router();


router.post('/info', infoController.changeInfo)
router.get('/info', infoController.showInfo)

export default router;
