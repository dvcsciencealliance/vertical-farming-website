import React, { Component } from 'react';
import './Main.css';
import StackAnimation from '../../components/StackAnimation';
import Navbar from '../../components/Navbar';
import Container from '../../components/Container';
import AboutButton from '../../components/AboutButton';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <StackAnimation />
        <Navbar links={[
        {
          name: 'Data',
          href: '/data'
        },
        {
          name: 'Admin',
          href: '/admin'
        }
        ]}/>
        <Container name="Water"/>
        <AboutButton />
      </div>
    );
  }
}

export default Main;
