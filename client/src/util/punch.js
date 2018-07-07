import axios from 'axios';

export default  {
    createPunch: function(userId, data){
        return axios.post('/api/punch', {
            id: userId,
            punch: data
        })
    },
    editPunch: function(punchId, data){
        return axios.put('/api/punch/'+punchId, data)
    },
    removePunch: function(punchId){
        return axios.delete('/api/punch/'+punchId)
    }
}