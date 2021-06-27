import React, { Fragment } from 'react';
import LoginNavbar from '../components/LoginNavbar/LoginNavbar'
import CreateAccount from '../components/CreateAccount/CreateAccount';

export default () => {
    return (
        <Fragment>
            <LoginNavbar />
            <div className='container'>
                <CreateAccount />
            </div>
        </Fragment>
    )
}