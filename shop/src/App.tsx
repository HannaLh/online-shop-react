import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart'

import "./App.css";

function App() {
    return (
        <div className='wrapper'>
            <Header />
            <div className='content'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
