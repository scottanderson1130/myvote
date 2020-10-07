import React from 'react';
import axios from 'axios';
import pledgeBtn from '../../../assets/pledge_btn.png';



class PledgeButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { _id } = this.props.user;
    const { clicked } = this.state;
    if (!clicked) {
      axios.patch(`/api/users/${_id}`)
        .catch(err => console.error('ERROR in axios PATCH: ', err));
      this.setState({ clicked : true });  // if clicked then don't allow the user to click again
    };
  }

  render() {
    return (
      <>
        <img src={pledgeBtn} className='pledge-btn' onClick={this.handleClick} />
      </>
    );
  }
}

export default PledgeButton;