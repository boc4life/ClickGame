import React from "react";
import "./style.css";
import teams from "./../../teams.json";
import Square from "./../Square";

class Board extends React.Component {
state = {
    teams: teams,
    clicked: [],
    score: 0
};

handleClick = (key) => {
    if (this.state.clicked.includes(key)){
        console.log("loss")
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
}

renderSquare = i => {
    return <Square
    image={this.state.teams[i].image}
    id={this.state.teams[i].id}
    team={this.state.teams[i].name}
    click={this.handleClick}
        />
}

render() {
    return (
        <div className="game-container">
        <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare(7)}
        </div>
        <div className="board-row">
            {this.renderSquare(8)}
            {this.renderSquare(9)}
            {this.renderSquare(10)}
            {this.renderSquare(11)}
            {this.renderSquare(12)}
            {this.renderSquare(13)}
            {this.renderSquare(14)}
            {this.renderSquare(15)}
        </div>
        <div className="board-row">
            {this.renderSquare(16)}
            {this.renderSquare(17)}
            {this.renderSquare(18)}
            {this.renderSquare(19)}
            {this.renderSquare(20)}
            {this.renderSquare(21)}
            {this.renderSquare(22)}
            {this.renderSquare(23)}
        </div>
        <div className="board-row">
            {this.renderSquare(24)}
            {this.renderSquare(25)}
            {this.renderSquare(26)}
            {this.renderSquare(27)}
            {this.renderSquare(28)}
            {this.renderSquare(29)}
            {this.renderSquare(30)}
            {this.renderSquare(31)}
        </div>
      </div>
    );
}
}

export default Board;