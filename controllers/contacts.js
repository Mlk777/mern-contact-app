const { validationResult } = require('express-validator');
const Contact = require('../models/Contact');

// @desc    Get all users contact
// @route   Get /api/contacts
// @access  Private
exports.getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server error');
  }
};

// @desc    Add a contact
// @route   POST /api/contacts
// @access  Private
exports.addContact = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, phone, type } = req.body;
  try {
    const contact = new Contact({
      name,
      email,
      phone,
      type,
      user: req.user.id,
    });

    await contact.save();
    res.json(contact);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server error');
  }
};

// @desc    Edit a contact
// @route   PUT /api/contacts/:id
// @access  Private
exports.editContact = async (req, res, next) => {
  const { name, email, phone, type } = req.body;

  const contactFields = {};
  if (name) contactFields.name = name;
  if (email) contactFields.email = email;
  if (phone) contactFields.phone = phone;
  if (type) contactFields.type = type;

  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) return res.status(404).json({ msg: 'Contact not found' });

    contact = await Contact.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: contactFields },
      { new: true }
    );

    res.json(contact);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      res.status(404).json({ msg: 'Contact not found' });
    }
    res.status(500).send('Server Error');
  }
};

// @desc    Delete a contact
// @route   DELETE /api/contacts/:id
// @access  Private
exports.deleteContact = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) return res.status(404).json({ msg: 'Contact not found' });

    await contact.remove();
    res.json({ msg: 'Contact removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Contact not found' });
    }
    res.status(500).send('Server error');
  }
};
