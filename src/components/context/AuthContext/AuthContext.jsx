import React from 'react';

const AuthContext = React.createContext({ isLoggedIn: false });

class AuthProvider extends React.Component {
    state = {
        isLoggedIn: false,
    };

    login = () => this.setState({ isLoggedIn: true });

    logout = () => this.setState({ isLoggedIn: false });

    render() {
        const { isLoggedIn } = this.state;
        const values = {
            isLoggedIn,
            login: this.login,
            logout: this.logout,
        };

        return <AuthContext.Provider value={values}>{this.props.children}</AuthContext.Provider>;
    }
}

export { AuthContext, AuthProvider };
