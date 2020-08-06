const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check } = require('express-validator');

const {
  getContacts,
  addContact,
  editContact,
  deleteContact,
} = require('../controllers/contacts.js');

router
  .route('/')
  .get(auth, getContacts)
  .post(
    [auth, [check('name', 'Name is required').not().isEmpty()]],
    addContact
  );
router
  .route('/:id')
  .put([auth, [check('name', 'Name is required').not().isEmpty()]], editContact)
  .delete(auth, deleteContact);

module.exports = router;
