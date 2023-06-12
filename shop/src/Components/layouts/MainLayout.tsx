import React from 'react';
import {Outlet} from 'react-router-dom';

import {Header} from '../Header/Header';
import {Footer} from '../Footer/Footer';

export const MainLayout: React.FC = () => {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
