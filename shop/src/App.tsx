import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import {Cart} from './pages/Cart';
import {MainLayout} from './Components/layouts/MainLayout';

import './App.css';

export const App = () => (
    <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home/>} />
            <Route path="/cart" element={<Cart />}/>
            <Route path="*" element={<NotFound />}/>
        </Route>
    </Routes>
);
