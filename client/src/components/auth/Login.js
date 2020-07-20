import React from 'react';
import img from '../../assets/signin-image.jpg';
import PropTypes from 'prop-types';

const Login = () => {
  const handleSubmit = e => {
    e.preventDefault;
  };
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <div className='max-w-screen-xl w-8/12 md:w-10/12 lg:8/12 rounded-lg border border-gray-300 shadow-md bg-white'>
        <div className='py-10 md:py-20'>
          <div className='flex flex-col-reverse md:flex-row items-center'>
            <div className='w-9/12 md:w-full flex flex-col items-center mx-16 md:mx-12 lg:mx-16'>
              <img
                src={img}
                alt='Painting like person sitted on a chair with a computer on their lap, plant behind'
                className='mb-8 md:mb-12 lg:mb-10'
              />
              <a href='#!' className='text-sm underline text-center'>
                Create an account
              </a>
            </div>
            <div className='flex flex-col items-center md:items-start w-full lg:ml-6 lg:pr-4 md:mr-8'>
              <div className='font-serif font-extrabold text-3xl mb-8'>
                Sign in
              </div>
              <form
                onSubmit={handleSubmit}
                className='flex flex-col items-center md:items-start w-full'
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
                    // onChange={handleInputChange}
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
                    // onChange={handleInputChange}
                    required
                  />
                </div>
                <button className='bg-blue-400 text-gray-100 py-3 px-8 md:px-8 lg:py-3 lg:px-10 rounded-sm text-xs md:text-sm mb-8 md:mb-0'>
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

Login.propTypes = {};

export default Login;
