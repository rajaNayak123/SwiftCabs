import { Router } from "express";

import {
    registerUser,
    loginUser,
    logoutUser,
    userProfile
} from '../controllers/user.controller.js'

import { verifyUser } from "../middlewars/auth.middlewar.js";

const router = Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').post(verifyUser,logoutUser);
router.route('/profile').get(verifyUser,userProfile)

export default router;