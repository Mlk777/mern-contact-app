const mongoose = require('mongoose');

// @desc    Get logged in user
// @route   Get /api/auth
// @access  Private
exports.getLoggedUser = (req, res, next) => {
  res.send('Get logged in user');
};

// @desc    Auth user & get token
// @route   POST /api/auth
// @access  Public
exports.authUser = (req, res, next) => {
  res.send('Log in user');
};
