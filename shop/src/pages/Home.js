import React from 'react';

import Categories from '../Components/Categories/Categories';
import Sort from '../Components/Sort/Sort'
import Card from '../Components/FurnitureItems/Card'
import Skeleton from '../Components/FurnitureItems/Card/CardSkeleton';
import Banner from "../Components/Banner/Banner";

export default function Home() {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
        fetch('https://645513ffa74f994b3351784a.mockapi.io/items')
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
            })
    }, [])
    return (
        <>
            <Banner />
            <div className='container'>
                    <div className='container products'>
                        <div className='products-search'>
                            <Categories />
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
