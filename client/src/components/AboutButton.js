import React, { Component } from 'react';
import './AboutButton.css';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import InfoIcon from 'material-ui/svg-icons/action/info';

class AboutButton extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Close"
        onTouchTap={this.handleClose}
      />
    ];

    return (
      <div className="AboutButton">
        <FloatingActionButton onTouchTap={() => this.handleOpen()} className="button">
          <InfoIcon />
        </FloatingActionButton>
        <Dialog
          title="About this Project"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <p>
            Aquaponics & vertical farming current best practices will be thoroughly studied and researched to design, engineer and develop working models that will be used to raise consumable fish, which provide fertilizer through their excretions that will be used to raise edible plants in an integrated system.
          </p>
          <p>
            Available local materials and accessible resources will be used to design & build scientifically supported, practical, relatively low cost proof-of-concept prototypes.
          </p>
        </Dialog>
      </div>
    );
  }
}

export default AboutButton;
