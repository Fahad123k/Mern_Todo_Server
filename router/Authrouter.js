const express= require('express');
const AuthController= require('../controller/authController')
const router= express.Router();


router.post('/register',AuthController.registerUser)
router.get('/login',AuthController.loginUser)


module.exports=router;