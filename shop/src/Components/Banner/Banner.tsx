import React from 'react';
import "./Banner.css";

export const Banner:React.FC = () => {
    return (
        <section className='offers'>
            <div className='container'>
                <div className='offer-section'>
                    <div className='offer-section-content'>
                        <h2>Your Best Value Products</h2>
                        <p className='offer-section-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='offer-section-image'></div>
                </div>
            </div>
        </section>
    )
}
