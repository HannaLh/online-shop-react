import React from 'react';
import './Banner.scss';

export const Banner:React.FC = () => {
    return (
        <section className="main-banner">
            <div>
                <h2 className="main-banner__title">
                    Your Best Value Products
                </h2>
                <p className="main-banner__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className="main-banner__image"/>
        </section>
    );
};
