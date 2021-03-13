import SHOP_DATA from './shop.data';

const INIT_STATE = {
    collections: SHOP_DATA
};

export default function shopReducer(state = INIT_STATE, action ){
    switch(action.type){
        default:
            return state;
    }
}