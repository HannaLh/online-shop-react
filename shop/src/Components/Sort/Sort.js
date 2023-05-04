import React from 'react';
import "./Sort.css";

export default function Sort() {
    return (
        <div className="sort">
            <div className="sort__label">
                <b>Sort by:</b>
                <span>popular</span>
            </div>
            <div className="sort__popup">
                <ul>
                    <li className="active">popular</li>
                    <li>price</li>
                    <li>alphabet</li>
                </ul>
            </div>
        </div>
    )
}
