import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StackAnimation from './StackAnimation';
import Navbar from './Navbar';
import AboutButton from './AboutButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui/styles/theme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { green } from 'material-ui/styles/colors';
injectTapEventPlugin();

const muiTheme = createMuiTheme();
console.log(muiTheme);


class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <StackAnimation />
          <Navbar />
          <AboutButton />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
