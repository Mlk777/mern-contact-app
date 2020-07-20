const express = require('express');
const router = express.Router();

const { getLoggedUser, authUser } = require('../controllers/auth');

router.route('/').get(getLoggedUser).post(authUser);

module.exports = router;
