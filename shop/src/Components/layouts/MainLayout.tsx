import React from 'react';
import {Outlet} from 'react-router-dom';

import {Header} from '../Header/Header';
import {Footer} from '../Footer/Footer';

export const MainLayout = () => (
    <div className="wrapper">
        <Header />
        <div className="content">
            <Outlet />
        </div>
        <Footer />
    </div>
);
