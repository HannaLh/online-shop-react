import React from 'react';
import "./Drawer.css";
import cartSofa1 from "/Users/annaleoshko/Desktop/online-shop-react/shop/src/img/goods/sofa1.png"

export default function Drawer() {
    return(
        <div className='overlay'>
            <div className='drawer'>
                <h3>Cart</h3>
                <div className='cart-item'>
                    <img src={cartSofa1} alt="cart-item"></img>
                    <p>green 2-Seater velvet sofa</p>
                    <b>Price: $299</b>
                </div>
                <button>
                    <img alt=""></img>
                </button>
            </div>
        </div>
    )
}