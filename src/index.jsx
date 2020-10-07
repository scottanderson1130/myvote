import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/Homepage.jsx';
import Logout from './components/Logout.jsx';
import MyBallot from './components/MyBallot.jsx';
import MyElection from './components/MyElection.jsx';
import MyProfile from './components/MyProfile.jsx';
import MySupport from './components/MySupport.jsx';
import Login from './components/Login.jsx';
import NavBar from './components/style-components/NavBar.jsx';
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={() => (

//   )}/>
// )

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'homepage', // Default page rendered
    };

    // this.changePage = this.changePage.bind(this);
    // this.renderSelectedPage = this.renderSelectedPage.bind(this);
  }

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
  render() {
    return (
      <div className='Index'>
        {/* <Login /> */}
        <br></br>
        <BrowserRouter>
          <div>
            <ul>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/homepage'>Home</Link>
              </li>
              <li>
                <Link to='/myprofile'>MyProfile</Link>
              </li>
              <li>
                <Link to='/myballot'>MyBallot</Link>
              </li>
              <li>
                <Link to='/myelection'>MyElection</Link>
              </li>
              <li>
                <Link to='/mysupport'>MySupport</Link>
              </li>
              <li>
                <Link to='/logout'>Logout</Link>
              </li>
            </ul>
          </div>
          <Route path='/login' component={Login}></Route>
          <Route path='/homepage' component={Homepage}></Route>
          <Route path='/myprofile' component={MyProfile}></Route>
          <Route path='/myballot' component={MyBallot}></Route>
          <Route path='/myelection' component={MyElection}></Route>
          <Route path='/mysupport' component={MySupport}></Route>
          <Route path='/logout' component={Logout}></Route>
          <Route path='/homepage' component={Homepage} />
        </BrowserRouter>
      </div>
    );
  }
}

export default Index;

ReactDOM.render(<Index />, document.getElementById('root'));
