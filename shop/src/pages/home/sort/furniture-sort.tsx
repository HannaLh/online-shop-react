import React, {memo, useState, useRef, useEffect, useCallback} from 'react';

import {SORT_NAMES, SORT_NAMES_ARRAY} from './constants';
import {FurnitureSortItem} from './item/furniture-sort-item';
import {useFurniture} from 'hooks/useFurniture';

import './furniture-sort.scss';

import type {SortPropertyType} from 'store/reducers/filter/types';


type Props = {
    value: SortPropertyType;
};

export const FurnitureSort = memo<Props>(({value}) => {
    const sortRef = useRef<HTMLButtonElement>(null);

    const [showSortPopup, setShowSortPopup] = useState(false);
    const {onChangeSortValue} = useFurniture();

    const onSelectSortItem = useCallback((sortValue: SortPropertyType) => {
        onChangeSortValue(sortValue);
        setShowSortPopup(false);
    }, [onChangeSortValue]);

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
        <button ref={sortRef} className="furniture-sort">
            <div className="furniture-sort__label">
                <b className="furniture-sort__sort-by-title">Sort by:</b>
                <span className="furniture-sort__sort-by-value" onClick={onPopupClick}>
                    {SORT_NAMES[value]}
                </span>
            </div>
            {showSortPopup && (
                <div className="furniture-sort__popup">
                    {SORT_NAMES_ARRAY.map(([sortValue, sortName]) => (
                        <FurnitureSortItem
                            key={sortValue}
                            selectedValue={value}
                            value={sortValue}
                            name={sortName}
                            onSelect={onSelectSortItem}
                        />
                    ))}
                </div>
            )}
        </button>
    );
});
