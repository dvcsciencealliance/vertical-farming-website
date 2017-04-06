import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StackAnimation from './StackAnimation';
import Navbar from './Navbar';
import Container from './Container';
import AboutButton from './AboutButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { green } from 'material-ui/styles/colors';
injectTapEventPlugin();


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <StackAnimation />
          <Navbar />
          <Container />
          <AboutButton />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
