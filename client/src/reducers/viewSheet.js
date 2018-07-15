import {
    ADD_SHEET

// import {
//     RECEIVE_DATA
} from '../actions/viewSheet'


export default function viewSheet(state = [], action){
    switch(action.type){
        case ADD_SHEET:
            
            return action.timesheet
        // case RECEIVE_DATA:
        //     return action.todos
        default:        
            return state
    }
}