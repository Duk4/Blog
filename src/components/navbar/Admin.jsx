import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const plus = <FontAwesomeIcon icon={faPlus} />;

const Admin = () => {
    return (
        <div className="container">
            <div className="navbar">
                <ul>
                    <li><Link to="/">Blog</Link></li>
                    <li><Link to="/create">{plus}</Link></li>
                    <li><a href={"#"}>Log Out</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Admin;