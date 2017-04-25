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
      text: '',
      photoAdded: false
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
  togglePhoto(event) {
    this.setState({ photoAdded: !this.state.photoAdded });
  }
  overflowAlert() {
    if (this.remainingCharacters() < 0) {
      var beforeOverflowText;
      var overflowText;
      if (this.state.photoAdded) {
        beforeOverflowText = this.state.text.substring(140 - 23 - 10, 140 - 23);
        overflowText = this.state.text.substring(140 - 23);
      } else {
        beforeOverflowText = this.state.text.substring(140 - 10, 140);
        overflowText = this.state.text.substring(140);
      }

      return (
        <div className="alert alert-warning">
          <strong>Oops! Too Long:</strong>
          &nbsp;...{beforeOverflowText}
          <strong className="bg-danger">{overflowText}</strong>
        </div>
      );
    } else {
      return "";
    }
  }
  remainingCharacters(){
    if (this.state.photoAdded) {
      return 140 - 23 - this.state.text.length;
    } else {
      return 140 - this.state.text.length;
    }
  }

  render() {
    return (
      <div className="well clearfix">
        { this.overflowAlert() }
        <textarea
          onChange={this.handleChange.bind(this)}
          className="form-control"></textarea>
        <br/>

        <span>{ this.remainingCharacters() }</span>

        <button className="btn btn-primary pull-right" disabled={this.state.text.length === 0 && !this.state.photoAdded}>Tweet</button>

        <button className="btn btn-default pull-right" onClick={this.togglePhoto.bind(this)}>{this.state.photoAdded ? "✓ Photo Added" : "Add Photo" }</button>
      </div>
    );
  }
}

export default App;
