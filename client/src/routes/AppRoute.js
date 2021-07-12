import React, { Fragment , useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Axios from 'axios';
import Home from '../pages/Home';
import LoginSignUp from '../pages/LoginSignUp';

export default () => {
    useEffect(() => {
        const checkUser = async () => {
            Axios.defaults.headers.common['x-auth-token']=localStorage.getItem('x-auth-token');
            try {
                const resp = await Axios({
                    method : 'GET',
                    url : '/api/auth/checkUser'
                })
                
            } catch (e) {
                localStorage.removeItem('x-auth-token');
                localStorage.setItem('x-auth-token', false);
                delete Axios.defaults.headers.common['x-auth-token'];
            }
        }
        checkUser();
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
