import React from 'react';
import { Table } from 'react-bootstrap';
import './style.css';

export default (props) => {
    const rows = []
    
    const array = props.logs
    console.log(typeof(array))
    // props.logs.forEach((log) => {
    //     console.log(log)
    // });
    
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
            </Table>
        </div>
    )
}