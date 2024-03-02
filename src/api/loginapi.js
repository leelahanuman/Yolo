import axios from "axios";




const loginapi=async(data)=>{
   const response= await axios({
    url:`http://localhost/auth/login`,
    method:"POST",
    headers:{'Content-Type':'application/json'},
    data:JSON.stringify(data)
    })
    return response.data
};
export default loginapi;