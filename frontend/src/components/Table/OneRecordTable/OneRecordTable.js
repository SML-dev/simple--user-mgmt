import React from 'react';

import './OneRecordTable.css'

export const OneRecordTable = ({data}) => (
    <table className="Home__table">
        <thead>
        <tr>
            <th style={{textAlign: 'center'}}>Id.</th>
            <th style={{textAlign: 'center'}}>Personal Data.</th>
            <th style={{textAlign: 'center'}}>Email.</th>
            <th style={{textAlign: 'center'}}>Personal Contact.</th>
        </tr>
        </thead>
        <tbody>
        {<tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.contact}</td>
        </tr>}
        </tbody>
    </table>

);

