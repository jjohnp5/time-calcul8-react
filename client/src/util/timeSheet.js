import axios from 'axios';

export default  {
   
    findById: function(userId, data){
        return axios.get('/api/timesheet/'+userId, data)
    }
}