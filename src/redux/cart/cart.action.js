import CartActionTypes from "./cart.actionType";

export const toggleCartHidden=()=>({
    type:CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem=item=>({
    type:CartActionTypes.ADD_ITEM_TO_CART,
    payload:item
})

export const clearItem=item=>({
    type:CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload:item
})

export const decreaseItem=item=>({
    type:CartActionTypes.DECRESE_ITEM_FROM_CART,
    payload:item
})