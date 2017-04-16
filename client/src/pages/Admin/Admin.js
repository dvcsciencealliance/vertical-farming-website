import React, { Component } from 'react';
import './Admin.css';
import Navbar from '../../components/Navbar';

class Admin extends Component {
  render() {
    return (
      <div className="Admin">
        <Navbar links={[
        {
          name: 'Status',
          href: '/'
        }
        ]}/>
      </div>
    );
  }
}

export default Admin;
