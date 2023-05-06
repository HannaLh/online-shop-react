import React, {useState} from 'react';
import "./Sort.css";

export default function Sort({value, onChangeSort}) {
    const [isVisible, setIsVisible] = useState(false);
    const list = [
        { name: 'popularity', sort: 'rating' },
        { name: 'price', sort: 'price' },
        { name: 'alphabet', sort: 'title' }
    ];
    
    const onClickListItem = (i) => {
        onChangeSort (i);
        setIsVisible(false);
    }

    return (
        <div className="sort">
            <div className="sort__label">
                <b>Sort by:</b>
                <span onClick={() => setIsVisible(!isVisible)}>{value.name}</span>
            </div>
            {isVisible && (
                <div className="sort__popup">
                    <ul>
                        {list.map((obj, i) => (
                            <li 
                                key={i}
                                onClick={() => onClickListItem(obj)}
                                className={value.sort === obj.sort ? 'active' : ''}>
                                {obj.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
