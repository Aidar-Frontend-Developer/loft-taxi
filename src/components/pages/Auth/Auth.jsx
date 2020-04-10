import React from 'react';

import Logo from '../../Logo';
import Login from '../Login';
import Signup from '../Signup';

import { AuthContext } from '../../context/AuthContext';

import { StyledAuth } from './StyledAuth';

class AuthPage extends React.Component {
    static contextType = AuthContext;

    state = {
        showLogin: true,
        showSignup: false,
    };

    handleSubmitForm = event => {
        event.preventDefault();
        this.context.login();
    };

    handleChangeToSignup = () =>
        this.setState({
            showLogin: false,
            showSignup: true,
        });

    handleChangeToLogin = () =>
        this.setState({
            showLogin: true,
            showSignup: false,
        });

    render() {
        const { showLogin, showSignup } = this.state;

        return (
            <StyledAuth data-testid="auth-page">
                <Logo colored="white" />
                {showLogin && (
                    <Login
                        onSubmitForm={this.handleSubmitForm}
                        onChangeToSignup={this.handleChangeToSignup}
                    />
                )}
                {showSignup && (
                    <Signup
                        onSubmitForm={this.handleSubmitForm}
                        onChangeToLogin={this.handleChangeToLogin}
                    />
                )}
            </StyledAuth>
        );
    }
}

export default AuthPage;
