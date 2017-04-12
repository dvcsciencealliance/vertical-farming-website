import React, { Component } from 'react';
import './Login.css';
import Navbar from '../../components/Navbar';
import LoginInput from '../../components/LoginInput';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <Navbar links={[]}/>
        <LoginInput />
      </div>
    );
  }
}

export default Login;
