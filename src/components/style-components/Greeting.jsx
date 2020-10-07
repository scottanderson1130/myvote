import React from 'react';
import logo from '../../../assets/myvote_sm.png';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { firstName } = this.props.user;
    return (
      <div>
        <ul id="user-greeting">
          <li id="logo">
          <img src={logo} width={200} />
            {/* <h2>MyVote</h2> */}
          </li>
          <li id="greet-message">
            {/* hardcoded the first name of the first name in the database */}
            <h2>Welcome, {firstName}! [insert badge]</h2> 
          </li>
        </ul>
      </div>
    );
  }
}


// const Greeting = (props) => (
//   <div>
//     <ul id="user-greeting">
//       <li id="logo">
//       <img src={logo} width={200} />
//         {/* <h2>MyVote</h2> */}
//       </li>
//       <li id="greet-message">
//         <h2>Welcome, {props.user}! [insert badge]</h2>
//       </li>
//     </ul>
//   </div>
// );

export default Greeting;
