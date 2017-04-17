import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import './Admin.css';
import Navbar from '../../components/Navbar';
import PumpControl from '../../components/PumpControl';
import checkAuthenticity from '../../lib/checkAuthenticity';

class Admin extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  componentWillMount() {
    const token = localStorage.dvcvertfarmingtoken;
    checkAuthenticity(token, function(success) {
      if (success) {
        this.props.history.push('/login');
      }
    });
  }

  render() {
    return (
      <div className="Admin">
        <Navbar links={[
        {
          name: 'Status',
          href: '/'
        },
        {
          name: 'Data',
          href: '/data'
        }
        ]}/>
        <PumpControl />
      </div>
    );
  }
}

export default withRouter(Admin);
