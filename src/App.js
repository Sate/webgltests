import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import data from './blocks.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';




class App extends PureComponent {

  render() {

    return (
      <div className='examples'>
      <Link to="/1">Echarts graph</Link>
      <Link to="/2">D33d graph</Link>
        <div className='parent'>
          <label>{this.chart} </label>
        </div>
      </div>
    );
  }
}

export default App;
