import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import {Home} from '../Pages/Home/Home';
import 'react-toastify/dist/ReactToastify.css';
import {AddEdit} from '../Pages/AddEdid/AddEdit';
import {ViewItem} from '../Pages/ViewItem/ViewItem';

import './App.css';

export const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <ToastContainer position="top-center"/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/add" element={<AddEdit/>}/>
                    <Route path="/edit/:id" element={<AddEdit/>}/>
                    <Route path="/view/:id" element={<ViewItem/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};


