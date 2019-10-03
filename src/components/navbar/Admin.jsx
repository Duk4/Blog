import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const plus = <FontAwesomeIcon icon={faPlus} />;

const Admin = () => {
    return (
        <div className="container">
            <div className="navbar admin">
                <a href={"https://github.com/Duk4"}>Blog</a>
                <a href={"https://github.com/Duk4"}>{plus}</a>
            </div>
        </div>
    );
}

export default Admin;