import { Router } from "express";
import {registerCaptain,loginCaptain,logOutCaptain} from '../controllers/captain.controller.js';

const router = Router();

router.route('/register').post(registerCaptain)
router.route('/login').post(loginCaptain)
router.route('/logout').post(logOutCaptain)

export default router;