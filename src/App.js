import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuizStep from "./components/QuizStep";

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends Component {
  render() {
    return (
      <div className="App">
          <QuizStep/>
      </div>
    );
  }
}


export default App;
