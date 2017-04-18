import 'animate.css/animate.min.css';
import 'skeleton-css/css/normalize.css';
import 'skeleton-css/css/skeleton.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/Main/Main';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Data from './pages/Data/Data';
import Admin from './pages/Admin/Admin';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#4CAF50'
  }
});

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router>
      <div>
        <Route exact path="/" component={Main}/>
        <Route path="/about" component={About}/>
        <Route path="/data" component={Data}/>
        <Route path="/login" component={Login}/>
        <Route path="/admin" component={Admin}/>
      </div>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
