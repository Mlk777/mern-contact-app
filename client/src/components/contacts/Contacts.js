import React, { useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import Spinner from '../layout/Spinner';
import { getContacts } from '../../actions/contact';

const Contacts = ({ contacts, filtered, getContacts, loading }) => {
  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div
      className={`flex flex-col justify-center w-full ${
        contacts && contacts.length > 0 ? '' : 'h-full'
      }`}
    >
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null ? (
            filtered.map(contact => (
              <CSSTransition key={contact._id} timeout={500} classNames='item'>
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          ) : contacts !== null && contacts.length > 0 ? (
            contacts.map(contact => (
              <CSSTransition key={contact._id} timeout={500} classNames='item'>
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          ) : (
            <div className='text-2xl text-center'>
              No contacts in your list yet
            </div>
          )}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array,
  filtered: PropTypes.array,
  getContacts: PropTypes.func,
};

const mapStateToProps = state => ({
  contacts: state.contacts.contactsList,
  filtered: state.contacts.filtered,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { getContacts })(Contacts);
