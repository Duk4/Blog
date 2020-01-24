import React from "react";
import { Link } from "react-router-dom";

const Guest = () => {
    return (
        <div className="container">
            <div className="navbar">
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/">Blog</Link></li>
                    <li><a href={"https://github.com/Duk4"} target="_blank" rel="noopener noreferrer">GitHub</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Guest;