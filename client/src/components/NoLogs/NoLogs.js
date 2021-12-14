import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

export default () => {
    const history = useHistory();

    const goRecord = (event) => {
        event.preventDefault();
        history.push('/record');
        window.location.reload();
    }

    return (
        <div className='container'>
            <p>You have not listed any logs today!</p>
            <p>
                If you would like to record a new log, press the button below.
            </p>
            <button className='btn btn-primary' onClick={goRecord}>
                Record a new log
            </button>
        </div>
    )

}