import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

class Friends extends Component {
  constructor(props) {
    super(props);

    this.state ={
      search: '',
      friend: ''
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.keyClick = this.keyClick.bind(this);
  }

  handleSearch(e) {
    this.setState({
      search: e.target.value
    });
  }

  keyClick(e) {
    const { search } = this.state;
    const { users } = this.props;

    if (e.which === 13) {
     users.forEach(user => {
       if (search === user.email) {
        this.setState({ friend: user });
       }
      });
    }

  }

  render() {
    const { search, friend } = this.state;
    return(
      <Container>
        <Row>
          <h3>{friend.firstName}</h3>
        </Row>
        <Row>
          <input 
            type='text' 
            placeholder='find a friend' 
            value={search} 
            onChange={this.handleSearch} 
            onKeyDown={this.keyClick}
          />
        </Row>
      </Container>
    );
  }
}

export default Friends;