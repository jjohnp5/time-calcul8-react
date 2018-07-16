import {
    ADD_SHEET,
    UPDATE_SHEET

// import {
//     RECEIVE_DATA
} from '../actions/viewSheet'


export default function viewSheet(state = [], action){
    switch(action.type){
        case ADD_SHEET:
            
            return action.timesheet
        case UPDATE_SHEET:
            console.log(state)
            return state.map((s,i)=>{
                if(i === action.id){
                    s.milesTraveled = action.milesTraveled
                }
                return s
            })
        default:        
            return state
    }
}