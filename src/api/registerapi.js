import axios from "axios";
// import { url } from "../constants";

const registerapi = async(data) => {

const response=await axios({
    url:`http://localhost/auth/post`,
    method:'POST',
    headers:{'Content-Type':'application/json'},
    data:JSON.stringify(data)

})
return response.data
};
export default registerapi;
