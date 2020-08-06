import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import img from '../../assets/signin-image.jpg';
import PropTypes from 'prop-types';
import { login, clearErrors } from '../../actions/auth';
import { setAlert } from '../../actions/alert';

const Login = ({
  history,
  isAuthenticated,
  error,
  login,
  setAlert,
  clearErrors,
}) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;
  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    login(user);
  };

  useEffect(() => {
    if (isAuthenticated) return history.push('/');
    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
  }, [isAuthenticated, error, history]);
  return (
    <div className='w-full flex flex-col items-center my-2 md:my-0'>
      <div className='max-w-screen-xl w-8/12 md:w-10/12 lg:8/12 rounded-lg border border-gray-300 shadow-md bg-white'>
        <div className='py-10 md:py-16'>
          <div className='flex flex-col-reverse md:flex-row items-center'>
            <div className='w-9/12 md:w-full flex flex-col items-center mx-16 md:mx-12 lg:mx-16'>
              <img
                src={img}
                alt='Painting like person sitted on a chair with a computer on their lap, plant behind'
                className='mb-8 md:mb-12 lg:mb-10'
              />
              <Link to='/signup' className='text-sm underline text-center'>
                Create an account
              </Link>
            </div>
            <div className='flex flex-col items-center md:items-start w-full lg:ml-6 lg:pr-4 md:mr-8'>
              <div className='font-serif font-extrabold text-3xl mb-8'>
                Sign in
              </div>
              <form
                onSubmit={handleSubmit}
                className='flex flex-col items-center md:items-start w-full'
                method='post'
              >
                <div className='flex items-center relative mb-6 w-full px-6 md:pl-0 md:pr-0'>
                  <label htmlFor='email' className='absolute'>
                    <i className='fas fa-envelope fa-xs'></i>
                  </label>
                  <input
                    className='flex justify-center border-b border-gray-500 appearance-none border-gray-700 w-full text-gray-800 py-2 px-6 text-xs font-bold leading-tight focus:outline-none focus:border-blue-300 '
                    type='email'
                    name='email'
                    placeholder='Your Email'
                    value={email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='flex items-center relative mb-10 w-full px-6 md:pl-0 md:pr-0'>
                  <label htmlFor='password' className='absolute'>
                    <i className='fas fa-lock fa-xs'></i>
                  </label>
                  <input
                    className='flex justify-center border-b border-gray-500 appearance-none border-gray-700 w-full text-gray-800 py-2 px-6 text-xs font-bold leading-tight focus:outline-none focus:border-blue-300'
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  className='bg-blue-400 text-gray-100 py-3 px-8 md:px-8 lg:py-3 lg:px-10 rounded-sm text-xs md:text-sm mb-8 md:mb-0'
                  type='submit'
                >
                  Log in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  setAlert: PropTypes.func,
  login: PropTypes.func,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
});

export default connect(mapStateToProps, { login, setAlert, clearErrors })(
  Login
);
