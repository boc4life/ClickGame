import React, { Component } from 'react';
import Header from "./components/Header";
import Board from "./components/Board";
import Footer from "./components/Footer";
import teams from "./teams.json";

class App extends Component {
  state = {
    teams: teams,
    clicked: [],
    score: 0
};

  handleClick = key => {
      if (this.state.clicked.includes(key)){
          alert(`GAME OVER. You scored ${this.state.score}`);
          this.setState({
            clicked: [],
            score: 0
          })
          console.log(this.state)
      }
      else {
          this.state.clicked.push(key)
          // Shuffle array of logos. Algorithm found on StackOverflow
          for (let i = this.state.teams.length - 1; i > 0; i--) {
              let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
              [this.state.teams[i], this.state.teams[j]] = [this.state.teams[j], this.state.teams[i]]; // swap elements
            }
          this.setState({ score: this.state.score + 1 })
      }
      if (this.state.score == 32) {
        alert("Perfect Score! You win!")
        this.setState({
          clicked: [],
          score: 0
        })
      }
  }

  render() {
    return (
      <div>
          <Header game="NFL" />
          <Board 
          teams={this.state.teams}
          handleClick={this.handleClick}
          />
          <Footer score={this.state.score}/>
      </div>
    );
  }
}

export default App;
