import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import img from '../../assets/signup-image.jpg';
import PropTypes from 'prop-types';
import { register, clearErrors } from '../../actions/auth';
import { setAlert } from '../../actions/alert';

const Register = ({
  history,
  register,
  setAlert,
  isAuthenticated,
  error,
  clearErrors,
}) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = user;

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    register(user);
  };

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
  }, [error, isAuthenticated, history]);
  return (
    <div className='w-full flex flex-col items-center my-2 md:my-0'>
      <div className='max-w-screen-xl w-8/12 md:w-10/12 lg:8/12 rounded-lg border border-gray-300 shadow-md bg-white'>
        <div className='pb-10 pt-16 md:py-20'>
          <div className='flex flex-col md:flex-row items-center'>
            <div className='flex flex-col items-center md:items-start w-full md:ml-12 lg:ml-16 md:pl-6 md:mr-6'>
              <div className='font-serif font-extrabold text-3xl mb-8'>
                Sign up
              </div>
              <form
                onSubmit={handleSubmit}
                className='flex flex-col items-center md:items-start w-full'
                method='post'
              >
                <div className='flex items-center relative mb-6 w-full lg:w-10/12 px-6 md:pl-0 md:pr-0'>
                  <label htmlFor='name' className='absolute'>
                    <i className='fas fa-user fa-xs'></i>
                  </label>
                  <input
                    className='flex justify-center border-b border-gray-500 appearance-none border-gray-700 w-full text-gray-800 py-2 px-6 text-xs font-bold leading-tight focus:outline-none focus:border-blue-300'
                    type='text'
                    name='name'
                    placeholder='Your Name'
                    value={name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className='flex items-center relative mb-6 w-full lg:w-10/12 px-6 md:pl-0 md:pr-0'>
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
                <div className='flex items-center relative mb-12 w-full lg:w-10/12 px-6 md:pl-0 md:pr-0'>
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
                    minLength='6'
                    required
                  />
                </div>
                <button
                  className='bg-blue-400 text-gray-100 py-3 px-8 md:px-8 lg:py-3 lg:px-10 rounded-sm text-xs md:text-sm mb-12 md:mb-0'
                  type='submit'
                >
                  Register
                </button>
              </form>
            </div>

            <div className='w-9/12 md:w-full flex flex-col items-center mx-16 md:mx-12 lg:mx-16'>
              <img
                src={img}
                alt='Painting like desktop with computer on top and plant on the side'
                className='mb-8 mx-12'
              />
              <Link to='/signin' className='text-sm underline text-center'>
                I already got an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func,
  register: PropTypes.func,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
});

export default connect(mapStateToProps, { setAlert, register, clearErrors })(
  Register
);
