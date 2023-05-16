import React from 'react';

import "./Categories.css"

export default function Categories({ value, onChangeCategory }) {
    const categories = ['All', 'Tables', 'Sofas', 'Chairs', 'Carpet', 'Armchair']; 

    return (
        <div className="categories">
            <ul>
                {categories.map((categoryName, i) => (
                    <li
                        key = {i}
                        onClick={onChangeCategory}
                        className={value === i ? 'active' : ""}>
                        {categoryName}
                    </li>
                    ))
                }
            </ul>
        </div>
    )
}