import React from 'react';
import { Routes, Route } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Cart from '../pages/Cart'

import "./App.css";

export const SearchContext = React.createContext();

function App() {
    const [searchValue, setSearchValue] = React.useState('');
    return (
        <div className='wrapper'>
            <SearchContext.Provider value ={{searchValue, setSearchValue}}>
                <Header />
                <div className='content'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
                <Footer/>
            </SearchContext.Provider>
        </div>
    );
}

export default App;
