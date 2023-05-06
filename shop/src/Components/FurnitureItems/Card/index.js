import React, {useState} from 'react'
import "./Card.css"; 

export default function Card({ title, price, image }) {
    const [prodCount, setProdCount] = useState(0);
    const onClickAddProd = () => {
        setProdCount(prodCount + 1);
    }
    return (
        <div className='card'>
            <div className='card-inner'>
                <img src={image} alt='Furniture' width="309" height="309"></img>
                <div className='card-price'>
                    <h3>{title}</h3>
                    <span>{price} $</span>
                </div>
                <div className='cart-button-wrap'>
                    <button onClick={onClickAddProd} className='cart-button'>+ Add to Bag
                        <i>{prodCount}</i>
                    </button>
                </div>
            </div>
        </div>
    )
}