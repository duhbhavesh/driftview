const express = require('express');
const {
   handleSignup,
   handleSignIn,
} = require('../controllers/user.controller');
const router = express.Router();

router.post('/signup', handleSignup);
router.post('/signin', handleSignIn);

module.exports = router;
