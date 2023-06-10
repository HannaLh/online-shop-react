import React, {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import qs from 'qs';
import {useNavigate} from 'react-router-dom';

import {filterSelector, setCategoryId, setCurrentPage} from 'store/reducers/filter/filter';
import {Categories} from 'components/categories/categories';
import {MainBanner} from 'components/main-banner/main-banner';
import {Pagination} from 'components/pagination/pagination';
import {fetchFurniture} from 'store/reducers/furniture/actions';
import {FurnitureBlock} from './furniture-block/furniture-block';
import {FurnitureSort} from './sort/furniture-sort';

import './home.scss';

export const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {categoryId, sort, currentPage, searchValue} = useSelector(filterSelector);

    const onChangeCategory = React.useCallback((idx: number) => {
        dispatch(setCategoryId(idx));
    }, [dispatch]);

    const onChangePage = (page: number) => {
        dispatch(setCurrentPage(page));
    };

    const getFurniture = useCallback(() => {
        const sortBy = sort.replace('-', '');
        const order = sort.includes('-') ? 'asc' : 'desc';
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
    }, [sort, categoryId, searchValue, dispatch, currentPage]);

    useEffect(() => {
        const params = {
            categoryId: categoryId > 0 ? categoryId : null,
            sortProperty: sort,
            currentPage,
        };
        const queryString = qs.stringify(params, {skipNulls: true});

        navigate(`/?${queryString}`);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        getFurniture();
    }, [getFurniture]);

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
