import React, {useState, useEffect} from 'react';

import Categories from '../Components/Categories/Categories';
import Sort from '../Components/Sort/Sort'
import Card from '../Components/FurnitureBlock/Card'
import Skeleton from '../Components/FurnitureBlock/Card/CardSkeleton';
import Banner from "../Components/Banner/Banner";

export default function Home() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryId, setCategoryId] = useState(0);
    const [sortType, setSortType] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://645513ffa74f994b3351784a.mockapi.io/items?category=' + categoryId)
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
            })
    }, [categoryId])
    return (
        <>
            <Banner />
            <div className='container'>
                    <div className='container products'>
                        <div className='products-search'>
                            <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)}/>
                            <Sort value={sortType} onChangeSort={(id) => setSortType(id)}/>
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
