import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { logout } from '../../actions/auth';
import { clearContacts } from '../../actions/contact';

const SignedInLinks = ({ logout, user, clearContacts, isVisible }) => {
  const onLogout = () => {
    logout();
    clearContacts();
  };
  return (
    <ul
      className={`w-full flex flex-col items-center md:flex-row lg:mr-4 md:w-auto ${
        isVisible ? '' : 'hidden'
      }  
      `}
    >
      <li className='hidden md:flex text-xl tracking-widest rounded-full font-semibold text-blue-300 hover:text-blue-500 mr-6 mt-4 md:mt-0'>
        Welcome {user && user.name}
      </li>
      <li onClick={onLogout}>
        <NavLink
          to=''
          className='inline-block text-xl font-extrabold text-teal-900 hover:text-red-600 mt-4 md:mt-0'
        >
          <i className='fas fa-sign-out-alt mr-1' />
          Log Out
        </NavLink>
      </li>
    </ul>
  );
};

SignedInLinks.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { logout, clearContacts })(
  SignedInLinks
);
