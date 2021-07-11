import React, { Fragment , useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Axios from 'axios';
import Home from '../pages/Home';
import LoginSignUp from '../pages/LoginSignUp';

export default () => {
    useEffect(() => {

    }, []);

    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/register'>
                <LoginSignUp />
            </Route>
            <Route path='*'>
                <h1>Error 404</h1>
            </Route>
        </Switch>
    )
}
