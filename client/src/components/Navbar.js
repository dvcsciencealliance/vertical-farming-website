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
            <a href="/">
              <Text type="title" colorInherit className="flex">DVC Vertical Farming</Text>
            </a>
            <div>
              {this.props.links.map(({ name, href }, index) => {
                return <Button key={index} href={href} contrast>{name}</Button>
              })}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
