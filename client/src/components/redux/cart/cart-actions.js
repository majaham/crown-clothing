import { actionTypes } from "../action-types";

export const toggleCart = () => ({
    type: actionTypes.TOGGLE_CART
});

export const addCartItem = (item) =>({
    type: actionTypes.ADD_ITEM,
    payload: item
});

export const clearCartItem = (item) => {
    return{
        type: actionTypes.CLEAR_ITEM,
        payload: item
    }
}

export const removeCartItem = (item) => {
    return{
        type: actionTypes.REMOVE_ITEM,
        payload: item
    }
}