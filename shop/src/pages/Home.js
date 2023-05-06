import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'

import { setCategoryId } from '../redux/slices/filterSlice';
import Categories from '../Components/Categories/Categories';
import Sort from '../Components/Sort/Sort'
import Card from '../Components/FurnitureBlock/Card'
import Skeleton from '../Components/FurnitureBlock/Card/CardSkeleton';
import Banner from "../Components/Banner/Banner";

export default function Home() {
    const dispatch = useDispatch()
    const categoryId = useSelector(state => state.filter.categoryId);
    const sortType = useSelector(state => state.filter.sort.sortProperty);

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    }
    const sortBy = sortType.replace('_', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://645513ffa74f994b3351784a.mockapi.io/items?${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sortType.sortProperty}&order=asc`)
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
            })
    }, [categoryId, sortType])
    return (
        <>
            <Banner />
            <div className='container'>
                    <div className='container products'>
                        <div className='products-search'>
                            <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)}/>
                            <Sort />
                        </div> 
                    </div>
                    <div className="card-flex">
                        {isLoading
                            ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
                            : items.map((obj) => <Card title={obj.title} price={obj.price} image={obj.imageUrl}/>)}
                    </div>
            </div>
        </>
    )
}
