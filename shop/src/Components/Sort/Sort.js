import React from 'react';
import "./Sort.css";
import { useDispatch, useSelector } from 'react-redux';
import { setSort } from '../../redux/slices/filterSlice';

export default function Sort() {
    const dispatch = useDispatch();
    const sort = useSelector(state => state.filter.sort)

    const [isVisible, setIsVisible] = React.useState(false);
    const list = [
        { name: 'popularity', sortProperty: 'rating' },
        { name: 'price', sortProperty: 'price' },
        { name: 'alphabet', sortProperty: 'title' }
    ];
    
    const onClickListItem = (obj) => {
        dispatch(setSort(obj));
        setIsVisible(false);
    }

    return (
        <div className="sort">
            <div className="sort__label">
                <b>Sort by:</b>
                <span onClick={() => setIsVisible(!isVisible)}>{sort.name}</span>
            </div>
            {isVisible && (
                <div className="sort__popup">
                    <ul>
                        {list.map((obj, i) => (
                            <li 
                                key={i}
                                onClick={() => onClickListItem(obj)}
                                className={sort.sortProperty === obj.sortProperty ? 'active' : ''}>
                                {obj.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
