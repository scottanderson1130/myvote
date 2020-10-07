import React from 'react';
import Greeting from './style-components/Greeting.jsx';

const Signup = () => (
  <div className='signup-form'>
    <form>
      <label>
        Email:
        <input type='text' name='name' />
      </label>
      <p></p>
      <label>
        Password:
        <input type='text' name='name' />
      </label>
      <input type='submit' value='Submit' />
    </form>
    <main>
      <a className='google-btn' href='/auth/google'>
        Sign up with Google+
      </a>
    </main>
  </div>
);

export default Signup;
