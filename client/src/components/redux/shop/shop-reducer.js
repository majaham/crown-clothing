import { actionTypes } from '../action-types';

const INIT_STATE = {
    collections: null
};

export default function shopReducer(state = INIT_STATE, action ){
    switch(action.type){
        case actionTypes.UPDATE_COLLECTIONS: 
            return{
                ...state,
                collections: action.payload
            }
        default:
            return state;
    }
}