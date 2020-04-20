import React from 'react';

import Logo from '../../Logo';
import Login from '../Login';
import Signup from '../Signup';

import { StyledAuth } from './StyledAuth';

class AuthPage extends React.Component {
    state = {
        showLogin: true,
        showSignup: false,
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
                {showLogin && <Login onChangeToSignup={this.handleChangeToSignup} />}
                {showSignup && <Signup onChangeToLogin={this.handleChangeToLogin} />}
            </StyledAuth>
        );
    }
}

export default AuthPage;
