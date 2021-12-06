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
    
    return (
        <div className='container'>
            <form>
                <div className='form-group mb-4'>
                    <label htmlFor='food_name' className='required'>Food Name</label>
                    <input type='text' className='form-control' onChange={handleChange} required/>
                </div>
                <div className='form-group mb-4'>
                    <label htmlFor='food_type' className='required'>Food Type</label>
                    <select className='form-control' required>
                        <option>Breakfast</option>
                        <option>Lunch</option>
                        <option>Dinner</option>
                        <option>Snack/Other</option>
                    </select>
                </div>
                <div className='form-group mb-4'>
                    <label htmlFor='time_eaten' className='required'>Time Eaten</label>
                    <input type='option' className='form-control' required/>
                </div>
                <div className='form-group mb-4'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}
