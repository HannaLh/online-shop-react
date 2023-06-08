import React, {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import qs from 'qs';
import {useNavigate} from 'react-router-dom';

import {filterSelector, setCategoryId, setCurrentPage} from 'store/reducers/filter/filter';
import {Categories} from '../../components/categories/categories';
import {Sort} from '../../components/sort/sort';
import {FurnitureCard} from '../../components/furniture-card/furniture-card';
import {Skeleton} from '../../components/furniture-card/furniture-card-skeleton';
import {MainBanner} from '../../components/main-banner/main-banner';
import {Pagination} from '../../components/pagination/pagination';
import {fetchFurniture, furnitureDataSelector} from 'store/reducers/furniture/furniture';

import './home.scss';

export const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {items, status} = useSelector(furnitureDataSelector);
    const {categoryId, sort, currentPage, searchValue} = useSelector(filterSelector);

    const sortType = sort.sortProperty;

    const onChangeCategory = React.useCallback((idx: number) => {
        dispatch(setCategoryId(idx));
    }, [dispatch]);

    const onChangePage = (page: number) => {
        dispatch(setCurrentPage(page));
    };

    const getFurniture = useCallback(() => {
        const sortBy = sort.sortProperty.replace('-', '');
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
        const category = categoryId > 0 ? String(categoryId) : '';
        const search = searchValue;

        dispatch(
            // @ts-ignore
            fetchFurniture({
                sortBy,
                order,
                category,
                search,
                currentPage: String(currentPage),
            }),
        );
    }, [sort.sortProperty, categoryId, searchValue, dispatch, currentPage]);

    useEffect(() => {
        const params = {
            categoryId: categoryId > 0 ? categoryId : null,
            sortProperty: sortType,
            currentPage,
        };
        const queryString = qs.stringify(params, {skipNulls: true});

        navigate(`/?${queryString}`);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        getFurniture();
    }, [getFurniture]);

    const furniture = (items || []).map((obj: any) => <FurnitureCard key={obj.id}{...obj} />);
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

    return (
        <div className="home">
            <MainBanner/>
            <div className="main-container">
                <div className="home__products-search">
                    <Categories categoryId={categoryId} onChangeCategory={onChangeCategory}/>
                    <Sort value={sort} />
                </div>
                {status === 'error' && (
                    <div className="home__error-message">
                        <h2>Cannot load items</h2>
                        <p>It seems that some kind of error has occurred</p>
                    </div>
                )}
                {status === 'loading' && !items && (
                    <div className="home__products-container">{skeletons}</div>
                )}
                {status === 'completed' && (
                    <div className="home__products-container">{furniture}</div>
                )}
                <Pagination
                    currentPage={currentPage}
                    onChangePage={onChangePage}
                />
            </div>
        </div>
    );
};
