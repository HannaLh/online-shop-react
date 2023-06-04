import React, {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import qs from 'qs';
import {useNavigate} from 'react-router-dom';

import {selectFilter, setCategoryId, setCurrentPage} from '../../redux/filter/slice';
import {Categories} from '../../Components/Categories/Categories';
import {Sort} from '../../Components/Sort/Sort';
import {Card} from '../../Components/FurnitureBlock/Card';
import Skeleton from '../../Components/FurnitureBlock/Card/CardSkeleton';
import {Banner} from '../../Components/Banner/Banner';
import {Pagination} from '../../Components/Pagination/pagination';
import {fetchFurniture, selectFurnitureData} from '../../redux/furniture/slice';

import './Home.scss';

const Home: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {items, status} = useSelector(selectFurnitureData);
    const {categoryId, sort, currentPage, searchValue} = useSelector(selectFilter);

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

    const furniture = (items || []).map((obj: any) => <Card key={obj.id}{...obj} />);
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

    return (
        <>
            <Banner />
            <div className='container'>
                <div className='container products'>
                    <div className='products-search'>
                        <Categories categoryId={categoryId} onChangeCategory={onChangeCategory}/>
                        <Sort value={sort} />
                    </div>
                </div>
                {status === 'error' && (
                    <div className='container'>
                        <h2>Cannot load items</h2>
                        <p>It seems that some kind of error has occured</p>
                    </div>
                )}
                {status === 'loading' && !items && (
                    <div className="card-flex">{skeletons}</div>
                )}
                {status === 'completed' && (
                    <div className="card-flex">{furniture}</div>
                )}
                <Pagination
                    currentPage={currentPage}
                    onChangePage={onChangePage}
                />
            </div>
        </>
    );
};

export default Home;
