import axios from 'axios';

export default  {
    createUser: function(data){
        return axios.post('/api/user', data, {headers: {
            'Content-Type': 'application/json',
        }
    })
    },
    loadUsers: function(data){
        return axios.get('/api/user',data)
    },
    editUser: function(userId, data){
        return axios.put('/api/user/'+userId, data)
    },
    removeUser: function(userId){
        return axios.delete('/api/user/'+userId)
    }
}