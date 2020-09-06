import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact, setCurrent, clearCurrent } from '../../actions/contact';

const ContactItem = ({ contact, deleteContact, setCurrent, clearCurrent }) => {
  const badge =
    contact.type === 'professional' ? 'bg-green-800' : 'bg-blue-600';

  const onDelete = () => {
    deleteContact(contact._id);
    clearCurrent();
  };
  return (
    <div className='w-full p-3 my-2 md:m-2 flex flex-col bg-white border border-gray-300 rounded-md'>
      <div className='flex justify-between'>
        <p className='text-lg font-semibold italic tracking-wide'>
          {contact.name}
        </p>
        <div
          className={`py-1 px-3 ${badge} text-gray-200 rounded-sm text-sm lg:text-base`}
        >
          {contact.type[0].toUpperCase() + contact.type.slice(1)}
        </div>
      </div>
      <div className='flex flex-col'>
        <div>
          <i className='fas fa-at mr-1' />
          {contact.email}
        </div>
        <div>
          <i className='fas fa-phone-alt mr-1' />
          {contact.phone}
        </div>
      </div>
      <div className='mt-4'>
        <button
          className='px-3 py-1 bg-blue-700 mr-3 rounded'
          type='button'
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button
          className='px-3 py-1 bg-red-600 rounded'
          type='button'
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
  clearCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteContact, setCurrent, clearCurrent })(
  ContactItem
);
