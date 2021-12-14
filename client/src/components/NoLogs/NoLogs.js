import React from 'react'
import './style.css'

export default () => {
    
    return (
        <div className='container'>
            <p>You have not listed any logs today!</p>
            <p>
                If you would like to record a new log, press the button below.
            </p>
            <button className='btn btn-primary'>Record a new log</button>
        </div>
    )
    
}