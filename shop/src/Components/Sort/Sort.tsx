import React, {memo, useState, useRef, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setSort} from '../../redux/filter/slice';

import './Sort.css';

import {Sort as SortType, SortPropertyEnum} from '../../redux/filter/types';

type SortListItem = {
    name: string;
    sortProperty: SortPropertyEnum;
}

type Props = {
    value: SortType;
};

export const sortList: SortListItem[] = [
    {name: 'Popularity: High to Low', sortProperty: SortPropertyEnum.RATING_DESC},
    {name: 'Popularity: Low to High', sortProperty: SortPropertyEnum.RATING_ASC},
    {name: 'Price: High to Low', sortProperty: SortPropertyEnum.PRICE_DESC},
    {name: 'Price: Low to High', sortProperty: SortPropertyEnum.PRICE_ASC},
];

export const Sort: React.FC<Props> = memo(({value}) => {
    const dispatch = useDispatch();
    const sortRef = useRef<HTMLButtonElement>(null);

    const [showSortPopup, setShowSortPopup] = useState(false);

    const onClickListItem = (obj: SortListItem) => {
        dispatch(setSort(obj));
        setShowSortPopup(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
            setShowSortPopup(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => (
            document.removeEventListener('click', handleClickOutside)
        );
    }, []);

    return (
        <button ref={sortRef} className="sort">
            <div className="sort__label">
                <b>Sort by:</b>
                <span onClick={() => setShowSortPopup(!showSortPopup)}>{value.name}</span>
            </div>
            {showSortPopup && (
                <div className="sort__popup">
                    <ul>
                        {sortList.map((obj, i) => (
                            <li
                                key={i}
                                onClick={() => onClickListItem(obj)}
                                className={value.sortProperty === obj.sortProperty ? 'active' : ''}>
                                {obj.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </button>
    );
});
