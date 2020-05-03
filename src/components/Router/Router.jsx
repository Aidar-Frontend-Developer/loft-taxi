import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Profile from '../pages/Profile';
import Map from '../pages/Map';
import Auth from '../pages/Auth';
import PrivateRoute from './PrivateRoute';

const Router = () => {
    return (
        <Switch>
            <Route path="/" component={Auth} exact />
            <PrivateRoute path="/map" component={Map} />
            <PrivateRoute path="/profile" component={Profile} />
            <Redirect to="/" />
        </Switch>
    );
};

export default Router;
