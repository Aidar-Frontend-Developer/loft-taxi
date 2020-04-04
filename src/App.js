import React, { Component } from 'react';

import Header from './components/Header';

import Map from './components/pages/Map';
import Profile from './components/pages/Profile';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';

class App extends Component {
    state = {
        page: 'login',
    };

    setPage = (page) => this.setState({ page });

    render() {
        const { page } = this.state;

        const pages = {
            map: () => <Map />,
            profile: () => <Profile />,
            login: (setPage) => <Login setPage={setPage} />,
            signup: (setPage) => <Signup setPage={setPage} />,
        };

        return page === 'login' || page === 'signup' ? (
            <>{pages[page](this.setPage)}</>
        ) : (
            <>
                <Header page={page} setPage={this.setPage} />
                {pages[page](this.setPage)}
            </>
        );
    }
}

export default App;
