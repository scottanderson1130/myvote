import React from 'react';
import NavBar from './style-components/NavBar.jsx';
import Greeting from './style-components/Greeting.jsx';

const MyProfile = () => {
  return (
    <div className='container'>
      <Greeting />
      <NavBar />
      <p></p>
      <h4 className='center'>MyProfile</h4>
      <center>Enter column here</center>
    </div>
  );
};

export default MyProfile;
