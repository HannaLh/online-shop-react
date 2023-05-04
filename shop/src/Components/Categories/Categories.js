import React from 'react';
import "./Categories.css"

export default function Categories() {
    return (
        <div className="categories">
            <ul>
                <li className="active">All</li>
                <li>Chairs</li>
                <li>Sofas</li>
                <li>Comfort</li>
            </ul>
        </div>
    )
}
