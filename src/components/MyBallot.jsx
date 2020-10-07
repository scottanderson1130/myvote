import React from 'react';
import NavBar from '../components/style-components/NavBar.jsx';
import Greeting from '../components/style-components/Greeting.jsx';

const MyBallot = () => {
  return (
    <div className='container'>
      <Greeting />
      <NavBar />
      <p></p>
      <h4 className='center'>MyBallot</h4>
      <center>Enter column here</center>
      <ul>
        <li>
          <a href=''>Joe Biden</a>
        </li>
        <li>
          <a href=''>Kamala Harris</a>
        </li>
        <li>
          <a href=''>Sec of state?</a>
        </li>
      </ul>
    </div>
  );
};

export default MyBallot;
