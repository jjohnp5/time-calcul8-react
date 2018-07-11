import axios from 'axios';


export default  {
    login: function(username, password){
        console.log(username, password)
        return axios.post('/login', {username, password}, {headers: {
            'Content-Type': 'application/json'
        }})
    },
    logout: ()=>{  
        return axios.get('/logout')
    }
}