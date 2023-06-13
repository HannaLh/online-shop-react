import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {CartItem} from './CartItem';
import {CartEmpty} from './CartEmpty';
import {clearItems, selectCart} from '../../redux/cart/slice';

export const Cart: React.FC = () => {
    const dispatch = useDispatch();
    const {totalPrice, items} = useSelector(selectCart);
    const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

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
                {items.map((item: any) => (
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
};
