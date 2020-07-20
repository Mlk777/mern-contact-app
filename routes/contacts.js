const express = require('express');
const router = express.Router();

const {
  getContacts,
  addContact,
  editContact,
  deleteContact,
} = require('../controllers/contacts.js');

router.route('/').get(getContacts).post(addContact);
router.route('/:id').put(editContact).delete(deleteContact);

module.exports = router;
