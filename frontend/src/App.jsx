import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import {Home} from './views/Home/Home';
import 'react-toastify/dist/ReactToastify.css';
import {AddEdit} from './views/AddEdid/AddEdit';
import {ViewItem} from './views/ViewItem/ViewItem';

import './App.css';
import {NotFoundPage} from './views/NotFoundPage/NotFoundPage';

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
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};


