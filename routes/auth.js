const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const auth = require('../middleware/auth');

const { getLoggedUser, authUser } = require('../controllers/auth');

router
  .route('/')
  .get(auth, getLoggedUser)
  .post(
    [
      check('email', 'Please enter a valid email').isEmail(),
      check('password', 'Password is required').exists(),
    ],
    authUser
  );

module.exports = router;
