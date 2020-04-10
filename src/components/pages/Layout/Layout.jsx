import React from 'react';

import Header from '../../Header';

import { AuthContext } from '../../context/AuthContext';

import Map from '../../pages/Map';
import Profile from '../../pages/Profile';

class Layout extends React.Component {
    state = {
        page: 'map',
    };

    static contextType = AuthContext;

    setPage = page => {
        if (page !== 'logout') {
            this.setState({ page });
        } else {
            this.context.logout();
        }
    };

    render() {
        const { page } = this.state;
        const pages = {
            map: <Map />,
            profile: <Profile />,
        };

        return (
            <div data-testid="layout">
                <Header setPage={this.setPage} />
                {pages[page]}
            </div>
        );
    }
}

export default Layout;
