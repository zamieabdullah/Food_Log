import React, { Fragment , useEffect, useState } from 'react';
import LoggedInNavbar from '../../components/LoggedInNavbar/LoggedInNavbar'
import './style.css'

export default () => {
    useEffect(()=>{
        document.title = 'Food Log: View Logs' 
    }, []);
    
    return (
        <Fragment>
            <LoggedInNavbar />
            <div>
                <h2 style={{textAlign: 'center', margin: '40px'}}>View Log</h2>
            </div>
        </Fragment>
    );
}