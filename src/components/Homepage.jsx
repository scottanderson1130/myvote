// import React from 'react';

//////////////////  import bootstrap  ///////////////////////
import { Container, Row, Col} from 'react-bootstrap';

// import ReactDOM from "react-dom";
import moment from 'moment';
import axios from 'axios';
import NavBar from './style-components/NavBar.jsx';
import Greeting from './style-components/Greeting.jsx';
import MyProfile from './MyProfile.jsx';
import MyElection from './MyElection.jsx';
import MyBallot from './MyBallot.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import MySupport from './MySupport.jsx';
import PledgeButton from './style-components/Button.jsx';
import Friends from './Friends.jsx';
import logoLg from '../../assets/myvote_lg.png';

// export default class Homepage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       page: 'homepage', // Default page rendered
//       rating: null,
//       users: [],
//       user: '' // will load the current logged in user unique id ie. _id
//     };

//   changePage(option) {
//     this.setState({
//       page: option,
//     });
//   }

//   renderSelectedPage() {
//     const { page } = this.state;
//     if (page === 'login') {
//       return <Login changePage={this.changePage} />;
//     } else if (page === 'myProfile') {
//       return <MyProfile changePage={this.changePage} />;
//     } else if (page === 'myElection') {
//       return <MyElection changePage={this.changePage} />;
//     } else if (page === 'myBallot') {
//       return <MyBallot changePage={this.changePage} />;
//     } else if (page === 'mySupport') {
//       return <MySupport changePage={this.changePage} />;
//     } else if (page === 'logout') {
//       return <Logout />;
//     } else if (page === 'signup') {
//       return <Signup changePage={this.changePage} />;
//     }
//   }
//   render() {
//     const { page } = this.state;
//     return (
//       <div>
//         <div>
//           <Greeting page={page} />
//           <NavBar changePage={this.changePage} page={page} />
//         </div>
//         <center>
//           <img src={logoLg} />
//         </center>
//         <h1>
//           <center>Welcome to MyVote.</center>
//         </h1>
//         <h3>
//           <center>Election info at your fingertips.</center>
//         </h3>
//         <div className='main'>{this.renderSelectedPage()}</div>
//       </div>
//     );
//   }
// }
// import React from 'react';
// import logoLg from '../../assets/myvote_lg.png';
// import NavBar from './style-components/NavBar.jsx';
// import Greeting from './style-components/Greeting.jsx';

//   componentDidMount() {
//     axios.get('/api/users')
//       .then(users => {
//         const { data } = users;
//         this.setState({
//           users: data,
//           user: data[0]
//         });
//       });

//     axios.get('https://api.wevoteusa.org/apis/v1/deviceIdGenerate')
//       .then(voterInfo => {
//         const { voter_device_id } = voterInfo.data;
//         console.log('voter info', voter_device_id)
//       })
//   }

  // renderSelectedPage() {
  //   const { page } = this.state;
  //   if (page === 'login') {
  //     return <Login changePage={this.changePage} />;
  //   } else if (page === 'myProfile') {
  //     return <MyProfile changePage={this.changePage} />;
  //   } else if (page === 'myElection') {
  //     return <MyElection changePage={this.changePage} />;
  //   } else if (page === 'myBallot') {
  //     return <MyBallot changePage={this.changePage} />;
  //   } else if (page === 'mySupport') {
  //     return <MySupport changePage={this.changePage} />;
  //   } else if (page === 'logout') {
  //     return <Logout />;
  //   } else if (page === 'signup') {
  //     return <Signup changePage={this.changePage} />;
  //   }
  // }

  // render() {
  //   const { page, user, users } = this.state;
  //   return (
  //     <>
  //       <div>
  //         <Greeting page={page} user={user} />
  //         <NavBar changePage={this.changePage} page={page} />
  //       </div>
  //       <div>
  //         <center><img src={logoLg} /></center>
  //       </div>
  //     <Container className='pledge' fluid='sm'>
  //       <Row>
  //         <Col><PledgeButton user={user} /></Col>
  //         <Col><Friends users={users} /></Col>
  //       </Row>
  //     </Container>
  //     </>
      
//     );
//   }
// }
// const Homepage = () => {
//   return (
//     <div className='container'>
//       <Greeting />
//       <NavBar />
//       <p></p>
//       <p>Buttons here</p>
//       <p>Election date here</p>
//       <p>Polling place here</p>
//       <center>
//         <img src={logoLg} />
//       </center>
//     </div>
//   );
// };

// export default Homepage;
