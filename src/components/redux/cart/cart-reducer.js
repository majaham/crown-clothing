import { addCartItem, removeCartItem } from '../../../utils/cart-items';
import {actionTypes} from '../action-types';

const INIT_STATE = {
    hidden: true, 
    cartItems: []
};

export default function cartReducer(state = INIT_STATE, action){
    switch(action.type){
        case actionTypes.TOGGLE_CART:
            return {
                ...state,
                hidden: !state.hidden
            };
        case actionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: addCartItem(state.cartItems, {...action.payload, quantity: 1})
            };
        case actionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeCartItem(state.cartItems, action.payload)
            };
        case actionTypes.CLEAR_ITEM:
            return{
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            };
        default:
            return state;
    }
}