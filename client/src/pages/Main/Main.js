import React, { Component } from 'react';
import './Main.css';
import StackAnimation from '../../components/StackAnimation';
import Navbar from '../../components/Navbar';
import Container from '../../components/Container';
import AboutButton from '../../components/AboutButton';
import checkAuthenticity from '../../lib/checkAuthenticity';

class Main extends Component {
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
      <div className="Main">
        <StackAnimation />
        <Navbar links={[
        {
          name: 'Data',
          href: '/data'
        },
        button
        ]}/>
        <Container name="Water"/>
        <Container name="Plants"/>
        <Container name="Air"/>
        <AboutButton />
      </div>
    );
  }
}

export default Main;
