import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { session } from '../services/Session';

const BaseRoute = ({ component : Component, ...rest }) => {
    return (
    <Route {...rest} render={props => {
        if(session.isLoggedIn()){
            return <Component {...props} />
        }else {
            return <Redirect to={{
                pathname: '/',
            }} />
        }
    }} />
    )
};

export default BaseRoute;