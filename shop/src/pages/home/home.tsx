import React, {useEffect} from 'react';

import {useAppSelector} from 'store';
import {filterSelector} from 'store/reducers/filter/filter';
import {Categories} from 'components/categories/categories';
import {MainBanner} from 'components/main-banner/main-banner';
import {Pagination} from 'components/pagination/pagination';
import {FurnitureBlock} from './furniture-block/furniture-block';
import {FurnitureSort} from './sort/furniture-sort';
import {useFurniture} from 'hooks/useFurniture';

import './home.scss';

export const Home = () => {
    const {categoryId, sort, currentPage} = useAppSelector(filterSelector);
    const {getAllFurniture, onChangePage, onChangeCategory} = useFurniture();

    useEffect(() => {
        getAllFurniture();
    }, [getAllFurniture]);

    return (
        <div>
            <MainBanner/>
            <div className="main-container">
                <div className="home__products-search">
                    <Categories categoryId={categoryId} onChangeCategory={onChangeCategory}/>
                    <FurnitureSort value={sort}/>
                </div>
                <FurnitureBlock/>
                <Pagination
                    currentPage={currentPage}
                    onChangePage={onChangePage}
                />
            </div>
        </div>
    );
};
