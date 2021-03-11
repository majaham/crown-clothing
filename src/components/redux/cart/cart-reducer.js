import { addCartItems } from '../../../utils/cart-items';
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
                cartItems: addCartItems(state.cartItems, {...action.payload, quantity: 1}) //[...state.cartItems, action.payload]
            };
        default:
            return state;
    }
}