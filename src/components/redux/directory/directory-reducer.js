import DIRECTORY_DATA from "./directory-data";

const INIT_STATE = {
    sections: DIRECTORY_DATA
}
export default function directoryReducer(state = INIT_STATE, action){
    switch(action.type){
        default:
            return state
    }    
};