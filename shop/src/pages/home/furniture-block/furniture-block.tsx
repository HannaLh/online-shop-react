import React from 'react';

import {useAppSelector} from 'store';
import {furnitureDataSelector} from 'store/reducers/furniture/furniture';
import {SkeletonView} from './skeleton/skeleton-view';
import {FurnitureCard} from './furniture-card/furniture-card';
import {FurnitureBlockMessage as Message} from './message/furniture-block-message';
import {BoxLoading} from 'components/box-loading/box-loading';

import './furniture-block.scss';

export const FurnitureBlock = () => {
    const {items, error, loading} = useAppSelector(furnitureDataSelector);

    if (error) {
        return (
            <Message
                title="Cannot load items"
                description="It seems that some kind of error has occurred"
            />
        );
    }

    if (items?.length === 0) {
        return (
            <Message
                title="There is no any product"
                description="Please, choose another filter or try again later"
            />
        );
    }

    if (!items && loading) {
        return (
            <SkeletonView/>
        );
    }

    return (
        <BoxLoading loading={loading}>
            <div className="furniture-block">
                {(items || []).map(furniture => (
                    <FurnitureCard key={furniture.id} {...furniture}/>
                ))}
            </div>
        </BoxLoading>
    );
};
