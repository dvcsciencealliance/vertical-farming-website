import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Data from './pages/Data/Data';
import Admin from './pages/Admin/Admin';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Router>
      <div>
        <Route exact path="/" component={Main}/>
        <Route path="/data" component={Data}/>
        <Route path="/login" component={Login}/>
        <Route path="/admin" component={Admin}/>
      </div>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
