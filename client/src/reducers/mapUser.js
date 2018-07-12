import {
    ADD_USER

// import {
//     RECEIVE_DATA
} from '../actions/mapUserData'


export default function user(state = [], action){
    switch(action.type){
        case ADD_USER:
            
            return [...action.user]
        // case RECEIVE_DATA:
        //     return action.todos
        default:        
            return state
    }
}