import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const plus = <FontAwesomeIcon icon={faPlus} />;

const Admin = () => {
    return (
        <div className="container">
            <div className="navbar">
                <a href={"#"}><Link to="/">Blog</Link></a>
                <a href={"#"}><Link to="/create">{plus}</Link></a>
                <a href={"#"}>Log Out</a>
            </div>
        </div>
    );
}

export default Admin;