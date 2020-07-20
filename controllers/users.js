const mongoose = require('mongoose');

// @desc    Register a user
// @route   POST /api/users
// @access  Public
exports.addUser = (req, res, next) => {
  res.send('Register a user');
};
