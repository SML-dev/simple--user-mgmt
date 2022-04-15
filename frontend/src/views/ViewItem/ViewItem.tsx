import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {OneRecordTable} from '../../components/Table/OneRecordTable/OneRecordTable';
import {BtnBackToHome} from '../../components/Buttons/ButtonBack/ButtonBack';

import './ViewItem.css';
import {errorMsg} from '../../utils/utils';

export const ViewItem = () => {
    const [user, setUser] = useState({});

    const {id} = useParams();

    useEffect(() => {
        ( async () => {
            try {
                const res = await fetch(`http://localhost:5000/api/users/${id}`);
                const data = await res.json();
                setUser({...data.result});
            } catch (err) {
              errorMsg(err)
            }
        } )();
    }, []);

    return (
        <div style={{marginTop: '200px', minWidth: '80%'}}>
        <div style={{paddingBottom: '10px'}}>
            <OneRecordTable data={user}/>
        </div>
        <BtnBackToHome/>
    </div> );
};
