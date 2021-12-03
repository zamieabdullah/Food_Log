import React, { Fragment , useEffect } from 'react';
import LoginNavbar from '../../components/LoginNavbar/LoginNavbar'
import CreateAccount from '../../components/CreateAccount/CreateAccount';

export default () => {
    useEffect(() => {
        document.title = 'Food Log: Register'
    },[]);
    
    return (
        <Fragment>
            <LoginNavbar />
            <div className='container'>
                <CreateAccount />
            </div>
        </Fragment>
    )
}