import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import './LoginInput.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class LoginInput extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  state = {
    username: "",
    password: ""
  };

  login(event) {
    if (event.key && event.key != "Enter") {
      return;
    }
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
      localStorage.dvcvertfarmingtoken = responseJSON.token;
      if (responseJSON.success) {
        console.log('Success!');
        this.props.history.push('/admin');
      } else {
        this.props.history.push('/login');
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <div className="LoginInput">
        <TextField
          floatingLabelText="Username"
          onChange={(event) => this.setState({
            username: event.target.value
          })}
          onKeyPress={this.login.bind(this)}
        /><br />
        <TextField
          floatingLabelText="Password"
          type="password"
          onChange={(event) => this.setState({
            password: event.target.value
          })}
          onKeyPress={this.login.bind(this)}
        /><br />
        <RaisedButton label="Login" onTouchTap={this.login.bind(this)} primary={true} />
      </div>
    );
  }
}

export default withRouter(LoginInput);
