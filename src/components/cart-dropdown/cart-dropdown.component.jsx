import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropDown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-item'>
            {cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))}
        </div>
        <CustomButton> GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToPros = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect(mapStateToPros)(CartDropDown);