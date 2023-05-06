import React from 'react';
import { Link } from 'react-router-dom';


export default function Cart() {
    return (
        <div class="CartContainer">
            <div class="cart-header">
                <h3 class="Heading">Shopping Cart</h3>
                <h5 class="Action">Remove all</h5>
            </div>

            <div class="Cart-Items">
                <div class="image-box">
                    {/* <img src="images/grapes.png" /> */}
                </div>
                <div class="about">
                    <h1 class="title">Grapes Juice</h1>
                    {/* <img src="images/veg.png"/> */}
                </div>
                <div class="counter">
                    <button class="btn">+</button>
                    <button class="count">1</button>
                    <button class="btn">-</button>
                </div>
                <div class="prices">
                    <button class="amount">$3.19</button>
                    <br/>
                    <button class="remove"><u>Remove</u></button>
                </div>
            </div>
            <div class="Cart-Items">
                <div class="image-box">
                    {/* <img src="images/grapes.png" /> */}
                </div>
                <div class="about">
                    <h1 class="title">Grapes</h1>
                    {/* <img src="images/veg.png"/> */}
                </div>
                <div class="counter">
                    <button class="btn">+</button>
                    <button class="count">1</button>
                    <button class="btn">-</button>
                </div>
                <div class="prices">
                    <button class="amount">$3.19</button>
                    <br/>
                    <button class="remove"><u>Remove</u></button>
                </div>
            </div>
            
            <hr/>
            <div class="checkout">
                <div class="total">
                    <div class="subtotal">
                        Subtotal (0 items): $0
                    </div>
                </div>
                <button class="button">Checkout</button>
                <Link to="/"><button class="button">Go back to the main page</button></Link>
            </div>
        </div>
    );
}
