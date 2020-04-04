import React, { Component } from 'react';

import Header from './components/Header';

import Map from './components/pages/Map';
import Profile from './components/pages/Profile';
import LogIn from './components/pages/LogIn';
import SingUp from './components/pages/SingUp';

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
            login: (setPage) => <LogIn setPage={setPage} />,
            signup: (setPage) => <SingUp setPage={setPage} />,
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
