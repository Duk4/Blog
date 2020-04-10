import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { logOut } from '../../store/actions/authActions';

const plus = <FontAwesomeIcon icon={faPlus} />;

const Admin = (props) => {
    return (
        <div className="container">
            <div className="navbar">
                <ul>
                    <li><Link to="/">Blog</Link></li>
                    <li><Link to="/create">{plus}</Link></li>
                    <li><a href="/" onClick={props.logOut}>Izloguj se</a></li>
                </ul>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logOut())
    }
}

export default connect(null, mapDispatchToProps)(Admin);