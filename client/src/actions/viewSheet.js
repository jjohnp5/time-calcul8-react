

export const ADD_SHEET = 'ADD_SHEET';
export const UPDATE_SHEET = 'UPDATE_SHEET'

function addUserSheets(timesheet){
    return {
        type: ADD_SHEET,
        timesheet
    }
}
function updateUserSheets(updateData){
    return {
        type: UPDATE_SHEET,
        updateData
    }
}

export function handleViewTimesheet(sheet){
    return (dispatch) => {
        dispatch(addUserSheets(sheet))
    }
}
export function handleUpdateSheet(sheet){
    return (dispatch)=>{
        dispatch(updateUserSheets(sheet))
    }
}