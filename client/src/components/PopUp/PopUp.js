import React from 'react'
import './style.css'

export default (props) => {
    
    const handleClick = () => {
        console.log(props);
        props.toggle();
    }
    
    return (
        <div className='modal'>
            <div className='modal-content'>
                <span className='close' onClick={handleClick}>
                    {console.log(props)}
                    &times
                </span>
            </div>
        </div>
    )
}