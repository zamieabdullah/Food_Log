import React, { Fragment , useEffect, useState } from 'react';
import LoggedInNavbar from '../../components/LoggedInNavbar/LoggedInNavbar'
import './style.css'

export default () => {
    useEffect(()=>{
        document.title = 'Food Log: Record Log' 
    }, []);
    
    return (
        <Fragment>
            <LoggedInNavbar />
            <div>
                <h2 style={{textAlign: 'center', margin: '40px'}}>Logging Food</h2>
            </div>
        </Fragment>
    );
}