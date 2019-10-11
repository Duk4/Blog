import React from 'react';
import { connect } from 'react-redux';
import Guest from './Guest';
import Admin from './Admin';

const Navbar = (props) => {
    const { auth } = props;
    console.log(props);
    const links = auth.uid ? <Admin /> : <Guest />;

    return (
        <div>
            {links}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);