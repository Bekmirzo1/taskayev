import infoController from "@/controllers/infoController";
import userController from "@/controllers/userController";
import authMiddlware from "@/middleware/authMiddlware";
import { Router } from "express";
// import multer from "multer";
// const upload = multer();
const router = Router();


router.post('/info', infoController.changeInfo)
router.get('/info', infoController.showInfo)
router.post('/login', userController.login)
router.post('/registration', userController.registraiton)
router.get('/check', authMiddlware(process.env.MY_ROLE_ADMIN), userController.check)
router.post('/users', authMiddlware(process.env.MY_ROLE_ADMIN), userController.getAll)

export default router;
