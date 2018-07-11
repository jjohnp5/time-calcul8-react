import auth from '../util/login'

export const AUTH_USER = 'AUTH_USER'
export const LOGOUT_USER = 'LOGOUT_USER'


 function addUser(user){
    return {
        type: AUTH_USER,
        user
    }
}
 function removeUser(user){
    return {
        type: LOGOUT_USER,
        user
    }
}
export function handleLogoutUser(i){
    return (dispatch)=>{
        dispatch(removeUser(i))
        return auth.logout()
            .catch(()=>{
                dispatch(addUser(i))
                alert('an error occured');
            })
    }
    
}
export function handleAddUser(username, password, e){
    return (dispatch) => {
        return auth.login(username, password)
            .then((token)=>{
                dispatch(addUser(token.data.token))
                e()
            }).catch(()=>{
                e()
                alert('Error adding user.')
            })
    }
}