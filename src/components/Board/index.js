import React from "react";
import "./style.css";
import Square from "./../Square";

class Board extends React.Component {

renderSquare = i => {
    return <Square
    image={this.props.teams[i].image}
    id={this.props.teams[i].id}
    team={this.props.teams[i].name}
    click={this.props.handleClick}
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