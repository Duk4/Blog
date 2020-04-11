import React from "react";
import { NavLink } from "react-router-dom";

const Guest = () => {
    return (
        <div className="container">
            <div className="navbar">
                <ul>
                    <li><NavLink to="/about" activeClassName="nav-active" activeStyle={{ color: '#292e34' }}>Autor</NavLink></li>
                    <li><NavLink exact to="/" activeClassName="nav-active" activeStyle={{ color: '#292e34' }}>Blog</NavLink></li>
                    <li><a href={"https://github.com/Duk4"} target="_blank" rel="noopener noreferrer">GitHub</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Guest;