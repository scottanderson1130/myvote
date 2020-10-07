import React from 'react';
import NavBar from '../components/style-components/NavBar.jsx';
import Greeting from '../components/style-components/Greeting.jsx';

const MySupport = () => {
  return (
    <div className='container'>
      <Greeting />
      <NavBar />
      <p></p>
      <h4 className='center'>MySupport</h4>
      <center>Enter column here</center>
      <ul>
        <li>
          <a href=''>Rideshares</a>
        </li>
        <li>
          <a href=''>Election Info</a>
        </li>
        <li>
          <a href=''>More info</a>
        </li>
      </ul>
    </div>
  );
};

export default MySupport;
