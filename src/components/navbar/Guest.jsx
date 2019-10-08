import React from "react";
import { Link } from "react-router-dom";

const Guest = () => {
    return (
        <div className="container">
            <div className="navbar">
                <a href={"#"}><Link to="/">Blog</Link></a>
                <a href={"#"}><Link to="/about">O meni</Link></a>
                <a href={"https://github.com/Duk4"} target="_blank">GitHub</a>
            </div>
        </div>
    );
}

export default Guest;