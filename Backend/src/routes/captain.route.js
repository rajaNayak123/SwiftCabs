import { Router } from "express";
import {
    registerCaptain,
    loginCaptain,
    logOutCaptain,
    captainProfile
} from '../controllers/captain.controller.js';

import {verifyCaptain} from '../middlewars/auth.middlewar.js'
const router = Router();

router.route('/register').post(registerCaptain)
router.route('/login').post(loginCaptain)
router.route('/profile').get(verifyCaptain,captainProfile)
router.route('/logout').post(verifyCaptain,logOutCaptain)


export default router;