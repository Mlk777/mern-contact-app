import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Contacts from './contacts/Contacts';
import ContactForm from './contacts/ContactForm';
import ContactFilter from './contacts/ContactFilter';
import { loadUser } from '../actions/auth';

const Home = ({ loadUser }) => {
  useEffect(() => {
    loadUser();
  }, []);
  return (
    <div className='container lg:max-w-screen-xl flex flex-col md:flex-row mx-auto px-4 md:px-0 lg:px-10'>
      <div className='md:grid grid-cols-2 col-gap-3 mb-6'>
        <ContactForm />
        <div className='mt-8 lg:mt-0'>
          <ContactFilter />
          <Contacts />
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  loadUser: PropTypes.func.isRequired,
};

export default connect(null, { loadUser })(Home);
