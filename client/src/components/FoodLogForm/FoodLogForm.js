import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

export default () => {
    const history = useHistory();

    const [foodLog, setFoodLog] = useState({
        food_name : '',
        food_type : '',
        description : ''
    });

    const handleChange = (event) => {
        setFoodLog({...foodLog, [event.target.name] : event.target.value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        Axios.defaults.headers.common['x-auth-token']=localStorage.getItem('x-auth-token');
        try {
            const resp = await Axios({
                method : 'POST',
                url : '/api/log/recordLog',
                headers : {'Content-Type' : 'application/json'},
                data : {
                    food_name : foodLog.food_name,
                    food_type : foodLog.food_type,
                    description : foodLog.description
                }
            });

            history.push('/view');
            window.location.reload();
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className='form-group mb-4'>
                    <label htmlFor='food_name' className='required'>
                        Food Name
                    </label>
                    <input type='text' className='form-control'
                    name='food_name' value={foodLog.food_name}
                    onChange={handleChange} required/>
                </div>
                <div className='form-group mb-4'>
                    <label htmlFor='food_type' className='required'>
                        Food Type
                    </label>
                    <select className='form-control' name='food_type'
                    onChange={handleChange} required>
                        <option value=''></option>
                        <option value='Breakfast'>Breakfast</option>
                        <option value='Lunch'>Lunch</option>
                        <option value='Dinner'>Dinner</option>
                        <option value='Snack/Other'>Snack/Other</option>
                    </select>
                </div>
                <div className='form-group mb-4'>
                    <label htmlFor='description'>
                        Description/Notes
                    </label>
                    <textarea className='form-control w-50' name='description'
                    value={foodLog.description} onChange={handleChange}/>
                </div>
                <div className='form-group mb-4'>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                </div>
                <div>
                    
                </div>
            </form>
        </div>
    );
}
