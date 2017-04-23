import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ViewHeadlineIcon from 'material-ui/svg-icons/action/view-headline';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <AppBar title={<a href="/">{this.props.title}</a>}
        iconElementLeft={<IconButton><ViewHeadlineIcon /></IconButton>}
        className="bar">
          <div className="links">
            {this.props.links.map(({ name, href }, index) => {
              return <FlatButton key={index} label={name} href={href} />
            })}
          </div>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
