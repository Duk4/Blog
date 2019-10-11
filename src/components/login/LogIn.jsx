import React, { Component } from 'react';
import { connect } from 'react-redux';
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

    render() {
        const { authError } = this.props;

        return (
            <div className="login">
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
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (credentials) => dispatch(logIn(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);