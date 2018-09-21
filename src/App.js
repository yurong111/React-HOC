import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TestHOC from './component/testHOC'
var VConsole = require('vconsole');
var vConsole = new VConsole();

class App extends Component {
  state = {
    data: 123,
    isSubLoading: true
  }
  componentDidMount() {
    /* setTimeout(() => {
      this.setState({
        data: '延时后的456',
        isSubLoading: false,
      })
    }, 3000); */
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <TestHOC  data={this.state.data} isSubLoading={this.state.isSubLoading}/> */}
        <TestHOC  data={this.state.data} />
      </div>
    );
  }
}

export default App;
