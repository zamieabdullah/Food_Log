import React, { Fragment , useState , useEffect } from 'react';
import Axios from 'axios';
import './style.css'

export default () => {
    
    const [user, setUser] = useState({
        id : 1,
        first_name : '',
        last_name : '',
        email_address : '',
    });
    
    useEffect(() => {
        const getUser = async () => {
            try {
                const resp = await Axios({
                    method : 'GET',
                    url : 'api/user/getUser',
                    headers : { 'Content-Type' : 'application/json'},
                    params : {
                        id : user.id
                    }
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
            </nav>
        </Fragment>
    )
}
