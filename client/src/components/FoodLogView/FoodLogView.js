import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import NoLogs from '../NoLogs/NoLogs';
import LogTable from '../LogTable/LogTable';
import './style.css'

export default () => {
    
    const [logs, setLogs] = useState({})
    
    useEffect(() => {
        const getLogs = async () => {
            Axios.defaults.headers.common['x-auth-token']=localStorage.getItem('x-auth-token');
            try {
                const resp = await Axios({
                    method : 'GET',
                    url : 'api/log/retrieve',
                    headers : { 'Content-Type' : 'application/json' }
                });
                
                setLogs(resp.data.logs);
                
            } catch (e) {
            }
        }
        
        getLogs();
        
    }, []);
    
    return (
        <div style={{textAlign : 'center'}} className='container'>
            {logs.length !== 0 ? <LogTable logs={logs}/> : <NoLogs />}
        </div>
    )
  
}

