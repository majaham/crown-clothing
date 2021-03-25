import { actionTypes } from '../action-types';

const INIT_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
};

export default function shopReducer(state = INIT_STATE, action ){
    switch(action.type){
        case actionTypes.FETCH_COLLECTIONS_START:
            return{
                ...state,
                isFetching: true
            }
        case actionTypes.FETCH_COLLECTIONS_SUCCESS:
            return{
                ...state,
                isFetching: false,
                collections: action.payload
            }
        case actionTypes.FETCH_COLLECTIONS_FAILURE:
            return{
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}