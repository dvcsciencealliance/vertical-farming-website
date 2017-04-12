import React, { Component } from 'react';
import './AboutButton.css';
import Button from 'material-ui/Button';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import InfoIcon from 'material-ui-icons/Info';

class AboutButton extends Component {
  state = {
    open: false,
  };

  handleRequestClose = () => this.setState({ open: false });

  render() {
    return (
      <div className="AboutButton">
        <Button onClick={() => this.setState({ open: true })} fab primary className="button">
          <InfoIcon />
        </Button>
        <Dialog
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
         <DialogTitle>{"About this Project"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <p>
              Aquaponics and vertical farming current best practices will be thoroughly studied and researched to design, engineer and develop working models that will be used to raise consumable fish, which provide fertilizer through their excretions that will be used to raise edible plants in an integrated system.
              </p>
              <p>
              Available local materials and accessible resources will be used to design and build scientifically supported, practical, relatively low cost proof-of-concept prototypes.
              </p>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} primary>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AboutButton;
