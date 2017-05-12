import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import './About.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import checkAuthenticity from '../../lib/checkAuthenticity';
import WOW from 'wowjs';

class About extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  state = {
    authenticated: false
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

  componentDidMount() {
    new WOW.WOW().init();

    function isInViewport(element) {
      var rect = element.getBoundingClientRect();

      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
      );
    }

    var element = document.getElementById('first');
    var navbar = document.querySelector('.Navbar .bar');
    var visible = isInViewport(element);
    console.log(navbar);
    window.addEventListener('scroll', function(e) {
      if (!visible && isInViewport(element)) {
        navbar.style.boxShadow = 'none';
        visible = true;
        console.log('hola javier');
      } else if (visible && !isInViewport(element)) {
        navbar.style.boxShadow = 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px';
        visible = false;
        console.log('heyyyy');
      }
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
      <div className="About">
        <Navbar 
        title = "DVC Vertical Farming"
        links={[
        {
          name: 'Main',
          href: '/'
        },
        {
          name: 'Data',
          href: '/data'
        },
        button
        ]}/>
        <div id="first" className="row">
          <h1 className="wow fadeIn eight columns offset-by-two">DVC Vertical Farming</h1>
          <p className="wow fadeIn ten columns offset-by-one">An intelligent vertical farm at Diablo Valley College</p>
        </div>
        <div id="second" className="row">
          <p className="wow fadeIn eight columns offset-by-two" data-wow-offset="80">
            Aquaponics & vertical farming current best practices will be thoroughly studied and researched to design, engineer and develop working models that will be used to raise consumable fish, which provide fertilizer through their excretions that will be used to raise edible plants in an integrated system.
          </p>
          <p className="wow fadeIn eight columns offset-by-two" data-wow-offset="80">
            Available local materials and accessible resources will be used to design & build scientifically supported, practical, relatively low cost proof-of-concept prototypes.
          </p>
        </div>
        <div id="third" className="row">
          <p className="wow fadeIn eight columns offset-by-two" data-wow-offset="80">All of our research and software is <span className="emphasize">open source</span> and available to the public.</p>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(About);
