import React, { Component } from 'react';
import './Login.css';
import LoginInput from '../../components/LoginInput';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <LoginInput />
      </div>
    );
  }
}

export default Login;
