import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import DataVisualization from '../../components/DataVisualization';
import Footer from '../../components/Footer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AddIcon from 'material-ui/svg-icons/content/add';
import checkAuthenticity from '../../lib/checkAuthenticity';
import './Data.css';

var index = 0;

class Data extends Component {
  state = {
    authenticated: false,
    children: [0]
  };

  componentWillMount() {
    const token = localStorage.dvcvertfarmingtoken;
    const _this = this;
    checkAuthenticity(token, function(success) {
      if (success) {
        _this.setState({
          authenticated: true
        });
      }
    });
  }

  add() {
    var children = this.state.children;
    children.push(++index);
    this.setState({
      children
    });
  }

  render() {
    let button;
    if (this.state.authenticated) {
      button = {
        name: 'Admin',
        href: '/admin'
      }
    } else {
      button = {
        name: 'Login',
        href: '/login'
      }
    }

    return (
      <div className="Data">
        <Navbar
        title="DVC Vertical Farming"
        links={[
        {
          name: 'Main',
          href: '/'
        },
        {
          name: 'About',
          href: '/about'
        },
        button
        ]}/>
        { this.state.children.map((id) => <DataVisualization key={id} id={id} />)}
        <FloatingActionButton onTouchTap={() => this.add()} className="button">
          <AddIcon />
        </FloatingActionButton>
        <Footer/>
      </div>
    );
  }
}

export default Data;
