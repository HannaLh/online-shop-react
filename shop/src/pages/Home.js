import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
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

export default function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isSearch = React.useRef(false);
    const isMounted = React.useRef(false);

    const { categoryId, sort, currentPage } = useSelector((state) =>state.filter);

    const {searchValue} = React.useContext(SearchContext);
    const sortType = sort.sortProperty;
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const onChangeCategory = React.useCallback((idx) => {
        dispatch(setCategoryId(idx))
    }, []);

    const onChangePage = (page) => {
        dispatch(setCurrentPage(page))
    };

    const fetchFurniture = () => {
        setIsLoading(true);

        const sortBy = sortType.replace('_', '');
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `search=${searchValue}` : '';

        axios.get(`https://645513ffa74f994b3351784a.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=asc&search=${search}`)
            .then(res => {
                setItems(res.data);
                setIsLoading(false);
            })
            .catch((error) => console.log(error));
    }

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

        useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortProperty: sortType,
                categoryId,
                currentPage,
            })
            navigate(`?${queryString}`)
        }
        isMounted.current = true;
    }, [categoryId, sortType , currentPage])

    useEffect(() => {
        window.scrollTo(0, 0);

        if (!isSearch.current) {
            fetchFurniture();
        }
        isSearch.current = false;
    }, [categoryId, sortType, searchValue, currentPage])

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
                <div className="card-flex"> {isLoading ? skeletons : furniture} </div>
                <Pagination
                    currentPage={currentPage}
                    onChangePage={onChangePage}
                />
            </div>
        </>
    )
}
