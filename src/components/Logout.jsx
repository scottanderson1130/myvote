import React from 'react';
import NavBar from './style-components/NavBar.jsx';

const Logout = () => (
  <div>
    <nav>
      <ul>
        <li>
          <a href='/auth/logout'>Logout</a>
        </li>
        <li>
          <a href='/auth/login'>Login</a>
        </li>
        <li>
          <a href='/auth/signup'>Signup</a>
        </li>
      </ul>
    </nav>
    <header>
      <h1>Logout of Google...</h1>
    </header>
    <main>
      <a className='google-btn' href='/auth/google'>
        Google+
      </a>
    </main>
  </div>
);

export default Logout;
