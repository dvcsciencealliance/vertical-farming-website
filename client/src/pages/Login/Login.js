import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import './Login.css';
import Navbar from '../../components/Navbar';
import LoginInput from '../../components/LoginInput';
import checkAuthenticity from '../../lib/checkAuthenticity';

class Login extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  componentWillMount() {
    const token = localStorage.dvcvertfarmingtoken;
    checkAuthenticity(token, function(success) {
      if (success) {
        this.props.history.push('/admin');
      }
    });
  }

  render() {
    return (
      <div className="Login">
        <Navbar
        title="DVC Vertical Farming"
        links={[]}/>
        <LoginInput />
      </div>
    );
  }
}

export default withRouter(Login);
