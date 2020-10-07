import React from 'react';
import NavBar from '../components/style-components/NavBar.jsx';
import Greeting from '../components/style-components/Greeting.jsx';

const MyElection = () => {
  return (
    <div className='container'>
      <Greeting />
      <NavBar />
      <p></p>
      <h4 className='center'>MyElection</h4>
      <center>I choose u Pikachu</center>
    </div>
  );
};

export default MyElection;
