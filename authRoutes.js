

const express = require('express');
const passport = require('passport');
const router = express.Router();


const authController = require('../controllers/authController');

router.get('/login', authController.getLoginPage);


router.post('/login', authController.postLogin);


router.get('/signup', authController.getSignupPage);


router.post('/signup', authController.postSignup);


router.get('/logout', authController.logout);

module.exports = router;
