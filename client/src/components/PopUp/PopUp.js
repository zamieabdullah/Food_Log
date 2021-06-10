import React, { Fragment, useState } from "react"
import "./style.css"

export default (props) => {
    
    const handleClick = () => {
        console.log(props);
        props.toggle();
    }
    
    return (
        <div className='modal'>
            <div className='modal-content'>
                <span className='close'>
                    &times
                </span>
                <p>poop</p>
            </div>
        </div>
    )
}