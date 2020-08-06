import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = ({ title, isAuthenticated }) => {
  const [isVisible, setIsVisible] = useState(true);

  const links = isAuthenticated ? (
    <SignedInLinks isVisible={isVisible} />
  ) : (
    <SignedOutLinks isVisible={isVisible} />
  );

  const toggle = e => {
    setIsVisible(!isVisible);
  };
  return (
    <nav className='flex flex-col justify-center md:flex-row items-center md:justify-between flex-wrap border-b-2 border-opacity-25 border-blue-300 p-4 md:mb-2'>
      <Link
        to='/'
        className='ml-2 mb-4 md:mb-0 md:mr-auto font-semibold text-3xl text-blue-400 tracking-wide'
      >
        <i className='fas fa-address-book mr-1'></i>
        {title}
      </Link>
      <div className='block md:hidden'>
        <button
          className='flex items-center px-3 py-2 border rounded text-blue-200 border-blue-200 hover:text-blue-500 hover:border-blue-300'
          onClick={toggle}
        >
          <svg
            className='fill-current h-3 w-3'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>
      {links}
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'Contact Keeper',
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps)(Navbar);
