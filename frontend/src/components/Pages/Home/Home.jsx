import React, {useState, useEffect} from 'react';
import {toast} from 'react-toastify';
import {ButtonAction} from '../../Buttons/ButtonAction/ButtonAction';
import {ButtonAdd} from '../../Buttons/ButtonAdd/ButtonAdd';
import {errorMsg} from '../../../utils/utils';


import './Home.css';

export const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        ( async () => await loadData() )();
    }, []);

    const loadData = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/users');
            const data = await res.json();
            setData(data.result);
        } catch (err) {
            errorMsg(err);
        }
    };

    const deleteUser = (id) => {
        return ( async () => {
            try {
                if (window.confirm('Are you sure you want to delete user?')) {
                    const res = await fetch(`http://localhost:5000/api/users/${id}`, {
                        method: 'DELETE',
                    });
                    const info = await res.json();
                    toast.success(info);
                    await loadData();
                }
            } catch (err) {
                console.error('what\'s went wrong.', err);
            }
        } )();
    };
    console.log(data);
    return ( <div style={{marginTop: '150px'}}>
        <div>
            <div style={{paddingBottom: '10px'}}>
                <ButtonAdd/>
            </div>
            <table className="Home__table">
                <thead>
                <tr>
                    <th style={{textAlign: 'center'}}>No.</th>
                    <th style={{textAlign: 'center'}}>Personal Data.</th>
                    <th style={{textAlign: 'center'}}>Email.</th>
                    <th style={{textAlign: 'center'}}>Personal Contact.</th>
                    <th style={{textAlign: 'center'}}>Action.</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => {
                    return ( <tr key={item.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.contact}</td>
                        <td>
                            <ButtonAction
                                item={{...item}}
                                deleteUser={deleteUser}/>
                        </td>
                    </tr> );
                })}
                </tbody>
            </table>
        </div>
    </div> );
};



