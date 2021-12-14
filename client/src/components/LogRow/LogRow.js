import React from 'react'
import './style.css'

export default (props) => {


    return (
        <tr>
            <th>{props.log.food_type}</th>
            <th>{props.log.food_name}</th>
            <th>{props.log.time_eaten}</th>
            <th>{props.log.food_description}</th>
        </tr>
    )
}