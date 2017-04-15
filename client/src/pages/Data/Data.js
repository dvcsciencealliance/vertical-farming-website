import React, { Component } from 'react';
import './Data.css';
import Navbar from '../../components/Navbar';

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
      </div>
    );
  }
}

export default Data;
