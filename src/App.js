import React from 'react';

import Main from './components/pages/Main';

import { AuthProvider } from './components/context/AuthContext';

const App = () => (
    <AuthProvider>
        <Main />
    </AuthProvider>
);

export default App;
