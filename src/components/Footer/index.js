import React from "react";
import "./style.css";

function Footer(props) {
    return (
        <div className="footer">
        Score: {props.score}
        </div>
    )
}

export default Footer;