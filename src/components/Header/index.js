import React from "react";
import "./style.css";

function Header(props) {
    return (
        <div>
            <div className="header">Andrew's {props.game} Clicky Game</div>
            <div className="instruction-header">Click on a team logo to score points. Don't choose the same logo twice!</div>
        </div>
    )
}

export default Header;