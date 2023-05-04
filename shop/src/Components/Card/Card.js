import React, {useState} from 'react'
import "./Card.css"; 
import prod1 from "../assets/img/goods/sofa1.png"


export default function Card({ title, price }) {
    const [prodCount, setProdCount] = useState(0);
    const onClickAddProd = () => {
        setProdCount(prodCount + 1);
    }
    return (
        <div className='card'>
            <div className='card-inner'>
                <img src={prod1} alt='Furniture'></img>
                <div className='card-price'>
                    <h3>{title}</h3>
                    <span>{price} $</span>
                </div>
                <p className='card-description'>Green 2-Seater velvet sofa</p>
                <div className='cart-button-wrap'>
                    <button onClick={onClickAddProd} className='cart-button'>+ Add to Bag
                        <i>{prodCount}</i>
                    </button>
                </div>
            </div>
        </div>
    )
}