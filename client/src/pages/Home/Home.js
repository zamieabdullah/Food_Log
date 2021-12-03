import React, { Fragment , useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import LoggedInNavbar from '../../components/LoggedInNavbar/LoggedInNavbar'
import './style.css'

export default () => {
    const history = useHistory();
    
    useEffect(()=>{
        document.title = 'Food Log: Home' 
    }, []);
    
    const viewLog = (event) => {
        event.preventDefault();
        history.push('/view');
        window.location.reload();
    };
    
    const logFood = (event) => {
        event.preventDefault();
        history.push('/record');
        window.location.reload();
    };
    
    return (
        <Fragment>
            <LoggedInNavbar />
            <div className='centered'>
                <h2 style={{textAlign: 'center', margin: '40px'}}>What would you like to do?</h2>
                <ul>
                    <li>
                        <button className='btn btn-primary option' onClick={viewLog}>View my Food Log</button>
                    </li>
                    <li>
                        <button className='btn btn-primary option' onClick={logFood}>Add to my Food Log</button>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
}