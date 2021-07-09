const express = require('express');
const { getUserData } = require('../controllers/user.controller');
const {
   handleAuthVerify,
} = require('../middlewares/handleAuthVerify.middleware');

const router = express.Router();

router.get('/user', handleAuthVerify, getUserData);

module.exports = router;
