import React, {useState} from 'react';
import "./Categories.css"

export default function Categories() {
    const [activeIndex, setActiveIndex] = useState(0);
    const onClickCategory = (index) => {
        setActiveIndex(index)
    }
    const categories = ['All', 'Chairs', 'Sofas', 'Comfort']; 
    return (
        <div className="categories">
            <ul>
                {categories.map((value, index) => (
                    <li onClick={() => onClickCategory(index)} className={activeIndex === index ? 'active' : ""}>
                        {value}
                    </li>
                    ))
                }
            </ul>
        </div>
    )
}
