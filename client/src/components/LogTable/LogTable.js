import React from 'react';
import { Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import LogRow from '../LogRow/LogRow';
import './style.css';

export default (props) => {
    const history = useHistory();

    const rows = []

    for (let i = 0; i < props.logs.length; i++) {
        rows.push(<LogRow log={props.logs[i]}/>);
    }

    const goRecord = (event) => {
        event.preventDefault();
        history.push('/record');
        window.location.reload();
    }

    return (
        <div className='container'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Food Type</th>
                        <th>Food Name</th>
                        <th>Time Eaten</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
            <div className='container'>
                <button className='btn btn-primary' onClick={goRecord}>
                    Record a new log
                </button>
            </div>
        </div>
    )
}