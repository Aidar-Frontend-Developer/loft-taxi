import React, { useState } from 'react';

import Header from './components/Header';

import Map from './components/pages/Map';
import Profile from './components/pages/Profile';
import LogIn from './components/pages/LogIn';
import SingUp from './components/pages/SingUp';

const pages = {
    map: () => <Map />,
    profile: () => <Profile />,
    login: (setPage) => <LogIn setPage={setPage} />,
    signup: (setPage) => <SingUp setPage={setPage} />,
};

export const App = () => {
    const [page, setPage] = useState('login');

    return page === 'login' || page === 'signup' ? (
        <>{pages[page](setPage)}</>
    ) : (
        <>
            <Header page={page} setPage={setPage} />
            {pages[page](setPage)}
        </>
    );
};

export default App;
