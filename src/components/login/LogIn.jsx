import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logIn } from '../../store/actions/authActions';

class LogIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.logIn(this.state);
    }

    componentDidMount() {
        const el = document.getElementById('scroll-into-login');
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    render() {
        const { auth, authError } = this.props;

        if (auth.uid) return <Redirect to="/" />;

        return (
            <div className="login" id="scroll-into-login">
                <Helmet>
                    <title>Log In</title>
                </Helmet>
                <form className="form" onSubmit={this.handleSubmit}>
                    <h3>Log In</h3>
                    <div className="input-field">
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="login-btn" type="submit">Log In</button>
                    </div>
                    <div className="login-error">{authError}</div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (credentials) => dispatch(logIn(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);