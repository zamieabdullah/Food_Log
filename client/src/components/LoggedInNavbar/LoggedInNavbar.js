import React, { Fragment , useState , useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import './style.css'

export default () => {
    
    const history = useHistory();
    
    const [user, setUser] = useState({
        first_name : '',
        last_name : '',
        email_address : '',
    });
    
    const logOut = () => {
        localStorage.removeItem('x-auth-token');
        localStorage.setItem('authenticated', false);
        delete Axios.defaults.headers.common['x-auth-token'];
        
        history.push('/register');
    }
    
    useEffect(() => {
        const getUser = async () => {
            try {
                Axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('x-auth-token');
                const resp = await Axios({
                    method : 'GET',
                    url : 'api/user/getUser'
                });
                
                setUser({
                    first_name : resp.data.first_name,
                    last_name : resp.data.last_name,
                    email_address : resp.data.email
                });
                
            } catch (e) {
                console.error(e);
            }
        }
        getUser();
    }, []);
    
    return (
        <Fragment>
            <nav class='navbar justify-content-between'>
                <h1>Food Log</h1>
                <h2>Welcome {user.first_name}</h2>
                <button onClick={logOut}>Log Out</button>
            </nav>
        </Fragment>
    )
}
