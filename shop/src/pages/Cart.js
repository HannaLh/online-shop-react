import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CartItem  from '../Components/CartItem';
import CartEmpty from '../Components/CartEmpty'
import { clearItems } from '../redux/slices/cartSlice';

export default function Cart() {
    const dispatch = useDispatch();
    const { totalPrice, items } = useSelector((state) => state.cart);
    const totalCount = items.reduce((sum, item) => sum + item.count, 0);

    const onClickClear = () => {
        if (window.confirm('Do you want clear the cart?')) {
            dispatch(clearItems());
        }
    };

    if (!totalPrice) {
        return <CartEmpty />;
    }

    return (
        <div className="CartContainer">
            <div className="cart-header">
                <h3 className="Heading">Shopping Cart</h3>
                <button onClick={onClickClear} className="Action">Remove all</button>
            </div>
            <div className='cart-items'>
                {items.map((item) => (
                    <CartItem key={item.id} {...item} />
                ))}
            </div>
            <hr/>
            <div className="checkout">
                <div className="total">
                    <div className="subtotal">
                        Subtotal ({totalCount} items): ${totalPrice}
                    </div>
                </div>
                <button className="button">Checkout</button>
                <Link to="/"><button className="button">Go back to the main page</button></Link>
            </div>
        </div>
    );
}
