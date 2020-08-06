import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addContact, clearCurrent, updateContact } from '../../actions/contact';
import PropTypes from 'prop-types';

const ContactForm = ({ addContact, updateContact, current, clearCurrent }) => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });

  const { name, email, phone, type } = contact;

  const onChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearCurrent();
  };

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      });
    }
    //eslint-disable-next-line
  }, [current]);
  return (
    // <div className='w-10/12 flex flex-col p-3 m-2 border border-gray-400 rounded'>
    <div className='w-full flex flex-col border border-gray-300 p-2 md:p-0 md:border-gray-100 rounded'>
      <h1 className='text-2xl text-center font-medium mb-4'>
        {current ? 'Edit Contact' : 'Add Contact'}
      </h1>
      <form className='w-full' onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          value={name}
          placeholder='Name'
          onChange={onChange}
          className='w-full py-1 px-2 mb-3 border border-gray-200 focus:border-red-600 rounded'
          required
        />
        <input
          type='text'
          name='email'
          value={email}
          placeholder='Email'
          onChange={onChange}
          className='w-full py-1 px-2 mb-3 border border-gray-300 rounded'
        />
        <input
          type='text'
          name='phone'
          value={phone}
          placeholder='Phone'
          onChange={onChange}
          className='w-full py-1 px-2 mb-3 border border-gray-300 rounded'
        />
        <div className='mb-6'>
          <h5 className='text-lg font-medium mb-2'>Contact Type</h5>
          <input
            type='radio'
            name='type'
            value='personal'
            className='mr-1'
            checked={type === 'personal'}
            onChange={onChange}
          />
          <label htmlFor='personal' className='mr-4'>
            Personal
          </label>
          <input
            type='radio'
            name='type'
            value='professional'
            className='mr-1'
            checked={type === 'professional'}
            onChange={onChange}
          />
          <label htmlFor='professional' className=''>
            Professional
          </label>
        </div>
        <button className='w-full bg-blue-500 py-2 px-4 rounded' type='submit'>
          {current ? 'Update Contact' : 'Add Contact'}
        </button>
        {current && current ? (
          <button
            className='w-full bg-gray-500 py-2 px-4 mt-2 rounded'
            type='button'
            onClick={() => clearCurrent()}
          >
            Clear
          </button>
        ) : (
          ''
        )}
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  contactsList: PropTypes.array,
  current: PropTypes.object,
  addContact: PropTypes.func.isRequired,
  updateContact: PropTypes.func.isRequired,
  clearCurrent: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contactsList: state.contacts.contactsList,
  current: state.contacts.current,
});

export default connect(mapStateToProps, {
  addContact,
  clearCurrent,
  updateContact,
})(ContactForm);
