

export const ADD_SHEET = 'ADD_SHEET'

function addUserSheets(timesheet){
    return {
        type: ADD_SHEET,
        timesheet
    }
}

export function handleViewTimesheet(sheet){
    return (dispatch) => {
        dispatch(addUserSheets(sheet))
    }
}