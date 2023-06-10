import React, {memo, useState, useRef, useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {setSort} from 'store/reducers/filter/filter';
import {SORT_NAMES, SORT_NAMES_ARRAY} from './constants';

import './sort.scss';

import type {SortPropertyType} from 'store/reducers/filter/types';

type Props = {
    value: SortPropertyType;
};


export const Sort = memo(({value}: Props) => {
    const dispatch = useDispatch();
    const sortRef = useRef<HTMLButtonElement>(null);

    const [showSortPopup, setShowSortPopup] = useState(false);

    const onListItemClick = (sortValue: SortPropertyType) => () => {
        dispatch(setSort(sortValue));
        setShowSortPopup(false);
    };

    const onPopupClick = () => {
        setShowSortPopup(!showSortPopup);
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
                <b className="sort__sort-by-title">Sort by:</b>
                <span className="sort__sort-by-value" onClick={onPopupClick}>
                    {SORT_NAMES[value]}
                </span>
            </div>
            {showSortPopup && (
                <div className="sort__popup">
                    {SORT_NAMES_ARRAY.map(([sortValue, sortName]) => (
                        <div
                            key={sortValue}
                            onClick={onListItemClick(sortValue)}
                            className={`sort__popup-item ${value === sortValue ? 'sort__popup-item_active' : ''}`}>
                            {sortName}
                        </div>
                    ))}
                </div>
            )}
        </button>
    );
});
