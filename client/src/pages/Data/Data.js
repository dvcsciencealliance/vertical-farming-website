import React, { Component } from 'react';
import './Data.css';
import AboutButton from '../../components/AboutButton';
import Navbar from '../../components/Navbar';
import TimeInput from '../../components/TimeInput';
import checkAuthenticity from '../../lib/checkAuthenticity';

class Data extends Component {
  state = {
    authenticated: false
  };

  componentWillMount() {
    const token = localStorage.dvcvertfarmingtoken;
    const _this = this;
    checkAuthenticity(token, function(success) {
      if (success) {
        _this.setState({
          authenticated: true
        });
      }
    });
  }

  render() {
    let button;
    if (this.state.authenticated) {
      button = {
        name: 'Admin',
        href: '/admin'
      }
    } else {
      button = {
        name: 'Login',
        href: '/login'
      }
    }

    return (
      <div className="Data">
        <Navbar
        title="DVC Vertical Farming"
        links={[
        {
          name: 'Main',
          href: '/'
        },
        {
          name: 'About',
          href: '/about'
        },
        button
        ]}/>
        <TimeInput />

        <AboutButton />
      </div>
    );
  }
}

export default Data;
