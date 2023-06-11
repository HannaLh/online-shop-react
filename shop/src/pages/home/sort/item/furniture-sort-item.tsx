import React, {memo} from 'react';
import './furniture-sort-item.scss';
import type {SortPropertyType} from 'store/reducers/filter/types';

type Props = {
    selectedValue: SortPropertyType,
    value: SortPropertyType,
    name: string,
    onSelect: (value: SortPropertyType) => void,
};

export const FurnitureSortItem = memo<Props>(({
    selectedValue,
    value,
    name,
    onSelect,
}) => {
    const mix = value === selectedValue ? 'furniture-sort-item_active' : '';

    const onSortItemClick = () => {
        onSelect(value);
    };

    return (
        <div
            key={value}
            onClick={onSortItemClick}
            className={`furniture-sort-item ${mix}`}>
            {name}
        </div>
    );
});
