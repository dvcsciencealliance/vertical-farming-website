import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import './PumpControl.css';
import Toggle from 'material-ui/Toggle';

class PumpControl extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  state = {
    toggled: false
  };

  componentWillMount() {
    const token = localStorage.dvcvertfarmingtoken;
    fetch('/pump?token=' + token, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((responseJSON) => {
      console.log(responseJSON);
      this.setState({
        toggled: responseJSON.toggled
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  toggle(event, toggled) {
    console.log(toggled);
    console.log('Clicked');
    const token = localStorage.dvcvertfarmingtoken;
    fetch('/pump', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token,
        toggled
      })
    })
    .then((response) => response.json())
    .then((responseJSON) => {
      console.log(responseJSON);
      if (responseJSON.success) {
        console.log('Success!');
        this.setState({
          toggled
        });
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
      <div className="PumpControl">
        <Toggle
          toggled={this.state.toggled}
          onToggle={this.toggle.bind(this)}
          label="Pump"
        />
      </div>
    );
  }
}

export default withRouter(PumpControl);
