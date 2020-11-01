import axios from "axios"

const getEmployees = function() {
    return axios.get('https://randomuser.me/api/');
  }


export default getEmployees; 