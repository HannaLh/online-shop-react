import React from 'react';
import "./Sort.css";
import { useDispatch, useSelector } from 'react-redux';
import { selectSort, setSort } from '../../redux/slices/filterSlice';

export const sortList = [
    { name: 'popularity', sortProperty: 'rating' },
    { name: 'price', sortProperty: 'price' },
    { name: 'alphabet', sortProperty: 'title' }
];

export default function Sort() {
    const dispatch = useDispatch();
    const sort = useSelector(selectSort);
    const sortRef = React.useRef();

    const [isVisible, setIsVisible] = React.useState(false);
    
    const onClickListItem = (obj) => {
        dispatch(setSort(obj));
        setIsVisible(false);
    }

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.composedPath().includes(sortRef.current)) {
                setIsVisible(false);
            }
        };
        document.body.addEventListener('click', handleClickOutside);

        return () => {document.body.removeEventListener('click', handleClickOutside)}

    }, []);

    return (
        <button ref={sortRef} className="sort">
            <div className="sort__label">
                <b>Sort by:</b>
                <span onClick={() => setIsVisible(!isVisible)}>{sort.name}</span>
            </div>
            {isVisible && (
                <div className="sort__popup">
                    <ul>
                        {sortList.map((obj, i) => (
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
        </button>
    )
}
