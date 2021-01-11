import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
    <Route render={() => (
        !!isLoggedIn
            ? <Component {...rest} />
            : <Redirect to='/login' />
    )} />
)


export default PrivateRoute;