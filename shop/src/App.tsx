import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './pages/home';
import Cart from './pages/cart';
import NotFoundBlock from './pages/not-found-block';
import {MainLayout} from './components/main-layout/main-layout';

import './App.scss';

export const App = () => (
    <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home/>} />
            <Route path="/cart" element={<Cart />}/>
            <Route path="*" element={<NotFoundBlock/>}/>
        </Route>
    </Routes>
);
