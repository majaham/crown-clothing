import {actionTypes} from '../action-types';

export default function cartReducer(state = {hidden: true}, action){
    switch(action.type){
        case actionTypes.TOGGLE_CART:
            return {
                ...state,
                hidden: !state.hidden
            };
        default:
            return state;
    }
}