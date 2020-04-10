import React, { Suspense } from 'react';
import Auth from '../Auth';
import { AuthContext } from '../../context/AuthContext';
const Layout = React.lazy(() => import('../Layout'));

const Main = () => {
    const { isLoggedIn } = React.useContext(AuthContext);

    return isLoggedIn ? (
        <Suspense fallback="Загрузка...">
            <Layout />
        </Suspense>
    ) : (
        <Auth />
    );
};

export default Main;
