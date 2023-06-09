import React from 'react';
import {useSelector} from 'react-redux';

import {furnitureDataSelector} from 'store/reducers/furniture/furniture';
import {SkeletonView} from './skeleton/skeleton-view';
import {FurnitureCard} from './furniture-card/furniture-card';

import './furniture-block.scss';

export const FurnitureBlock = () => {
    const {items, error, loading} = useSelector(furnitureDataSelector);

    if (error) {
        return (
            <div className="furniture-block__error-message">
                <h2>Cannot load items</h2>
                <p>It seems that some kind of error has occurred</p>
            </div>
        );
    }

    if (!items && loading) {
        return (
            <SkeletonView/>
        );
    }
    // TODO add loading functionality
    return (
        <div className="furniture-block">
            {(items || []).map(furniture => (
                <FurnitureCard key={furniture.id} {...furniture}/>
            ))}
        </div>
    );
};
