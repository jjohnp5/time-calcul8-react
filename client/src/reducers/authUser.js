import {
    AUTH_USER,
    LOGOUT_USER

// import {
//     RECEIVE_DATA
} from '../actions/authUser'


export default function user(state = [], action){
    switch(action.type){
        case AUTH_USER:
            
            return {...state, authUser: action.user}
        case LOGOUT_USER:
            return {...state, authUser: ''}
        // case RECEIVE_DATA:
        //     return action.todos
        default:        
            return state
    }
}

