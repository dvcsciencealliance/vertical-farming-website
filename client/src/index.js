import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Data from './pages/Data/Data';
import Admin from './pages/Admin/Admin';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

function requireAuth(nextState, replace) {
  replace({
    pathname: '/login',
    state: { nextPathname: nextState.location.pathname }
  });
}

ReactDOM.render(
  <MuiThemeProvider>
    <Router>
      <div>
        <Route exact path="/" component={Main}/>
        <Route path="/login" component={Login}/>
        <Route path="/data" component={Data}/>
        <Route path="/admin" component={Admin} render={() => (
          <Redirect to="/login"/>
        )}/>
      </div>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
