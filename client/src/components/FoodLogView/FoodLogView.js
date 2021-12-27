import React, {useState, useEffect, Fragment} from 'react';
import Axios from 'axios';
import NoLogs from '../NoLogs/NoLogs';
import LogTable from '../LogTable/LogTable';
import './style.css'

export default () => {

    const view_date = new Date();

    const [logs, setLogs] = useState({});

    const [date, setDate] = useState({
        date : view_date
    });

    const printDate = () => {
        return (date.date.getMonth() + 1).toString() + "/" +
                date.date.getDate().toString() + "/" +
                date.date.getFullYear().toString();
    }

    const curr_date = printDate();

    const increaseDate = async (event) => {
        event.preventDefault();

        date.date.setDate(date.date.getDate() + 1)
        setDate({...date, date : date.date});

        Axios.defaults.headers.common['x-auth-token']=localStorage.getItem('x-auth-token');
        try {
            const resp = await Axios({
                method : 'GET',
                url : 'api/log/retrieve',
                headers : { 'Content-Type' : 'application/json' },
                params : {
                    reqDate : date.date
                }
            });

            setLogs(resp.data.logs);

        } catch (e) {
        }

    }

    const decreaseDate = async (event) => {
        event.preventDefault();

        date.date.setDate(date.date.getDate() - 1)
        setDate({...date, date : date.date});

        Axios.defaults.headers.common['x-auth-token']=localStorage.getItem('x-auth-token');
        try {
            const resp = await Axios({
                method : 'GET',
                url : 'api/log/retrieve',
                headers : { 'Content-Type' : 'application/json' },
                params : {
                    reqDate : date.date
                }
            });

            setLogs(resp.data.logs);

        } catch (e) {
        }

    }

    useEffect(() => {
        const getLogs = async () => {
            Axios.defaults.headers.common['x-auth-token']=localStorage.getItem('x-auth-token');
            try {
                const resp = await Axios({
                    method : 'GET',
                    url : 'api/log/retrieve',
                    headers : { 'Content-Type' : 'application/json' },
                    params : {
                        reqDate : date.date
                    }
                });

                setLogs(resp.data.logs);

            } catch (e) {
            }
        }

        getLogs();

    }, []);

    return (
        <Fragment>
            <div className='container'>
                <p>Date: {printDate()}</p>
                <div className='container' style={{display : 'inline'}}>
                    <button className='btn btn-info'
                    style={{ margin : '5px'}} onClick={decreaseDate}>
                        Previous Day
                    </button>
                    <button className='btn btn-info'
                    style={{ margin : '5px'}} onClick={increaseDate}>
                        Next Day
                    </button>
                </div>
            </div>
            <div style={{textAlign : 'center'}} className='container'>
                {logs.length !== 0 ? <LogTable logs={logs} /> :
                  <NoLogs />}
            </div>
        </Fragment>
    )

}

