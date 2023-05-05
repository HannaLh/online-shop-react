import React, {useState} from 'react';
import "./Sort.css";

export default function Sort() {
    const [isVisible, setIsVisible] = useState(false);
    const [selected, setSelected] = useState(0);
    const list = ['popularity', 'price', 'alphabet'];
    const selectedSortName = list[selected];
    const onClickListItem = (i) => {
        setSelected(i);
        setIsVisible(false);
    }

    return (
        <div className="sort">
            <div className="sort__label">
                <b>Sort by:</b>
                <span onClick={() => setIsVisible(!isVisible)}>{selectedSortName}</span>
            </div>
            {isVisible && (
                <div className="sort__popup">
                    <ul>
                        {list.map((name, i) => (
                            <li 
                                key={i}
                                onClick={() => onClickListItem(i)}
                                className={selected === i ? 'active' : ''}>
                                {name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
