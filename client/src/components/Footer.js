import React, { Component } from 'react';
import './Footer.css';
import WOW from 'wowjs';

class Footer extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div className="Footer">
        <div className="row" data-wow-offset="80">
          <p className="ten columns offset-by-one">
            DVC Vertical Farming © <span id="year">{new Date().getFullYear()}</span>
          </p>
          <a className="wow fadeIn four columns offset-by-four" href="https://github.com/dvcsciencealliance">
            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
