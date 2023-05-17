import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import { setCategoryId, setCurrentPage, setFilters } from '../redux/slices/filterSlice';
import Categories from '../Components/Categories/Categories';
import Sort, { sortList } from '../Components/Sort/Sort'
import Card from '../Components/FurnitureBlock/Card'
import Skeleton from '../Components/FurnitureBlock/Card/CardSkeleton';
import Banner from "../Components/Banner/Banner";
import Pagination from '../Components/Pagination';
import { SearchContext } from '../Components/App';
import {  fetchFurniture } from '../redux/slices/furnitureSlice';

export default function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isSearch = React.useRef(false);
    const isMounted = React.useRef(false);

    const {items, status} = useSelector((state) => state.furniture);
    const { categoryId, sort, currentPage } = useSelector((state) =>state.filter);

    const {searchValue} = React.useContext(SearchContext);
    const sortType = sort.sortProperty;
    // const [isLoading, setIsLoading] = useState(true);

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    };

    const onChangePage = (page) => {
        dispatch(setCurrentPage(page))
    };

    const getFurniture = async () => {
        const sortBy = sortType.replace('_', '');
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `search=${searchValue}` : '';

        dispatch(
            fetchFurniture({
                sortBy,
                category,
                search,
                currentPage,
            }),
        );
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        if (isMounted.current) {
            const params = {
                categoryId: categoryId > 0 ? categoryId : null,
                sortProperty: sortType,
                currentPage,
            };
            const queryString = qs.stringify(params, { skipNulls: true });
            navigate(`/?${queryString}`);
        }
        if (!window.location.search) {
            fetchFurniture();
        }
    }, [categoryId, sortType , searchValue, currentPage])

    useEffect(() => {
        getFurniture();
    }, [categoryId, sortType, searchValue, currentPage])


    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));

            const sort = sortList.find((obj) => obj.sortProperty === params.sortProperty);
        
            dispatch(
                setFilters({
                    ...params,
                    sort,
                })
            );
            isSearch.current = true;
        }
    }, [])


    const furniture = items.filter(obj => {
        if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
            return true;
        }
        return false;
    }).map((obj) => <Card key={obj.id}{...obj} />);
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

    return (
        <>
            <Banner />
            <div className='container'>
                    <div className='container products'>
                        <div className='products-search'>
                            <Categories value={categoryId} onChangeCategory={onChangeCategory}/>
                            <Sort value={sortType} onChangeSort={(i) => (i)}/>
                        </div> 
                </div>
                {status === 'error' ? (
                    <div className='container'>
                        <h2>Cannot load items</h2>
                        <p>It seems that some kind of error has occured</p>
                    </div>
                ) : (
                    <div className="card-flex"> {status === 'loading' ? skeletons : furniture} </div>
                )}
                <Pagination
                    currentPage={currentPage}
                    onChangePage={onChangePage}
                />
            </div>
        </>
    )
}
