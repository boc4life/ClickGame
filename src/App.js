import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Board from "./components/Board"

class App extends Component {
  render() {
    return (
      <div>
          <Header game="NFL" />
          <Board />
      </div>
    );
  }
}

export default App;
