import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {toast} from 'react-toastify';
import {BtnBackToHome} from '../../components/Buttons/ButtonBack/ButtonBack';
import {errorMsg} from '../../utils/utils';

import './AddEdit.css';

export const AddEdit = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');

    const navigate = useNavigate();
    const {id} = useParams();

    const findUserToEdit = async (id) => {
        try {
            const res = await fetch(`http://localhost:5000/api/users/${id}`);
            const data = await res.json();
            setName(data.result.name ?? '');
            setEmail(data.result.email ?? '');
            setContact(data.result.contact ?? '');
        } catch (err) {
            errorMsg(err);
        }
    };

    useEffect(() => {
        (async () => await findUserToEdit(id))();
    }, [id]);

    const handleSubmit = () => {
        return (async () => {
            if (!name || !email || !contact) return toast.error('Please fill required fields.');
            if (name.length > 60 || email.length > 50 || contact.length > 60) return toast.error('Fields must be less than 60 characters.');
            if (name.length < 5 || email.length < 5 || contact.length < 5) return toast.error('Fields must be at least 5 characters.');
            const url = `http://localhost:5000/api/users/${id ? id : ''}`;
            const method = id ? 'PUT' : 'POST';

            try {
                const res = await fetch(url, {
                    headers: {
                        'Accept': 'application/json', 'Content-Type': 'application/json',
                    }, method, body: JSON.stringify({
                        name, email, contact,
                    })
                });
                const info = await res.json();
                setName('');
                setEmail('');
                setContact('');
                toast.success(info);
                navigate('/');

            } catch (err) {
                errorMsg(err);
            }
        })();
    };
    return (<div style={{marginTop: '100px'}}>
            <div style={{
                margin: 'auto', padding: '15px', maxWidth: '400px', alignContent: 'center'
            }}
            >
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="contact">Contact</label>
                <input
                    type="text"
                    name="contact"
                    id="contact"
                    placeholder="Enter address and number phone "
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                />
                <input type="submit" onClick={handleSubmit} value="submit"/>
                <BtnBackToHome/>
            </div>
        </div>
    );
};
