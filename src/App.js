import React, { Component } from 'react';
//import React from 'react';
//import React.Component as Component from 'react';
import logo from './logo.svg';
import './App.css';

/*function App () {
  Component.call(this)
}
App.prototype = Object.create(Component.prototype)
App.prototype.render = function () {
  return (
    <div className="....">
  )
}*/
class App extends Component {

  constructor () {
    super()
    this.state = {
      text: ''
    }
  }

  handleChange (event) {
    console.log(event.target.value)
    console.log(this.state)
    this.setState({ text: event.target.value })
  }

  disableCheck () {
    return this.state.text.length === 0
  }

  render() {
    return (
      <div className="well clearfix">
        <textarea
          onChange={this.handleChange.bind(this)}
          className="form-control"></textarea>
        <br/>
        <button className="btn btn-primary pull-right" disabled={this.disableCheck()}>Tweet</button>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default App;
