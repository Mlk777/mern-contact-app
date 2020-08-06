import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { filterContacts, clearFilter } from '../../actions/contact';
import PropTypes from 'prop-types';

const ContactFilter = ({ filtered, filterContacts, clearFilter }) => {
  const text = useRef('');

  const onChange = e => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });
  return (
    <form>
      <input
        type='text'
        ref={text}
        name=''
        placeholder='Filter Contacts...'
        onChange={onChange}
        className='w-full py-1 px-2 mb-2 md:m-2 border border-gray-300 rounded-md'
      />
    </form>
  );
};

ContactFilter.propTypes = {
  filtered: PropTypes.array,
  filterContacts: PropTypes.func,
  clearFilter: PropTypes.func,
};

const mapStateToProps = state => ({
  filtered: state.contacts.filtered,
});

export default connect(mapStateToProps, { filterContacts, clearFilter })(
  ContactFilter
);
