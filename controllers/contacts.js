const mongoose = require('mongoose');

// @desc    Get all users contact
// @route   Get /api/contacts
// @access  Private
exports.getContacts = (req, res, next) => {
  res.send('Get all contacts');
};

// @desc    Add a contact
// @route   POST /api/contacts
// @access  Private
exports.addContact = (req, res, next) => {
  res.send('Add new contact');
};

// @desc    Edit a contact
// @route   PUT /api/contacts/:id
// @access  Private
exports.editContact = (req, res, next) => {
  res.send('Edit a contact');
};

// @desc    Delete a contact
// @route   DELETE /api/contacts/:id
// @access  Private
exports.deleteContact = (req, res, next) => {
  res.send('Delete a contact');
};
