//here we create user routes

import express from 'express';
import { loginController, registerControler } from '../../controllers/auth/auth-controller.js';

//router object
const router = express.Router();


// routes
// 1- register
router.post('/register', registerControler );

// 2- Login
router.post('/login',loginController);


//export
export default router;