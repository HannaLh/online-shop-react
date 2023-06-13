import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home/Home';
import NotFound from './pages/NotFound';
import {Cart} from './pages/Cart/Cart';

import './App.scss';
import MainLayout from './Components/layouts/MainLayout';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="" element={<Home />} />
                <Route path="/cart" element={<Cart />}/>
                <Route path="*" element={<NotFound />}/>
            </Route>
        </Routes>
    );
}

export default App;
