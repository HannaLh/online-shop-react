import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { setCategoryId } from '../redux/slices/filterSlice';
import Categories from '../Components/Categories/Categories';
import Sort from '../Components/Sort/Sort'
import Card from '../Components/FurnitureBlock/Card'
import Skeleton from '../Components/FurnitureBlock/Card/CardSkeleton';
import Banner from "../Components/Banner/Banner";
import Pagination from '../Components/Pagination';
import { SearchContext } from '../Components/App';

export default function Home() {
    const {searchValue} = React.useContext(SearchContext);
    const dispatch = useDispatch()
    const {categoryId, sort} = useSelector((state) => state.filter);
    const sortType = sort.sortProperty;

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    // const onChangeCategory = (id) => {
    //     dispatch(setCategoryId(id))
    // }

    useEffect(() => {
        setIsLoading(true);

        const sortBy = sortType.replace('_', '');
        const category = categoryId > 0 ? `category=${categoryId}` : '';

        axios.get(`https://645513ffa74f994b3351784a.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=asc`)
            .then(res => {
                setItems(res.data);
                setIsLoading(false);
            })
            .catch((error) => console.log(error));
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
                            <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)}/>
                            <Sort value={sortType} onChangeSort={(i) => (i)}/>
                        </div> 
                    </div>
                <div className="card-flex"> {isLoading ? skeletons : furniture} </div>
                <Pagination onChangePage={number => setCurrentPage(number)}/>
            </div>
        </>
    )
}
