import user from '../util/user'

export const ADD_USER = 'ADD_USER'

function userTimesheets(user){
    return {
        type: ADD_USER,
        user
    }
}

export function handleMapUserTimesheets(id){
    return (dispatch) => {
        return user.getUsers(id)
            .then((user)=>{
                console.log(user)

                dispatch(userTimesheets(user.data))
            }).catch(()=>{
                alert('Error mapping user timesheets.')
            })
    }
}