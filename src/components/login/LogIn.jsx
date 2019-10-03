import React, { Component } from 'react';

class LogIn extends Component {
    state = {
        email: '',
        password: ''
    }

    render() {
        return (
            <div className="login">
                <form className="form">
                    <h3>Log In</h3>
                    <div className="input-field">
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-field">
                        <button className="login-btn">Log In</button>
                    </div>
                    <div className="login-error"></div>
                </form>
            </div>
        )
    }
}

export default LogIn;