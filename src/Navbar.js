import React, { Component } from 'react';
import './Navbar.css';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Text';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <AppBar className="bar">
          <Toolbar>
            <Text type="title" colorInherit className="flex">DVC Vertical Farming</Text>
            <div>
            <Button contrast>Data Insights</Button>
            <Button contrast>Login</Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
