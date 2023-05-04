import React, {useState} from 'react'
import "./Card.css"; 

function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('/Users/annaleoshko/Desktop/online-shop-react/shop/src/img/goods', false, /\.png/));

export default function Card({ title, price }) {
    const [prodCount, setProdCount] = useState(0);
    const onClickAddProd = () => {
        setProdCount(prodCount + 1);
    }
    return (
        <div className='card'>
            <div className='card-inner'>
                <img src={images['sofa1.png']} alt='Furniture'></img>
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