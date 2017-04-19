import React, { Component } from 'react';
import { TweenMax, Elastic, TimelineMax } from "gsap";
import './StackAnimation.css';

class StackAnimation extends Component {
  componentDidMount() {
    TweenMax.set('svg', {
      visibility: 'visible'
    });

    const tl = new TimelineMax();

    tl
    .from('#Infrastructure-shadow', 0.15, {
      scale: 0,
      delay: 0.15,
      transformOrigin: 'center center',
      ease: Elastic.easeOut.config(1.5, 1)
    }, 'boxes-in')
    .staggerFrom('.Server', 0.75, {
      scale: 0,
      transformOrigin: 'center center',
      ease: Elastic.easeOut.config(1.5, 1)
    }, -0.15, 'boxes-in')
    .from('#Server_1', 0.25, {
      y: '45'
    }, 'boxes')
    .from('#Server_3', 0.25, {
      y: '-45'
    }, 'boxes')
    .from('#Server_4', 0.25, {
      y: '-90'
    }, 'boxes')
    .from('#Infrastructure-shadow', 0.25, {
      y: '-90'
    }, 'boxes')
    .from('.Infrastructure-lines', 0.5, {
      opacity: 0
    });

    setTimeout(function() {
      const container = document.getElementById("animation-container");
      container.classList.add("animated");
      container.classList.add("fadeOut");
      setTimeout(function() {
        container.remove();
      }, 550);
    }, 2250);
  };

  render() {
    return (
      <div id="animation-container">
        <svg id="Infrastructure-SVG" version="1.1" viewBox="0 0 310 379" x="0px" y="0px">
          <defs>
            <lineargradient id="Infrastructure-shadowGradient" gradientUnits="userSpaceOnUse" x1="32" x2="278" y1="337.7053" y2="337.7053">
              <stop style={{"stopColor":"#005DFF","stopOpacity":"0.15"}} offset="0"/>
              <stop style={{"stopColor":"#0068FF","stopOpacity":"8.453682e-02"}} offset="0.4364"/>
              <stop style={{"stopColor":"#0072FF","stopOpacity":"0"}} offset="1"/>
            </lineargradient>
            <lineargradient id="Infrastructure-serverGradient" gradientUnits="userSpaceOnUse" x1="32" x2="278" y1="249.7053" y2="249.7053">
              <stop style={{"stopColor":"#0072FF","stopOpacity":"0.3"}} offset="0"/>
              <stop style={{"stopColor":"#338EFF","stopOpacity":"0.3764"}} offset="0.1091"/>
              <stop style={{"stopColor":"#69ACFF","stopOpacity":"0.4669"}} offset="0.2384"/>
              <stop style={{"stopColor":"#97C5FF","stopOpacity":"0.5585"}} offset="0.3693"/>
              <stop style={{"stopColor":"#BCDAFF","stopOpacity":"0.6495"}} offset="0.4993"/>
              <stop style={{"stopColor":"#D9EAFF","stopOpacity":"0.7396"}} offset="0.628"/>
              <stop style={{"stopColor":"#EEF6FF","stopOpacity":"0.8286"}} offset="0.7551"/>
              <stop style={{"stopColor":"#FBFDFF","stopOpacity":"0.916"}} offset="0.88"/>
              <stop style={{"stopColor":"#FFFFFF"}} offset="1"/>
            </lineargradient>
            <lineargradient id="Infrastructure-borderGradient" gradientTransform="matrix(1 0 0 1 0 -2596)" gradientUnits="userSpaceOnUse" x1="32" x2="278" y1="2820.022" y2="2820.022">
              <stop style={{"stopColor":"#0053FF"}} offset="0"/>
              <stop style={{"stopColor":"#00DA88"}} offset="1"/>
            </lineargradient>
          </defs>
          <g id="Infrastructure-shadow">
            <polygon className="Infrastructure-shadow" points="278,337.8 155,379 32,337.8 155,296.5     "/>
          </g>
          <g className="Infrastructure-lines" id="Infrastructure-bottomLines">
            <polyline className="Infrastucture-box" points="308.7,289 155,340.5 1,289 "/>
            <polyline className="Infrastucture-box" points="1,289 155,237.1 308.7,289 "/>
            <line className="Infrastucture-borderLine" x1="155" x2="155" y1="238.8" y2="1.1"/>
            <line className="Infrastucture-borderLine" x1="309" x2="309" y1="289" y2="53"/>
            <line className="Infrastucture-borderLine" x1="1" x2="1" y1="289" y2="53"/>
          </g>
          <g className="Server" id="Server_4">
            <polygon className="Infrastructure-topBorder" points="32,253.8 155,212.6 278,253.8 278,250 155,208.6 32,249.8"/>
            <polygon className="Infrastructure-border" points="278,249.8 155,291 32,249.8 32,253.8 155,295 278,253.8"/>
            <polygon className="Infrastructure-server" points="278,249.8 155,291 32,249.8 155,208.5 "/>
          </g>
          <g className="Server" id="Server_3">
            <polygon className="Infrastructure-topBorder" points="32,205.5 155,164.3 278,205.4 278,201.7 155,160.3 32,201.5"/>
            <polygon className="Infrastructure-border" points="278,201.4 155,242.6 32,201.4 32,205.4 155,246.6 278,205.4"/>
            <polygon className="Infrastructure-server" points="278,201.4 155,242.6 32,201.4 155,160.1 "/>
          </g>
          <g className="Server" id="Server_2">
            <polygon className="Infrastructure-topBorder" points="32,157.1 155,115.9 278,157.1 278,153.3 155,111.9 32,153.1"/>
            <polygon className="Infrastructure-border" points="278,153.1 155,194.3 32,153.1 32,157.1 155,198.3 278,157.1"/>
            <polygon className="Infrastructure-server" points="278,153.1 155,194.3 32,153.1 155,111.8 "/>
          </g>
          <g className="Server" id="Server_1">
            <polygon className="Infrastructure-topBorder" points="32,108.8 155,67.6 278,108.8 278,105 155,63.6 32,104.8"/>
            <polygon className="Infrastructure-border" points="278,104.8 155,146 32,104.8 32,108.8 155,150 278,108.8"/>
            <polygon className="Infrastructure-server" points="278,104.8 155,146 32,104.8 155,63.5  "/>
          </g>
          <g className="Infrastructure-lines" id="Infrastructure-topLines">
            <line className="Infrastucture-borderLine" x1="155" x2="155" y1="340.7" y2="104.5"/>
            <polyline className="Infrastucture-box" points="1,53 155,1.1 309,53"/>
            <polyline className="Infrastucture-box" points="309,53 155,104.5 1,53"/>
          </g>
        </svg>
      </div>
    );
  }
}

export default StackAnimation;
