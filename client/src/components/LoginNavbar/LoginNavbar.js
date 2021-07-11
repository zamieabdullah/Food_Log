import React, { Fragment , useState } from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import './style.css'

export default () => {

    const [user, setUser] = useState({
        email : '',
        password : ''
    });

    const [valid, setValid] = useState({
        valid : false
    });

    const handleChange = (event) => {
        setUser({...user, [event.target.name] : event.target.value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const resp = await Axios({
                method : 'GET',
                url : '/api/auth/loginUser',
                headers : {'Content-Type' : 'application/json'},
                params : {
                    email : user.email,
                    password : user.password
                }
            });

            setUser({
                email : '',
                password : ''
            });

            localStorage.setItem('x-auth-token', resp.data.token);
            Axios.defaults.headers.common['x-auth-token'] = resp.data.token;

            setValid({ valid : true });
            localStorage.setItem('authenticated', valid.valid);

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <Fragment>
            <nav class='navbar justify-content-between'>
                <h1>Food Log</h1>
                <form className='form-inline' onSubmit={handleSubmit}>
                    <div className='form-group mr-2'>
                        <input className='form-control' type='text'
                            name='email' value={user.email}
                            onChange={handleChange}
                            placeholder='Email Address' required/>
                    </div>
                    <div className='form-group mr-2'>
                        <input className='form-control' type='text'
                            name='password' value={user.password}
                            onChange={handleChange}
                            placeholder='Password' required/>
                    </div>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
            </nav>
            {valid.valid ? <Redirect to='/' /> : null}
        </Fragment>
    )
}
