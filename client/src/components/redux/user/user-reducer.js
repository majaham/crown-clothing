import { actionTypes } from "../action-types";

const userReducer = (state = {currentUser: null}, action) =>{
    switch(action.type){
        case actionTypes.SET_CURRENT_USER: 
        return{
            ...state,
            currentUser: action.payload
        };        
        default:
            return state;
    }
}
export default userReducer;