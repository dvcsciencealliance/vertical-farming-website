import React, { Component } from 'react';
import './Data.css';
import AboutButton from '../../components/AboutButton';
import Navbar from '../../components/Navbar';
import TimeInput from '../../components/TimeInput';

class Data extends Component {
  render() {
    return (
      <div className="Data">
        <Navbar links={[
        {
          name: 'Status',
          href: '/'
        },
        {
          name: 'Login',
          href: '/login'
        }
        ]}/>
        <TimeInput />
        
        <AboutButton />
      </div>
    );
  }
}

export default Data;
