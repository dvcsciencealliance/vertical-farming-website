import React, { Component } from 'react';
import './LoginInput.css';
import FormControl from 'material-ui/Form/FormControl';
import TextField from 'material-ui/TextField';

class LoginInput extends Component {
  render() {
    return (
      <div className="LoginInput">
        <TextField
          label="Username"
        /><br />
        <TextField
          label="Password"
          type="password"
        />
      </div>
    );
  }
}

export default LoginInput;
