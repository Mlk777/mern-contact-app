const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const { addUser } = require('../controllers/users');

router
  .route('/')
  .post(
    [
      check('name', 'Name is required').not().isEmpty(),
      check('email', 'Please enter a valid email').isEmail(),
      check(
        'password',
        'Please enter a password with 6 or more characters'
      ).isLength({ min: 6 }),
    ],
    addUser
  );

module.exports = router;
