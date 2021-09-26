const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SECRET = process.env.SECRET;

const { User } = require('../models/user.model');

const getUserData = async (req, res) => {
   try {
      const user = req.user;
      res.json({ success: true, user: user });
   } catch (error) {
      res.json({
         success: false,
         message: 'Error getting the user',
         errorMessage: error.message,
      });
   }
};

const handleSignup = async (req, res) => {
   try {
      const { email } = req.body;
      const user = await User.findOne({ email: email });

      if (user) {
         throw new Error('User already exist with this email!');
      }

      const newUser = new User(req.body);
      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(newUser.password, salt);
      await newUser.save();

      res.status(201).json({
         success: true,
         message: 'User signed up!',
      });
   } catch (error) {
      res.status(401).json({
         success: false,
         error: error.message,
      });
   }
};

const handleSignIn = async (req, res) => {
   try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) {
         throw new Error('User does not exist, Please Signup');
      }

      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
         throw new Error('Email or Password does not match');
      }

      const token = jwt.sign({ userId: user._id }, SECRET, {
         expiresIn: '24h',
      });

      res.json({
         success: true,
         token,
      });
   } catch (error) {
      return res.status(401).json({ success: false, error: error.message });
   }
};

module.exports = { getUserData, handleSignup, handleSignIn };
