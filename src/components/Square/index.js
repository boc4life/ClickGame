import React from "react";
import "./style.css";

function Square(props) {
    return (
        <input
        type="image"
        className="game-square"
        src={process.env.PUBLIC_URL + props.image}
        key={props.id}
        team={props.team}
        onClick={() => props.click(props.id)} />
    )
}

export default Square;