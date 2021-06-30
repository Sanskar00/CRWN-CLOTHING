import React from 'react'

import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.action';

import { clearItem } from '../../redux/cart/cart.action';

import { decreaseItem } from '../../redux/cart/cart.action';

import './checkout-item.scss'

const CheckoutItem=({cartItem,clearItem,addItem,decreaseItem})=>{
    const {name,imageUrl,price,quantity}=cartItem
   return(
        <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item'/>
         </div>
         <span className='name'>{name}</span>
         <span className='quantity'>
             <div className='arrow' onClick={()=>decreaseItem(cartItem)}>&#10094;</div>
             <soan className='value'>{quantity}</soan>
             <div className='arrow' onClick={()=>addItem(cartItem)}>&#10095;</div>
        </span>
         <span className='price'>{price}</span>
         <div className='remove-button' onClick={()=>clearItem(cartItem)}>&#10005;</div>

    </div>)
}


const mapDispatchToProps=dispatch=>({
    clearItem:item=>dispatch(clearItem(item)),
    addItem:item=>dispatch(addItem(item)),
    decreaseItem:item=>dispatch(decreaseItem(item))
})
export default connect(null,mapDispatchToProps)(CheckoutItem)