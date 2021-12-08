import React, { useState } from 'react';
import Axios from 'axios';

export default () => {
    const [log, setLog] = useState({
        food_name : '',
        food_type : '',
        time_eaten : ''
    })

    const handleChange = (event) => {
        setLog({...log, [event.target.name] : event.target.value});
    }

    const handleOption = (event) => {
        setLog({ food_type : event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(log.food_name);
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className='form-group mb-4'>
                    <label htmlFor='food_name' className='required'>Food Name</label>
                    <input type='text' className='form-control'
                    name='food_name' value={log.food_name} onChange={handleChange} required/>
                </div>
                <div className='form-group mb-4'>
                    <label htmlFor='food_type' className='required'>Food Type</label>
                    <select className='form-control' value={log.food_type} onChange={handleOption} required>
                        <option value=''></option>
                        <option value='Breakfast'>Breakfast</option>
                        <option value='Lunch'>Lunch</option>
                        <option value='Dinner'>Dinner</option>
                        <option value='Snack/Other'>Snack/Other</option>
                    </select>
                </div>
                <div className='form-group mb-4'>
                    <label htmlFor='time_eaten' className='required'>Time Eaten</label>
                    <input type='option' className='form-control'
                    name='time_eaten' value={log.time_eaten} onChange={handleChange} required/>
                </div>
                <div className='form-group mb-4'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}
