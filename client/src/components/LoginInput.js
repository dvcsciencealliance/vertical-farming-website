import React, { Component } from 'react';
import './LoginInput.css';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class LoginInput extends Component {
  state = {
    username: "",
    password: ""
  };

  click() {
    console.log('Clicked');
    fetch('/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    .then((response) => response.json())
    .then((responseJSON) => {
      return responseJSON;
    })
    .catch((error) => {
      console.error(error);
    })
  }

  render() {
    return (
      <div className="LoginInput">
        <TextField
          label="Username"
          onChange={(event) => this.setState({
            username: event.target.value
          })}
        /><br />
        <TextField
          label="Password"
          type="password"
          onChange={(event) => this.setState({
            password: event.target.value
          })}
        />
        <Button onClick={this.click.bind(this)} raised primary>Login</Button>
      </div>
    );
  }
}

export default LoginInput;
